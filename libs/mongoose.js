import mongoose from "mongoose";
const uri = process.env.MONGODB_URI

export default async function dbConnect() {
  try {
    await mongoose.connect(uri)
    console.log("database has been connected")
  } catch(error) {
    handleError(error)
  }
}