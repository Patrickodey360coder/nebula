"use client"
import React from 'react'
import Article from '../components/article'

const Page = () => {
  return (
    <section className='max-w-[1640px] mx-auto'>
      <h1 className='text-2xl text-center font-bold'>Articles</h1>
      <div>
        <Article/>
      </div>
    </section>
  )
}

export default Page