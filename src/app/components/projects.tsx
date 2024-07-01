import React from 'react'
import ProjectCard from './project-card'

const projects =  [
  {
    title: "Cov19Strain",
    picture: "/images/covistrain.jpg",
    preview: "https://mrrobot-covidtracer.netlify.app/",
    github: "https://github.com/Patrickodey360coder/COVID-19-TRACKER",
    description: " An application that tracks COVID-19",
  },
  {
    title: "Metro Care",
    picture: "/images/metrocare.jpg",
    preview: "http://metrocareservices.com.au/",
    description: "An NDIS service in Australia. Built with Laravel",
  },
  {
    title: "LiteStack",
    picture: "/images/litestack.jpg",
    preview: "https://mrrobot-covidtracer.netlify.app/",
    description: "A fast growing tech start-up. Built with Laravel",
  },
  {
    title: "E - Bike",
    picture: "/images/ebike.png",
    preview: "https://mrrobot-covidtracer.netlify.app/",
    github: "https://github.com/Patrickodey360coder/eBike",
    description: "E - Bike is a fiction mordern bike store",
  }
]

function Projects() {
  return (
    <section className='max-w-[1640px] md p-4'>
      <h3 className='text-2xl text-[#42446E] font-extrabold my-10 text-center'>Projects</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-4 place-items-center">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects