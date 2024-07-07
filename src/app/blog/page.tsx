"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'

const Page = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues
   } = useForm()
  return (
    <form className='flex flex-col gap-y-2 py-4'>
        <input type="email" placeholder='email' className='px-4 py-2 rounded' />
        <input type="password" placeholder='password' className='px-4 py-2 rounded' />
        <input type="password" placeholder='email' className='px-4 py-2 rounded' />
        
        <Button variant={'outline'}>Submit</Button>
    </form>
  )
}

export default Page