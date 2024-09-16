"use client"
import React from 'react'
import Article from './components/Article'

const Page = () => {
  return (
    <section className='max-w-[1640px] mx-auto'>
      <h1 className='text-2xl text-center font-bold my-5'>Articles</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <Article/>
        
      </div>
    </section>
  )
}

export default Page