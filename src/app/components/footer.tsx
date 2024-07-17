import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="max-w-[1280px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 border-t-[1.5px] justify-middle ">
      <div className='grid grid-cols-1 md:grid-cols-5 text-center place-content-center'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/tech-stack'}>Tech-Stack</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>

      <div className='grid grid-cols-1 text-center md:text-right'>
        <p className='my-5'>Made with ❤️ by Patrick Odey</p>
      </div>

    </footer>
  )
}

export default Footer