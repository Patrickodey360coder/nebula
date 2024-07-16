import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Article() {
  const img = "https://media.istockphoto.com/id/77931645/photo/woman-and-young-girl-outdoors-with-people-in-background.webp?b=1&s=170667a&w=0&k=20&c=Pu8YKWG63QkM57TDJlOj1STNtHEGlc9LA-yocJM986A=";
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <Image src={img} width={200} height={200} alt="" />

      <div className="px-4 md:px-4 py-2 md:py-4">
        <h3 className="font-bold text-xl my-2">Technical Writing Template</h3>
        <p className="text-sm my-2">
        One of the things new and emerging writers struggle with is how to structure their content, images, or even code formatting.
        </p>

        <div className='flex justify-between'>
          <Link href="" target="_blank">
            <Button variant="outline">Preview</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Article