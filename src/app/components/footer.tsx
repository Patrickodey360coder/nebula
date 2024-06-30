import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="p-3 flex justify-between items-center border-t-[1.5px] ">
      <div className='grid grid-cols-5 gap-x-4 text-center text-[#40436C]'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/tech-stack'}>Tech-Stack</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>

      <div>
        <p className=' text-[#40436C]  my-10'>Made with ❤️ by Patrick Odey</p>
      </div>

    </footer>
  )
}

export default Footer