import React, { useEffect, useState } from 'react'
import bgImage from '../assets/bg.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';


function ProjectCard({item}) {


  return (
<div class="max-w-sm bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <div class="relative">
            <img class="rounded-t-lg" src={bgImage} alt="Background" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-white rounded-t-lg opacity-70"></div>
        </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.ProjectName}
            </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">
            {item.Description}
        </p>
        <div class="flex space-x-4">
            <a href={item.GitHub} target="_blank" 
                class="text-gray-600 bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition">
                <i class="fab fa-github text-xl"></i>
            </a>
            <a href={item.Website} target="_blank" 
                class="text-white bg-gray-900 hover:bg-gray-700 p-3 rounded-lg transition">
                <i class="fas fa-globe text-xl"></i>
            </a>
        </div>
    </div>
</div>



  )
}

export default ProjectCard