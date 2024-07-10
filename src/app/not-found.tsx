import React from 'react'
import Link from 'next/link'
import Nav from './components/nav'
import Footer from './components/footer'
import { buttonVariants } from '@/components/ui/button'


const NotFound = () => {
  return (
    <div className='h-screen'>
      <Nav/>
      <section className='p-4 max-w-[1640px] mx-auto h-[84%] grid place-items-center'>
        <div className='border-4 border-black text-center p-6 rounded-lg'>
          <h2 className='text-2xl font-bold text-[#42446E]'>Page Not Found!!!</h2>
          <p className='my-4'>Could not find requested resource</p>
          <Link href="/" className={ buttonVariants({ variant: "outline" }) }>Go back to Homepage</Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default NotFound