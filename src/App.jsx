import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import FeaturedProjects from './components/FeaturedProjects'
import Footer from './components/Footer'
import MyStory from './components/MyStory'
import Quote from './components/Quote'

function App() {

  return (
    <>
      <Navbar/>
      <Jumbotron/>
      <FeaturedProjects/>
      <Quote/>
      <MyStory/>
      <Footer/>
    </>
  )
}

export default App
