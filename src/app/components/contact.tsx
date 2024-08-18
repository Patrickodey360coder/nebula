"use client"
import React, { useState } from 'react';
import Contact from '../actions/contact-actions'
import SubmitButton from './button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TSignUpSchema } from '../../../libs/types';
import { signUpSchema } from '../../../libs/types';
import { motion } from "framer-motion"


const ContactForm = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const [ showSuccessAlert, setShowSuccessAlert ] = useState(false);
  const [ showErrorAlert, setShowErrorAlert] = useState(false)

  const onSubmit = async (data: TSignUpSchema) => { 
    const formData = new FormData();
    formData.append('firstname', data.firstname);
    formData.append('lastname', data.lastname);
    formData.append('email', data.email);
    formData.append('message', data.message);

    const response = await Contact({}, formData);

    if (response.errors) {
      console.log(response.errors || "An error occoured while submitting the form...");
      setShowErrorAlert(true)
    } else {
      console.log(response.message);
      setShowSuccessAlert(true)
      reset();
    }
  }

  return (
    <section className='max-w-[1280px] mx-auto' id='contact'>
      <div className="isolate px-6 py-24 sm:py-32 lg:px-8"> 
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-extrabold text-center tracking-tight">
            Contact Me
          </h3>
          <p className="mt-2 text-lg leading-8">
            Send me a message here.
          </p>
        </div>

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
            <div>
              <label htmlFor="firstname" className="block text-sm font-semibold leading-6">
                First name
              </label>
              <div className="mt-2.5">
                <input 
                  {...register("firstname", {
                    required: "firstname is required",
                    minLength: {
                      value: 2,
                      message: "Cannot use less than 2 characters"
                    }
                  })}
                  type="text"
                  id="firstname"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
                {errors.firstname && <small className='text-red-500'>{errors.firstname.message as string}</small> }
              </div>
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-semibold leading-6">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  {...register("lastname", {
                    required: "lastname is required",
                    minLength: {
                      value: 2,
                      message: "Cannot use less than 2 characters"
                    }
                  })}
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.lastname && <small className='text-red-500'>{errors.lastname.message as string}</small> }
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  {...register("email", {
                    required: "email is required",
                    pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email address" } 
                  })}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <small className='text-red-500'>{errors.email.message as string}</small> }
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  {...register("message", {
                    required: "message is required",
                    minLength: {
                      value: 2,
                      message: "Cannot use less than 2 characters"
                    }
                  })}
                  name="message"
                  id="message"
                  rows={5}
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.message && <small className='text-red-500'>{errors.message.message as string}</small> }
              </div>
            </div>

          </div>
          <div className="mt-10">
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
