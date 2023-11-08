import express from "express" 
import { Student } from "../models/student.models.js"  
const router = new express.Router()



//GET Method

router.get('/student', async (req, res) => {
  try {
    const getStudent = await Student.find()
    res.status(200).send(getStudent)
  } catch (error) {
    res.status(400).send(error)
  }
})

//GET Single student

router.get('/student/:id', async (req, res) => {
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

router.post('/student', async (req, res) => {
  try {
    const user = new Student(req.body)
    const createUser = await user.save()
    res.status(201).send(createUser)
  } catch (e) {
    res.status(400).send(e)
  }
})

//PUT && PATCH 

router.patch("/student/:id",async(req,res)=>{
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

router.delete('/student/:id', async (req, res) => {
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


// router.post('/student', (req, res) => {
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
export default router