import React from 'react'
import Link from 'next/link'
import Nav from './components/nav'
import Footer from './components/footer'


const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound