"use server"
import dbConnect from "../../../libs/mongoose";
import Contact from "../../../models/Contact";
import { signUpSchema } from "../../../libs/types";

const ContactForm = async (prevState: any, formData: FormData ) => {
  await dbConnect();
  try {
      const rawFormData = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        message: formData.get('message')
      }

      const validationResult = signUpSchema.safeParse(rawFormData); 
      
      if (!validationResult.success) {
        const validationErrors = validationResult.error.flatten();
        return {
          errors: validationErrors.fieldErrors,
          message: "failed to validate"
        };
      }

      const validatedData = validationResult.data;

      const contact = new Contact(validatedData)
      await contact.save()

      return {
        message: "Form Submitted Successfully",
      }

  } catch (error) {
      return {
        errors: { server: "An error occurred while submitting the form" },
        message: ""
      };
  }
}

export default ContactForm
