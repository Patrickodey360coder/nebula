import mongoose from "mongoose";
const uri = process.env.MONGODB_URI

if(!uri) {
  throw new Error('Please specify a valid database URI');
}

export default async function dbConnect() {
  try {
    console.log("database")
    await mongoose.connect(uri)
    let cached = global.mongoose;
    if(!cached) {
      cached = global.mongoose = {conn: null, promise: null}
    }
    console.log("database has been connected")
  } catch(error) {
    handleError(error)
    console.log(error)
  }
}