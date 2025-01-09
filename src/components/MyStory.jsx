import React from 'react'
import PageHeader from './PageHeader'

function MyStory() {
  return (
    <div id="about-me" className='mt-20 pt-5'>
    <PageHeader header="My Story" description="A Journey of Growth, Challenges, and Triumphs"/>
    <div className="px-4 mx-auto max-w-screen-xl flex flex-col lg:flex-row my-10">
    <div className="lg:w-1/2 w-full">
    <div className="relative w-full pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/lxaeSNlFXu4?si=axPBDXqeHDzj-6Og"
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    </div>
    <div className="lg:w-1/2 w-full mt-5 lg:mt-0 lg:pl-8">
        <p className="text-md">
        From a young age, I was captivated by the world of programming, diving deep into code and technology. Over the years, this passion has shaped my skills and career, allowing me to create innovative software solutions. In addition to programming, filmmaking has been a significant creative outlet, where I express stories through the lens. When I’m not coding or shooting films, you’ll find me on the cricket field, immersed in the game I love. My diverse interests blend technology, creativity, and sports, driving me to explore new challenges and experiences.
        </p>
    </div>
    </div>
    </div>
  )
}

export default MyStory