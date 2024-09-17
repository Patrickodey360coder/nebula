import React from 'react'
import Article from './components/Article'
import dbConnect from "../../../libs/mongoose"
import Blog from '../../../models/Blog';

export const revalidate = 10;

async function fetchBlogs() {
  await dbConnect();
  const blogs = await Blog.find().lean()
  return blogs
}

const Page = async () => {
  const blogs = await fetchBlogs()
  return (
    <section className='max-w-[1640px] mx-auto'>
      <h1 className='text-2xl text-center font-bold my-5'>Articles</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          blogs.map((blog) => (
            <Article key={blog._id} blog={blog} />
          ))
        }
      </div>
    </section>
  )
}

export default Page