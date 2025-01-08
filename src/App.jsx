import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Jumbotron/>
    </>
  )
}

export default App
