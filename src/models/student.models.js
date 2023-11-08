import mongoose from "mongoose";
import validator from "validator";
const studentSchema =new  mongoose.Schema({
  name:{
    type:String,
    require:true,

  },
  email:{
    type:String,
    require:true, 
    validator(value) {
        if(!validator.isEmail){
          throw new Error("Email is Wrong!")
        }
      }   
  },
  phone:{
    type:Number,
    min:10,
    unique:true
  },
  address:{
    type:String,
    require:true,
  }
})

export const Student = new mongoose.model("Student",studentSchema)