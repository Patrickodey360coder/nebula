"use server"
import dbConnect from "../../../libs/mongoose";
import Contact from "../../../models/Contact";
import { z } from 'zod'

dbConnect();

const schema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  firstname: z.string({
    message: "firstname is required",
    required_error: "firstname is required",
    invalid_type_error: "firstname must be a string"
  }),
  lastname: z.string({
    message: "lastname is required",
    required_error: "lastname is required",
    invalid_type_error: "lastname must be a string"
  }),
  message: z.string({
    message: "Message is required",
    required_error: "Message is required",
    invalid_type_error: "message must be a string"
  }),
});

const contactForm = async (prevState: any, formData: FormData ) => {
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
