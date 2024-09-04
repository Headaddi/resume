import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import display from "../Assets/ikenna.png";

function Sidebar() {

  
 
  const [active, setActive] = useState("");

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className="sidebar">
      <img src={display} alt="" style={{ width: "100px" }} />
      <h2>Ikenna</h2>
      <ul className="navigation">
        <li
          className={active === "Home" ? "active" : ''}
          onClick={() => handleClick("Home")}
        >
          <a href="#hero-section">Home</a>
        </li>
        <li
          className={active === "about" ? "active" : ''}
          onClick={() => handleClick("about")}
        >
          <a href="#about-section">About Me</a>
        </li>
        <li
          className={active === "skills" ? "active" : ''}
          onClick={() => handleClick("skills")}
        >
          <a href="#skills-section">Skills</a>
        </li>
        <li
          className={active === "portfolio" ? "active" : ''}
          onClick={() => handleClick("portfolio")}
        >
          <a href="#portfolio-section">Porftolio</a>
        </li>
        <li
          className={active === "blog" ? "active" : ''}
          onClick={() => handleClick("blog")}
        >
          <a href="#blog-section">Blog</a>
        </li>
        <li
          className={active === "contact" ? "active" : ''}
          onClick={() => handleClick("contact")}
        >
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
      <div className="links">
        <div>
          <Link to="https://github.com/Headaddi" style={{ color: "black" }}>
            <FaGithub style={{ height: "20px", width: "20px" }} />
          </Link>
        </div>
        <div>
          {" "}
          <Link
            to="https://www.linkedin.com/in/ikenna-noble-asiegbulam/"
            style={{ color: "black" }}
          >
            <FaLinkedin style={{ height: "20px", width: "20px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
