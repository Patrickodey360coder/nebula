"use server"
import dbConnect from "../../../libs/mongoose";
import Contact from "../../../models/Contact";

dbConnect();

const contactForm = async ( formData: FormData ) => {
  try {
  
      const rawFormData = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        message: formData.get('message')
      }
  
      const contact = new Contact(rawFormData)
      await contact.save()

  } catch (error) {
    console.log(error)
  }
}

export default contactForm
