import mongoose from "mongoose";
const uri = process.env.MONGODB_URI

if(!uri) {
  throw new Error('Please specify a valid database URI');
}

export default async function dbConnect() {
  try {
    await mongoose.connect(uri)
    console.log("database has been connected")
  } catch(error) {
    console.log(error);
  }
}