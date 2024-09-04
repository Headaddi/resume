import React from 'react'
import '../Styles/Main.css'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'



function Main() {
  return (
    <div className='main'>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default Main