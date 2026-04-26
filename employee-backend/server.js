import exp from 'express'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import { empApp } from './APIs/employeeAPI.js'
import cors from 'cors'

config()

//create express app
const app = exp()

//enable cors
const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:5173'].filter(Boolean)
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))

//cookie parser middleware
app.use(cookieParser())

//body parser middleware
app.use(exp.json())

//path level middleware
app.use('/api/emp', empApp)

//assign port
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on ${port}..`))

//connect to db
const connectDB = async () => {
  if (!process.env.DB_URL) {
    console.error("CRITICAL ERROR: DB_URL environment variable is missing!")
    return
  }

  try {
    await connect(process.env.DB_URL)
    console.log("DB connected successfully")
  } catch (err) {
    console.log("Error in DB connection", err)
  }
}

//call DB connection
connectDB()

//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url)
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
  console.log("error is ", err)
  console.log("Full error:", JSON.stringify(err, null, 2))

  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message
    })
  }

  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message
    })
  }

  //duplicate key error (MongoDB)
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0]
    const value = keyValue[field]

    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`
    })
  }

  //fallback error
  res.status(500).json({
    message: "error occurred",
    error: err.message || "Server side error"
  })
})