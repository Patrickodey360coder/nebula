"use client"
import React, { useEffect, useState } from 'react';
import Contact from '../actions/actions'
import SubmitButton from './button';
import { useFormState } from 'react-dom'; 

type FormState = {
  message: string;
  errors: {
    server?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    message?: string;
  }
}

const initialState: FormState = {
  message: '',
  errors: {}
};

const ContactForm = () => {

  const [ state, formAction ] = useFormState<typeof initialState>(Contact, initialState);
  const [ showAlert, setShowAlert ] = useState(false);

  useEffect(() => {
    if (state.message) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        formAction.reset();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.message, formAction]);

  const handleCloseAlert = () => {
    setShowAlert(false);
    formAction.reset();
  };

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

        {/* {state.message && (
          <div className="mx-auto mt-4 max-w-xl sm:mt-6">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{state.message}</span>
            </div>
          </div>
        )} */}

        {showAlert && (
          <div className="mx-auto mt-4 max-w-xl sm:mt-6">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{state.message}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-green-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  onClick={handleCloseAlert}
                >
                  <title>Close</title>
                  <path d="M14.348 5.652a1 1 0 010 1.414L11.414 10l2.934 2.934a1 1 0 01-1.414 1.414L10 11.414l-2.934 2.934a1 1 0 01-1.414-1.414L8.586 10 5.652 7.066a1 1 0 011.414-1.414L10 8.586l2.934-2.934a1 1 0 011.414 0z" />
                </svg>
              </span>
            </div>
          </div>
        )}



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
                { state?.errors?.firstname && <small className='text-red-600'>{ state.errors.firstname }</small> }
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
                { state?.errors?.lastname && <small className='text-red-600'>{ state.errors.lastname }</small> }
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#42446E]">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                { state?.errors?.email && <small className='text-red-600'>{ state.errors.email }</small> }
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
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#42446E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                { state?.errors?.message && <small className='text-red-600'>{ state.errors.message }</small> }
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

export default ContactForm;
