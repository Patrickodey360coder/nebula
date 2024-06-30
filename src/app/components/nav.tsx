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
    <nav className='py-4 mx-4 md:mx-20 mb-5 flex justify-between align-middle'>
      <div className='logo'>
        <FaCode className="text-2xl md:text-5xl" />
      </div>

      <div className='hidden md:flex justify-between'>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Home</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">About</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Tech-Stack</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Projects</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Contact</Link>
        <Link href="#" className="mx-3 py-3 text-[#666666]">Blog</Link>
      </div>

      <div className="md:hidden flex justify-center align-middle" onClick={toggleSidebar}>
        { open ? <IoMdClose className="text-2xl md:text-5xl" /> : <GiHamburgerMenu className="text-2xl lg:text-5xl"/> }
      </div>

      {/* Sidebar */}
      {
        open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-center">
              <Link href="#" className="mx-3 py-3 text-[#666666]">Home</Link>
              <Link href="#" className="mx-3 py-3 text-[#666666]">Projects</Link>
              <Link href="#" className="mx-3 py-3 text-[#666666]">About</Link>
              <Link href="#" className="mx-3 py-3 text-[#666666]">Projects</Link>
              <Link href="#" className="mx-3 py-3 text-[#666666]">Blog</Link>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default Nav