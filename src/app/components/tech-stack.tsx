'use client'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrGatsbyjs } from "react-icons/gr";
import { FaNode } from "react-icons/fa6";
import { SiFastify } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";

function TechStack() {
  return (
    <section className='max-w-[1280px] p-4 my-10 mx-auto' id="techstack">
      <motion.h3 className='text-center text-2xl font-extrabold my-10'>My Tech Stack</motion.h3>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-y-10 mt-5 '>
        <motion.div whileHover={{
            scale: 1.3
          }} className="grid grid-cols-1">
          <div className="text-5xl text-[#00D8FF] justify-self-center">
            <FaReact/>
          </div>
          <p className="text-center">React.js</p>
        </motion.div>

        <div className="grid grid-cols-1">
          <div className="text-5xl justify-self-center">
            <SiNextdotjs />
          </div>
          <p className="text-center">Next.js</p>
        </div>

        <div className="grid grid-cols-1">
          <div className="text-5xl text-[#3078C6] justify-self-center ">
            <SiTypescript />
          </div>
          <p className="text-center">Typescript</p>
        </div>

        <div className="grid grid-cols-1">
          <div className="text-5xl text-[#663399] justify-self-center">
            <GrGatsbyjs />
          </div>
          <p className="text-center">Gatsby.js</p>
        </div>

        <div className="grid grid-cols-1">
          <div className="text-5xl text-[#5FA04F] justify-self-center">
            <FaNode />
          </div>
          <p className="text-center">Node.js</p>
        </div>

        <div className="grid grid-cols-1">
          <div className="text-5xl justify-self-center">
            <SiFastify />
          </div>
          <p className="text-center">Fastify.js</p>
        </div>

        <div className="grid grid-cols-1">
          <div className="text-5xl justify-self-center">
            <SiExpress />
          </div>
          <p className="text-center">Express.js</p>
        </div>

        <div className="grid grid-cols-1">
          <div className="text-5xl text-[#5967D8] justify-self-center">
            <SiPrisma />
          </div>
          <p className="text-center">Prisma</p>
        </div>

        <div className="grid grid-cols-1">
          <div className="text-5xl text-[#01ED64] justify-self-center">
            <SiMongodb />
          </div>
          <p className="text-center">MongoDB</p>
        </div>

        <div className="grid grid-cols-1">
          <div className="justify-self-center">
            <Image src='/images/harperdb.png' height={50} width={50} alt="HaperDb"/>
          </div>
          <p className="text-center">React.js</p>
        </div>
      </div>
    </section>
  )
}

export default TechStack