import React from 'react'
import '../styles/Jumbotron.css'
import bgImage from '../assets/bg.png'; 
import resume from '../assets/resume_SaphalPant.pdf'

function Jumbotron() {
  return (
<section
  className="bg-center bg-no-repeat bg-gray-700 relative"
  style={{
    backgroundImage: `url(${bgImage})`,
    clipPath: 'ellipse(100% 85% at 50% 8%)',
  }}
>
  <div className="py-20 px-4 mx-auto max-w-screen-xl lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15">
    <div className="flex flex-col justify-center">
      <p className="welcome mb-4 text-5xl font-regular tracking-tight leading-none text-white sm:text-xl md:text-4xl lg:text-6xl">
        WELCOME.
      </p>
      <p className="intro mb-8 text-lg font-normal text-gray-300 lg:text-xl">
        My name is Saphal, a technology enthusiast based in Louisiana. With a growing passion for cloud services and cybersecurity, I am exploring innovative solutions that drive digital transformation. My focus is on building efficient, secure systems while continually expanding my technical skills.
      </p>
      <div className="flex flex-col mb-20 md:mb-0 lg:mb-0 sm-md-0 space-y-4 sm:flex-row sm:space-y-0">
        <a
          href={resume}
          download
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg bg-white hover:bg-gray-600 hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Download CV
        </a>
      </div>
    </div>
  </div>
</section>

  );
}

export default Jumbotron;
