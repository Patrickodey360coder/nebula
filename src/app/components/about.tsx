"use client"
import Lottie from 'react-lottie';
import animationData from '../../lottie/man.json';
import { motion } from 'framer-motion';

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <motion.section className="max-w-[1280px] p-4 mx-auto" id="about">
      <h3 className="text-2xl font-extrabold my-10 text-center">About</h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="image mx-auto">
          <Lottie options={defaultOptions} height={400} width={300} />
        </div>

        <div className="description md:p-5">
          <h3 className='my-3 font-bold text-center sm:text-center mx-4 md:text-center'> Who is this guy?</h3>
          <p className='text-pretty'>I am a dedicated and accomplished software engineer with over 4 years of experience in the industry. Throughout my career, I have consistently demonstrated my expertise in various frontend and backend technologies, contributing to numerous successful projects. My journey has been marked by a continuous drive for learning and improvement, enabling me to become proficient in modern frameworks and tools.</p>
          <p className='my-3 text-pretty'>I am passionate about writing clean, efficient code and am committed to delivering high-quality solutions that meet and exceed client expectations. My experience spans from building robust applications to maintaining and enhancing existing systems, showcasing my versatility and adaptability in the ever-evolving tech landscape.</p>
        </div>
      </div>
    </motion.section>
  )
}

export default About