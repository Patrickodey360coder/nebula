import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
type Props = {
  title: string;
  picture: string;
  preview: string;
  github: string;
  description: string;
}

function ProjectCard({title, picture, preview, github, description}: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <Image src={picture} alt={title} width={500} height={500} />

      <div className="px-4 md:px-4 py-2 md:py-4">
        <div className="font-bold text-xl my-2 text-[#42446E]">{title}</div>
        <p className="text-[#666666] text-sm my-2">
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


    </div>
  )
}

export default ProjectCard