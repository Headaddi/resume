import React from "react";
import Info from "./Info";
import "../Styles/Main.css";
import screen2 from "../Assets/Screen2.png";
import screen1 from "../Assets/screen.png";

function About() {
  return (
    <section id="about-section">
      <div className="about">
        <Info heading='ABOUT ME' sub='Creative thinker, Go-getter.' />
        <div className="about-flex">
          <div className="about-lhs resize">
            <div className="image">
              <img src={screen2} alt="" />
            </div>
            <p>
              Hi, I'm Ikenna, a passionate front-end web developer with a keen
              eye for detail and a love for creating seamless user experiences.
              I've honed my skills in HTML, CSS, JavaScript and React. I'm
              always staying up-to-date with the latest trends and technologies
              to ensure my projects are modern, responsive, and accessible. I
              take pride in my ability to transform designs into functional and
              efficient web applications, and I'm dedicated to delivering
              high-quality solutions that meet and exceed expectations. When I'm
              not coding, you can find me exploring new design tools, attending
              web development meetups, or contributing to open-source projects.
              I'm excited to collaborate with like-minded individuals and teams
              to bring innovative ideas to life and make a positive impact on
              the web. Let's build something amazing together!
            </p>
          </div>
          <div className="about-rhs resize">
            <div className="image">
              <img src={screen1} alt="" />
            </div>
            <div className="data">
              <p>
                <span className="detail">Residence:</span>
                <span>Lagos, Nigeria</span>
              </p>
              <p>
                <span className="detail">email:</span>
                <a href="mailto:asiegbulamikenna@gmail.com">asiegbulamikenna@gmail.com</a>
              </p>
              <p>
                <span className="detail">Phone:</span>
                <span>09167713252</span>
              </p>
              <p>
                <span className="detail">Freelance:</span>
                <span>Available</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
