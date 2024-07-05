"use client"
import React from 'react';
import Contact from '../actions/actions'
import SubmitButton from './button';
import { useFormState } from 'react-dom'; 

const initialState = {
  message: '',
  // errors: {}
}

async function contactForm() {

  const [ state, formAction ] = useFormState(Contact, initialState);

  return (
    <section className='max-w-[1640px] mx-auto'>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"> 
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#42446E] sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-2 text-lg leading-8 text-[#666666]">
            Send me a message here.
          </p>
        </div>

        <form action={formAction} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstname" className="block text-sm font-semibold leading-6 text-[#42446E]">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
                {state?.message}
              </div>
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-[#42446E]">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#42446E]">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  // type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <small>{state.message}</small>
                {/* <small>{errors?.server}</small> */}

              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[#42446E]">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
          <div className="mt-10">
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}

export default contactForm;
