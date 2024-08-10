"use client";
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Typed from 'typed.js';
import Lottie from 'react-lottie';
import animationData from '../../lottie/hero.json';
import Link from 'next/link';
import { motion } from 'framer-motion'

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
      strings: ['Developer Relations Engineer...', 'Technical writer...', 'Community manager...', 'Youtuber...'],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-[600px] max-w-[1280px] sm:min-h-[500px] md:min-h-[700px] w-full p-4 flex flex-cols-2 mx-auto">
      <div className='w-full flex items-center'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="w-full">
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-extrabold'>Hi 👋,</h3>
          <h1 className='text-4xl md:text-4xl lg:text-7xl my-2 font-extrabold'>I am Patrick Odey</h1>
          <h3 className='text-2xl md:text-2xl lg:text-3xl mb-1 font-extrabold'>Software & Developer Relations Engineer</h3>
          <span ref={element} className="md:text-2xl" />

          <div className='my-5 flex flex-row gap-4'>
            <Link href="https://drive.google.com/file/d/1yVclSCxCTWojuAkS_p0nqWqo_OW7NB6A/view?usp=sharing" target="_blank">
              <motion.div 
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Button variant="outline">Resume</Button>
              </motion.div>
            </Link>

          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <Link href="https://github.com/Patrickodey360coder" target="_blank">
                <Button variant="outline">GitHub</Button>
            </Link>
          </motion.div>      
          </div>
        </motion.div>
      </div>

      <div className='hidden w-full sm:hidden md:grid place-items-center'>
        <motion.div   
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            type: "spring",
            stiffness: 260,
            damping: 20
          }} className='w-full object-cover'>
          <Lottie
            options={defaultOptions} 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero