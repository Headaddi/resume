import React from "react";
import "../Styles/Main.css";
import ikenna from "../Assets/ikenna.png";

function Hero() {
  return (
    <section id="hero-section">
      <div className="hero">
        <div className="title">
          <img src={ikenna} alt="" style={{ width: "200px" }} />
          <h1>Ikenna Noble Asiegbulam</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
