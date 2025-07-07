import Navbar from "./components/Navbar"
import React from 'react'
import './App.css'
import Home from "./components/Home"
import Skills from "./components/Skills"
import Tech from "./components/Tech"
import Project from "./components/Project"
import Contact from "./components/Contact"
import About from "./components/About"

function App() {
 

  return (
    <>
     <Navbar/>
     <Home/>
     <Skills/>
     <Tech/>
     <About/>
     <Project/>
     <Contact/>
    </>
  )
}

export default App
