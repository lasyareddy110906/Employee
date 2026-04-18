import exp from "express"
import { userModel } from "../models/employeeModel.js"

export const empApp = exp.Router()

empApp.post("/", async (req, res) => {
  try {
    const { name, email, mobile, designation, companyName } = req.body

    // basic validation
    if (!name  || !email || !mobile || !designation || !companyName) {
      return res.status(400).json({ message: "Missing required fields" })
    }

    // check duplicate user by email
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ message: "Employee already exists" })
    }

    // create new employee
    const newUserDoc = new userModel({ name, email, mobile, designation, companyName })
    await newUserDoc.save()

    res.status(201).json({ message: "Employee created", employee: newUserDoc })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})


//read employee details
empApp.get("/",  async (req, res) => {
  try {
    const employees = await userModel.find()
    res.status(200).json({ employees })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }   
})

//edit employee details
empApp.put("/:id", async (req, res) => {
  try {
    const empId = req.params.id
    const updateData = req.body
    const updatedEmployee = await userModel.findByIdAndUpdate(empId, updateData, { returnDocument: "after" })
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" })
    }
    res.status(200).json({ message: "Employee updated", employee: updatedEmployee })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  } 

})

//delete employee details
empApp.delete("/:id",  async (req, res) => {
  try {
    const empId = req.params.id
    const deletedEmployee = await userModel.findByIdAndDelete(empId)
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" })
    }
    res.status(200).json({ message: "Employee deleted", employee: deletedEmployee })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})