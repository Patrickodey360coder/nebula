const mongoose = require("mongoose");

const {model, Schema} = mongoose

const ContactSchema = new Schema({
  firstname: {type: String, required: true},
  secondname: {type: String, required: true},
  email: {type: String, required: true},
  message: {type: String, required: true}
});

const Contact = model("Contact", ContactSchema  )
export default Contact