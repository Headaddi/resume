import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../Styles/TopNav.css'

function TopNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }



  return (
    <div className='navbar'>
      <div className="navbar-container">
        <h2>Ikenna Noble Asiegbulam</h2>

        <div className='menu-icon' onClick={toggleMenu}>{isOpen ? <FaTimes/> : <FaBars/>}</div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <a href="#hero-section" className="nav-links" onClick={toggleMenu}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#about-section" className="nav-links" onClick={toggleMenu}>About Me</a>
        </li>
        <li className="nav-item">
          <a href="#skills-section" className="nav-links" onClick={toggleMenu}>Skills</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio-section" className="nav-links" onClick={toggleMenu}>Porftolio</a>
        </li>
        <li className="nav-item">
          <a href="#blog-section" className="nav-links" onClick={toggleMenu}>Blog</a>
        </li>
        <li className="nav-item">
          <a href="#contact-section" className="nav-links" onClick={toggleMenu}>Contact</a>
        </li>
        </ul>


        

        
      </div>
      
    </div>
  )
}

export default TopNav