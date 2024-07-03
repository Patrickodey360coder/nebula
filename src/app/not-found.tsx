import React from 'react'
import Link from 'next/link'
import Nav from './components/nav'
import Footer from './components/footer'
import { buttonVariants } from '@/components/ui/button'


const NotFound = () => {
  return (
    <div className='h-screen'>
      <Nav/>
      <section className='p-4 max-w-[1640px] mx-auto'>
        <div className='grid border-4 border-black place-items-center'>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/" className={ buttonVariants({ variant: "outline" }) }>Go back to Homepage</Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default NotFound