import { z } from "zod"

export const signUpSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname is required"
  }),
  lastname: z.string().min(2, {
    message: "Lastname is required"
  }),
  email: z.string().email({
    message: "Invalid email address"
  }),
  message: z.string().min(2, {
    message: "Message is required"
  })
}); 

export type TSignUpSchema = z.infer<typeof signUpSchema>