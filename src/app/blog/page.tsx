"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

const Page = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <section className='max-w-[1640px] mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2 py-4'>
        <input
          {...register("email", {
            required: "Email is required"
          })} 
          type="email" 
          placeholder='email' 
          className='px-4 py-2 rounded'
        />
        { errors.email && (
          <p className='text-red-500'>{`${errors.email.message}`}</p>
        ) }

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters"
            }
          })} 
          type="password" 
          placeholder='password' 
          className='px-4 py-2 rounded' 
        />
        { errors.password && (
          <p className='text-red-500'>{`${errors.password.message}`}</p>
        ) }

        <input
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === getValues("password") || "Passwords must match",
          })} 
          type="password" 
          placeholder='confirm password' 
          className='px-4 py-2 rounded' 
        />
        { errors.confirmPassword && (
          <p className='text-red-500'>{`${errors.confirmPassword.message}`}</p>
        )}
        
      <Button variant={'outline'} disabled={isSubmitting}>Submit</Button>
    </form>
  </section>
  )
}

export default Page