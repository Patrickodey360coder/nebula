import React from 'react'
import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <section className="py-5 mx-20">
      <h3 className='text-2xl'>Hi,</h3>
      <h1 className='text-4xl my-2'>I am Patrick Odey</h1>
      <h3 className='text-2xl'>Software & Developer Relations Engineer</h3>

      <div className='my-5 flex flex-row gap-4'>
        <Button variant="outline">Resume</Button>
        <Button variant="outline">GitHub</Button>
      </div>

      <div>

      </div>
    </section>
  )
}

export default Hero