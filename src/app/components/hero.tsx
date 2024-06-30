"use client";
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Typed from 'typed.js';
import Lottie from 'react-lottie';
import animationData from '../../lottie/hero.json';
import Link from 'next/link';

function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ['Developer Relations Engineer...', 'Technical writer...', 'Community manager...'],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="py-5 mx-4 md:mx-20 my-20 flex flex-cols-2">
      <div className='w-full flex items-center'>
        <div className="w-full">
          <h3 className='text-2xl text-[#42446E] font-extrabold'>Hi 👋,</h3>
          <h1 className='text-4xl my-2 text-[#42446E] font-extrabold'>I am Patrick Odey</h1>
          <h3 className='text-2xl mb-1 text-[#42446E] font-extrabold'>Software & Developer Relations Engineer</h3>
          <span ref={element} className="text-[#42446E]" />

          <div className='my-5 flex flex-row gap-4 text-[#42446E]'>
            <Link href="https://drive.google.com/file/d/1yVclSCxCTWojuAkS_p0nqWqo_OW7NB6A/view?usp=sharing" target="_blank">
              <Button variant="outline">Resume</Button>
            </Link>

            <Link href="https://github.com/Patrickodey360coder" target="_blank">
              <Button variant="outline">GitHub</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className='hidden w-full sm:hidden md:grid place-items-center'>
        <div className='w-[50%]'>
          <Lottie
            options={defaultOptions} 
            layout="fill"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero