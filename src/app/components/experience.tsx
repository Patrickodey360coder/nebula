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
    <section className="max-w-[700px] p-4 mx-auto" id="experience">
      <h3 className="text-center text-2xl font-extrabold my-10 ">Experience</h3>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-3 mx-auto'>
        <Card>
          <CardHeader>
            <CardTitle>Developer Relations Engineer</CardTitle>
            <CardDescription>Storyblok 2022 - 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc list-outside px-2 md:px-4'>
              <li>Took ownership maintaining Gatsby Storyblok SDK</li>
              <li>Created and maintained educational resources to help developers get started with Storyblok.</li>
              <li>Conducted live demos showcasing Storyblok features and capabilities.</li>
              <li>Represented Storyblok at various conferences.</li>
              <li>Engaged with the developer community to foster a strong and supportive network.</li>
              <li>Collaborated with the product team to prioritize and implement enhancements based on user feedback.</li>
              <li>Developed video tutorials and webinars to facilitate learning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FrontEnd Engineer</CardTitle>
            <CardDescription>O2 Digital 2022</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc list-outside px-2 md:px-4'>
              <li>Worked independently as the sole frontend engineer.</li>
              <li>Took full ownership of frontend development projects from conception to deployment.</li>
              <li>Ensured cross-browser compatibility and responsive design.</li>
              <li>Coordinated with backend developers and other stakeholders to ensure seamless integration and functionality.</li>
              <li>Identified and resolved technical challenges independently.</li>
              <li>Conducted user testing and gathered feedback to improve UI/UX.</li>
              <li>Implemented effective solutions to meet client requirements and project goals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FrontEnd Engineering Educator</CardTitle>
            <CardDescription>Reskill Americans</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc list-outside px-2 md:px-4'>
              <li>Created instructional materials, including lesson plans, slides, and coding exercises.</li>
              <li>Delivered engaging lectures and interactive coding sessions.</li>
              <li>Helped students build strong portfolios to showcase their skills.</li>
              <li>Led hands-on projects to give students real-world development experience.</li>
              <li>Facilitated collaborative group projects to enhance teamwork and problem-solving skills.</li>
              <li>Organized and participated in coding bootcamps and workshops..</li>
              <li>Conducted mock interviews and resume reviews to prepare students for job applications.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

    </section>
  )
}

export default Experience