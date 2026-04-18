import exp from 'express'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import { empApp } from './APIs/employeeAPI.js'
import cors from 'cors'
config()


const app = exp()
//add cors middleware
app.use(cors({
    origin: 'http://localhost:5173',
    
}))

//cookie parser middleware
app.use(cookieParser())
//body parser middleware
app.use(exp.json())
//path level middleware
app.use('/api/emp', empApp)

// connect database
const connectDB = async () => {
    try {
        await connect(process.env.DB_URL)
        console.log("DB connected successfully")

        const port = process.env.PORT || 4000

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })

    } catch (err) {
        console.log("Error in DB connection", err)
    }
}

// call the function
connectDB()

//to handle invalid path
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`path ${req.url} is invalid`})
})

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.stack)
    console.log(err.message)
    //validation error
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error occured ",error:err.message})
    }
    //cast error
    if(err.name==="CastError"){
        return res.status(400).json({message:"error occured ",error:err.message})
    }
    //mongoose error
    if(err.name==="MongooseError"){
        return res.status(500).json({message:"error occured ",error:err.message})
    }

})