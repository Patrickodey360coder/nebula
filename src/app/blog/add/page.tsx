"use client"
import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import { BlogSchema, TBlogSchema } from '../../../../libs/types';
import { zodResolver } from '@hookform/resolvers/zod';
import Blog from '@/app/actions/blog-actions';

const Page = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
   } = useForm<TBlogSchema>({
    resolver: zodResolver(BlogSchema)
   });

   const [ showSuccessAlert, setShowSuccessAlert ] = useState(false);
   const [ showErrorAlert, setShowErrorAlert] = useState(false)

  const onSubmit = async (data: TBlogSchema) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('content', data.content);

    const response = await Blog(formData);

    if (response.errors) {
      console.log(response.errors || "An error occoured while submitting the form")
      setShowErrorAlert(true)
    } else {
      setShowSuccessAlert(true)
      reset()
    }
  } 

  return (
    <section className='max-w-[1640px] mx-auto h-[1000px]'>
      <h1 className="text-3xl font-bold my-5 text-center"> Add New Blog</h1>
      
      {showSuccessAlert && (
          <div className="mx-auto mt-4 max-w-xl sm:mt-6">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">Form Submitted Successfully</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-green-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  onClick={() => setShowSuccessAlert(false)}
                >
                  <title>Close</title>
                  <path d="M14.348 5.652a1 1 0 010 1.414L11.414 10l2.934 2.934a1 1 0 01-1.414 1.414L10 11.414l-2.934 2.934a1 1 0 01-1.414-1.414L8.586 10 5.652 7.066a1 1 0 011.414-1.414L10 8.586l2.934-2.934a1 1 0 011.414 0z" />
                </svg>
              </span>
            </div>
          </div>
        )}

        {showErrorAlert && (
          <div className="mx-auto mt-4 max-w-xl sm:mt-6">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">Form submission failed</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  onClick={() => setShowErrorAlert(false)}
                >
                  <title>Close</title>
                  <path d="M14.348 5.652a1 1 0 010 1.414L11.414 10l2.934 2.934a1 1 0 01-1.414 1.414L10 11.414l-2.934 2.934a1 1 0 01-1.414-1.414L8.586 10 5.652 7.066a1 1 0 011.414-1.414L10 8.586l2.934-2.934a1 1 0 011.414 0z" />
                </svg>
              </span>
            </div>
          </div>
        )}
      
      <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-[#42446E]">
              Title
            </label>
            <div className="mt-2.5">
              <input                    
                {...register("title", {
                  required: "title is required",
                })}
                type="text"
                name="title"
                id="title"
                autoComplete="title"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.title && <small className='text-red-500'>{errors.title.message as string}</small> }

            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="author" className="block text-sm font-semibold leading-6 text-[#42446E]">
              Author
            </label>
            <div className="mt-2.5">
              <input
                {...register("author", {
                  required: "author is required",
                })}
                type="text"
                name="author"
                id="author"
                autoComplete="author"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.author && <small className='text-red-500'>{errors.author.message as string}</small> }

            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="content" className="block text-sm font-semibold leading-6 text-[#42446E]">
              Content
            </label>
            <div className="mt-2.5">
              <textarea
                {...register("content", {
                  required: "content is required",
                  minLength: {
                    value: 2,
                    message: "Cannot use less than 2 characters"
                  }
                })}
                name="content"
                id="content"
                rows={5}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.content && <small className='text-red-500'>{errors.content.message as string}</small> }
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button
            disabled={isSubmitting}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            { isSubmitting ? "Adding..." : "Add Post" }
          </button>
        </div>
      </form>
    </section>
  )
}

export default Page
