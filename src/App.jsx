import Navbar from "./components/Navbar"
import React from 'react'
import './App.css'
import Home from "./components/Home"
import Skills from "./components/Skills"
import Tech from "./components/Tech"
import Project from "./components/Project"
import Contact from "./components/Contact"

function App() {
 

  return (
    <>
     <Navbar/>
     <Home/>
     <Skills/>
     <Tech/>
     <Project/>
     <Contact/>
    </>
  )
}

export default App
