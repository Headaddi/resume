import React from "react";
import Info from "./Info";
import "../Styles/Main.css";
import suwk from '../Assets/suwk.png'
import dashboard from '../Assets/dashboard.png'
import robotfriends from '../Assets/robotfriends.png'
import goals from '../Assets/goals.png'
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section id="portfolio-section">
      <div className="portfolio">
        <Info heading="PORTFOLIO" sub="My works." />
        <h3>My Works:</h3>
        <p>Here are a few of my works. It is important to note that some of them are works in progress, and are just in web version for now.</p>
        <div className="works">
        <Link to='https://robofriends-inky.vercel.app/' className="work-link"><img src={robotfriends} alt="" style={{width:"450px", height:"300px"}}/></Link>
          <Link to='https://suwk-learn.vercel.app/' className="work-link"><img src={suwk} alt="" style={{width:"450px", height:"300px"}}/></Link>
          <Link to='https://studentsdashboard-kfsjamb1m-headaddis-projects.vercel.app/' className="work-link"><img src={dashboard} alt="" style={{width:"450px", height:"300px"}}/></Link>
          <Link to='https://baldini.netlify.app/' className="work-link"><img src={goals} alt="" style={{width:"450px", height:"300px"}}/></Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
