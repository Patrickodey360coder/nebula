import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Experience = () => {
  return (
    <section className="max-w-[1280px] p-4 mx-auto" id="experience">
      <h3 className="text-center text-2xl font-extrabold my-10 ">Experience</h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-auto'>
        <Card>
          <CardHeader>
            <CardTitle>Developer Relations Engineer</CardTitle>
            <CardDescription>Storyblok 2022 - 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FrontEnd Engineer</CardTitle>
            <CardDescription>O2 Digital 2022</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FrontEnd Engineering Educator</CardTitle>
            <CardDescription>Reskill Americans</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

    </section>
  )
}

export default Experience