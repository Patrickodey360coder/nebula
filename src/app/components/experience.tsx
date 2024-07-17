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

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

    </section>
  )
}

export default Experience