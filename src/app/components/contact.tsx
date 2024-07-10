"use client"
import React, { useEffect, useState, useRef } from 'react';
import Contact from '../actions/actions'
import SubmitButton from './button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { resolve } from 'path';


// type FormState = {
//   message: string;
//   errors: {
//     server?: string;
//     firstname?: string;
//     lastname?: string;
//     email?: string;
//     message?: string;
//   }
// }

// const initialState: FormState = {
//   message: '',
//   errors: {}
// };

type FormTypes = {
  firstname: string;
  lastname: string;
  email: string;
  message: string
}

const ContactForm = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormTypes>();

  const onSubmit = async (data: FormTypes) => { 
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
    console.log(data)
  }

  return (
    <section className='max-w-[1640px] mx-auto'>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"> 
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl text-[#42446E] font-extrabold text-center tracking-tight">
            Contact Me
          </h3>
          <p className="mt-2 text-lg leading-8 text-[#666666]">
            Send me a message here.
          </p>
        </div>

 

        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstname" className="block text-sm font-semibold leading-6 text-[#42446E]">
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
                {errors.firstname && <small className='text-red-500'>{errors.firstname.message as string}</small> }
              </div>
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-[#42446E]">
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.lastname && <small className='text-red-500'>{errors.lastname.message as string}</small> }
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#42446E]">
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <small className='text-red-500'>{errors.email.message as string}</small> }

              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[#42446E]">
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
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.message && <small className='text-red-500'>{errors.message.message as string}</small> }
              </div>
            </div>

          </div>
          <div className="mt-10">
            {/* <SubmitButton isSubmitting={isSubmitting} /> */}
            <button className="border p-5" disabled={isSubmitting}>{isSubmitting ? "sending..." : "lets talk"}</button>
          </div>
        </form>

      </div>
    </section>
  );
}

export default ContactForm;
