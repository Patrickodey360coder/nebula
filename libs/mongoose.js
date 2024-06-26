import mongoose from "mongoose";
const uri = process.env.MONGODB_URI

<<<<<<< HEAD
if(!uri) {
  throw new Error('Please specify a valid database URI');
}

=======
>>>>>>> 2d59df8fed3889b177b6ab1bbef5a5a1d743afbc
export default async function dbConnect() {
  try {
    await mongoose.connect(uri)
    console.log("database has been connected")
  } catch(error) {
    handleError(error)
  }
}