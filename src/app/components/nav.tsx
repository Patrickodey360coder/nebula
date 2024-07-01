"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpen(!open);
  }
  return (
    <nav className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='logo'>
        <FaCode size={30} />
      </div>

      <div className='hidden md:flex justify-between'>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Home</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">About</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Tech-Stack</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Projects</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Contact</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Blog</Link>
      </div>

      <div className="md:hidden flex justify-center align-middle z-20" onClick={toggleSidebar}>
        { open ? '' : <GiHamburgerMenu size={30} /> }
      </div>

      {/* Sidebar */}

      {
        open && (
          <>
            <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
            </div>

            <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" onClick={toggleSidebar}>
              { open ? <IoMdClose size={30} className="absolute right-4 top-4 cursor-pointer"/> : '' }

              <FaCode size={30} className="m-4" />

              <nav>
                <ul className="flex flex-col font-bold p-4">
                  <li className="text-xl py-4 flex">Home</li>
                  <li className="text-xl py-4 flex">About</li>
                  <li className="text-xl py-4 flex">Tech-Stack</li>
                  <li className="text-xl py-4 flex">Projects</li>
                  <li className="text-xl py-4 flex">Contact</li>
                  <li className="text-xl py-4 flex">Blog</li>
                </ul>
              </nav>
            </div>
          </>
        )
      }


    </nav>
  )
}

export default Nav