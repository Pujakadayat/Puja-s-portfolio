import React from 'react'
import Hero from './hero'
import Nav from './nav'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import Footer from '../pages/footer'
import Skills from "../pages/Skills"
import About from '../pages/About'

 const Main = () => {
  return (
    // <div className='bg-[linear-gradient(180deg,_#98c4ec,_#ffffff)]'>
    <div>
       <Nav/>
       <Hero/>
       <About />
       <Skills />
        <Project />
       <Contact />
       <Footer />
       </div>
  )
}

export default Main
