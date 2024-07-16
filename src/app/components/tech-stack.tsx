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



function TechStack() {
  return (
    <section className='max-w-[1280px] p-4 mx-auto' id="#techstack">
      <h3 className='text-center text-2xl font-extrabold my-10'>My Tech Stack</h3>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-y-6 mt-5 '>
        <div className="text-5xl text-[#00D8FF]"><FaReact /></div>
        <div className="text-5xl"><SiNextdotjs /></div>
        <div className="text-5xl text-[#3078C6]"><SiTypescript /></div>
        <div className="text-5xl text-[#663399]"><GrGatsbyjs /></div>
        <div className="text-5xl text-[#5FA04F]"><FaNode /></div>
        <div className="text-5xl"><SiFastify /></div>
        <div className="text-5xl"><SiExpress /></div>
        <div className="text-5xl text-[#5967D8]"><SiPrisma /></div>
        <div className="text-5xl text-[#01ED64]"><SiMongodb /></div>
        <div className=""><Image src='/images/harperdb.png' height={80} width={80} alt="HaperDb"/></div>
      </div>
    </section>
  )
}

export default TechStack