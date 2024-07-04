"use server"
import dbConnect from "../../../libs/mongoose";
import Contact from "../../../models/Contact";
import { z } from 'zod'

const schema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  firstname: z.string().min(1, {
    message: "firstname is required",
  }),
  lastname: z.string().min(1, {
    message: "lastname is required",
  }).max(100),
  message: z.string().min(10, {
    message: "Message is required",
  }),
});

const contactForm = async ( formData: FormData ) => {
  await dbConnect();
  try {
      const rawFormData = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        message: formData.get('message')
      }

      const validationResult = schema.safeParse(rawFormData); 
      
      if (!validationResult.success) {
        return {
          errors: validationResult.error.flatten().fieldErrors
        };
      }
      const validatedData = validationResult.data

      const contact = new Contact(validatedData)
      await contact.save()

      return {
        message: "Form Submitted Successfully"
      }

  } catch (error) {
      return {
        errors: { server: "An error occurred while submitting the form" }
      };
  }
}

export default contactForm
