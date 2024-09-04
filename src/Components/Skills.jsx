import React from "react";
import Info from "./Info";
import "../Styles/Main.css";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import bootstrap from "../Assets/bs.png";
import javascript from "../Assets/js.png";
import react from "../Assets/react.jpg";
import git from "../Assets/git.png";
import github from "../Assets/github.png";

const skillDetail = [
  {
    key: 1,
    heading: "1. Communication Skills",
    detail:
      "I maintain regular communication with both the client and design teams. I conduct weekly meetings to discuss progress, gather feedback, and ensure alignment with clients' visions. I also create detailed documentation for design specifications and development process, which facilitated smoother handoffs between team members.",
  },

  {
    key: 2,
    heading: "2. Team Collaboration",
    detail:
      "I work closely with UI/UX designers to convert high-fidelity mockups into functional components. I also collaborate with back-end teams to integrate APIs and ensure seamless data flow. I regularly participate in code reviews and sprint planning sessions to ensure project alignment.",
  },

  {
    key: 3,
    heading: "3. Time Management",
    detail:
      "I manage tasks simultaneously, including developing new features, fixing bugs, and conducting usability tests. I prioritize tasks based on deadlines and impact, and use project management tools to track progress and ensure timely delivery of milestones.",
  },

  {
    key: 4,
    heading: "4. Adaptability",
    detail:
      "I adapt to changes in project scope by quickly learning and implementing new features requested by clients.",
  },
];

const Skill = (props) => {
  return (
    <>
      <p className="skills-heading">
        <strong>{props.heading}</strong>
      </p>
      <p>
        {props.detail}
      </p>
    </>
  );
};

function Skills() {
  return (
    <section id="skills-section">
      <div className="skills">
        <Info heading="SKILLS" sub="Find out about me." />
        <div className="skills-flex">
          <div className="flex-lhs">
            <div>
              <img src={html} alt="" /> <h3>HTML</h3>
            </div>
            <div>
              <img src={css} alt="" /> <h3>CSS</h3>
            </div>
            <div>
              <img src={bootstrap} alt="" /> <h3>Bootstrap</h3>
            </div>
            <div>
              <img src={javascript} alt="" /> <h3>Javascript</h3>
            </div>
            <div>
              <img src={react} alt="" /> <h3>React</h3>
            </div>
            <div>
              <img src={git} alt="" /> <h3>Git</h3>
            </div>
            <div>
              <img src={github} alt="" /> <h3>GitHub</h3>
            </div>
          </div>
          <div className="flex-rhs">
            <h3>Soft Skills</h3>
            {skillDetail.map(item => <Skill key={item.key} heading={item.heading} detail={item.detail}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
