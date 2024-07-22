'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
type ProjectCardProps = {
  title: string;
  picture: string;
  preview: string;
  github?: string;
  description: string;
}
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion";

function ProjectCard({title, picture, preview, github, description}: ProjectCardProps) {
  return (
    <motion.div         
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1 }} 
      transition={{
        duration: 0.7,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      viewport={{ once: true }}>
        <Card className="max-w-sm rounded overflow-hidden shadow-md">
          <Image src={picture} alt={title} width={500} height={500} />

          <div className="px-4 md:px-4 py-2 md:py-4">
            <div className="font-bold text-xl my-2">{title}</div>
            <p className="text-sm my-2">
              {description}
            </p>

            <div className='flex justify-between'>
              <Link href={preview} target="_blank">
                <Button variant="outline">Preview</Button>
              </Link>

              {
                github && (
                  <Link href={github} target="_blank">
                    <Button variant="outline">Github</Button>
                  </Link>
                )
              }
            </div>
          </div>
        </Card>
    </motion.div>
  )
}

export default ProjectCard