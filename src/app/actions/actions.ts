"use server"
import dbConnect from "../../../libs/mongoose";
import Contact from "../../../models/Contact";
import { z } from 'zod'

const schema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  firstname: z.string().min(2, {
    message: "firstname is required"
  }),
  lastname: z.string().min(2, {
    message: "Last name is required"
  }),
  message: z.string().min(2, {
    message: "Message field is required"
  }),
});

const ContactForm = async (prevState: any, formData: FormData ) => {
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
        const validationErrors = validationResult.error.flatten();
        return {
          errors: validationErrors.fieldErrors,
          // message: "failed to validate"
        };
      }

      const validatedData = validationResult.data;

      const contact = new Contact(validatedData)
      await contact.save()

      return {
        message: "Form Submitted Successfully",
        errors: {}
      }

  } catch (error) {
      return {
        errors: { server: "An error occurred while submitting the form" },
        message: ""
      };
  }
}

export default ContactForm
