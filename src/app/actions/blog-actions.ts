"use server"
import dbConnect from "../../../libs/mongoose"
import Blog from '../../../models/Blog.js'
import { BlogSchema } from "../../../libs/types"

const BlogForm = async (formData : FormData) => {
  await dbConnect();
  try {
    const rawFormData = {
      title: formData.get('content') as string,
      author: formData.get('author') as string,
      content: formData.get('content') as string
    }

    const validationResult = BlogSchema.safeParse(rawFormData);

    if (!validationResult.success) {
      const validationErrors = validationResult.error.flatten();
      return {
        errors: validationErrors.fieldErrors,
        message: "failed to validate"
      };
    }

    const validatedData = validationResult.data;

    const blog = new Blog(validatedData)
    await blog.save();

    return {
      message: "Post has been Added"
    }
  } catch (error) {
    return {
      errors: {
        server: "An Error occoured while submitting the form"
      },
      message: ""
    }
  }
}

export default BlogForm