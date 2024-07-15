"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from 'next/navigation'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();
  const { setTheme } = useTheme();

  const toggleSidebar = () => {
    setOpen(!open);
  }
  return (
    <nav className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='logo cursor-pointer'>
        <FaCode size={30} />
      </div>

      <div className='hidden md:flex justify-between'>
        <Link href="/" className={`mx-3 py-3 cursor-pointer ${path === "/" ? "active" : ""}`}>Home</Link>
        <Link href="#about" className={`mx-3 py-3 cursor-pointer ${path === "#about" ? "active" : ""}`}>About</Link>
        <Link href="#techstack" className={`mx-3 py-3 cursor-pointer ${path === "#techstack" ? "active" : ""}`}>Tech-Stack</Link>
        <Link href="#projects" className={`mx-3 py-3 cursor-pointer ${path === "#projects" ? "active" : ""}`}>Projects</Link>
        <Link href="#contact" className={`mx-3 py-3 cursor-pointer ${path === "#contact" ? "active" : ""}`}>Contact</Link>
        <Link href="/blog" className={`mx-3 py-3 cursor-pointer ${path === "/blog" ? "active" : ""}`}>Blog</Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>

      <div className="md:hidden flex justify-center align-middle z-20" onClick={toggleSidebar}>
        { open ? '' : <GiHamburgerMenu size={30} className="cursor-pointer" /> }
      </div>

      {/* Sidebar */}

      {
        open && (
          <>
            <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
            </div>

            <div className={ open ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500"}>
              { open ? <IoMdClose size={30} onClick={toggleSidebar} className="absolute right-4 top-4 cursor-pointer"/> : '' }

              <FaCode size={30} className="m-4" />
              
              <nav>
                <ul className="flex flex-col font-bold p-4">
                  <li className="text-xl py-4 flex"><Link href="/">Home</Link></li>
                  <li className="text-xl py-4 flex"><Link href="#about">About</Link></li>
                  <li className="text-xl py-4 flex"><Link href="#techstack">Tech-Stack</Link></li>
                  <li className="text-xl py-4 flex"><Link href="#project">Projects</Link></li>
                  <li className="text-xl py-4 flex"><Link href="#contact">Contacts</Link></li>
                  <li className="text-xl py-4 flex"><Link href="/blog">Blog</Link></li>
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