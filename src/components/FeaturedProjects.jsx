import React from 'react'
import PageHeader from './PageHeader'
import ProjectCard from './ProjectCard'
import bgImage from '../assets/bg.png'; 


function FeaturedProjects() {
  return (
    <>
    <PageHeader header="Projects" description="A collection of projects I've worked on."/>
    <div class="px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
</div>

    </>
  )
}

export default FeaturedProjects