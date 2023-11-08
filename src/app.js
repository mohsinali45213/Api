import express from 'express'
import connectDB from './db/index.js'
import { Student } from './models/student.models.js'
import dotenv from 'dotenv'
dotenv.config({
  path: '../.env',
})
const app = express()

connectDB()
app.use(express.json())

//GET Method

app.get('/student', async (req, res) => {
  try {
    const getStudent = await Student.find()
    res.status(200).send(getStudent)
  } catch (error) {
    res.status(400).send(error)
  }
})

//GET Single student

app.get('/student/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const studentData = await Student.findById(_id)

    if (!studentData) {
      return res.status(404).send()
    } else {
      return res.status(200).send(studentData)
    }
  } catch (error) {
    res.status(400).send(error)
  }
})

//POST Method

app.post('/student', async (req, res) => {
  try {
    const user = new Student(req.body)
    const createUser = await user.save()
    res.status(201).send(createUser)
  } catch (e) {
    res.status(400).send(e)
  }
})

//PUT && PATCH 

app.patch("/student/:id",async(req,res)=>{
  try {
    const _id = req.params.id
    const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{new:true})
    console.log(updateStudents);
    res.send(updateStudents).status(200)
  } catch (err) {
    res.status(400).send(err)
  }
})

//DELETE Method

app.delete('/student/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const studentData = await Student.findByIdAndDelete(_id)

    if (!studentData) {
      return res.status(404).send()
    } else {
      return res.status(200).send(studentData)
    }
  } catch (error) {
    res.status(400).send(error)
  }
})


// app.post('/student', (req, res) => {
//   const user = new Student(req.body)
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user)
//     })
//     .catch((e) => {
//       res.status(400).send(e)
//     })
//   console.log(req.body)
// })
app.listen(3000, () => {
  console.log('Server start on : http://localhost:3000')
})
