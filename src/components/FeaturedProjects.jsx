import React, { useEffect, useState } from 'react';
import PageHeader from './PageHeader';
import ProjectCard from './ProjectCard';
import axios from 'axios';

function FeaturedProjects() {
  const [projects, setProjects] = useState([]); // Initialize as an empty array

  useEffect(() => {
    axios
      .get('https://haeec3n2mj.execute-api.us-east-2.amazonaws.com/production/getProjects')
      .then((response) => {
        setProjects(response.data.projects || []); 
        console.log(response.data.projects )
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div id="projects">
      <PageHeader header="Projects" description="A collection of projects I've worked on." />
      <div className="px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.length > 0 ? (
          projects.map((item) => (
            <ProjectCard key={item.ProjectID} item={item} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}

export default FeaturedProjects;
