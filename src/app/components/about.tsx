"use client"
import Lottie from 'react-lottie';
import animationData from '../../lottie/man.json';

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <section className="about py-5 my-20">
      <h3 className="text-2xl text-[#42446E] font-extrabold my-10 text-center">About</h3>
      <div className="grid grid-cols-2">
        <div className="image">
          <Lottie options={defaultOptions} layout="fill" />
        </div>

        <div className="description text-[#666666] p-5 grid gap-y-3">
          <h3 className='my-3 font-bold'> Who is this guy?</h3>
          <p>I'm a Software Engineer with 3+ years of professional experience. I am interested in all kinds of visual communication but my major focus is on creating mobile, tablet and desktop interfaces. I also have skills in other fields like computer hardwares, hardware troubleshooting, skateboarding and gaming.</p>

          <p>I am passionate about sharing knowledge and learning new technologies from team-mates. I've had the opportunities to be an instructor/mentor in top bootcamps and communities like; Reskill Americans Coding Bootcamp, FrontEnd Foxes Bootcamp, Zuri coding internship, Hotels.ng and other volunteer positions.</p>
        </div>
      </div>
    </section>
  )
}

export default About