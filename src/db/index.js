import mongoose from "mongoose";
const DB_NAME = "students-api"
const connectDB= async()=>{
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log("MongoDb connect successful")
  } catch (error) {
    console.log("MongoDB connection Failed:",error);
    process.exit(1);
  }
}
export default connectDB
