import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com'
import axios from "axios";
import Info from "./Info";
import "../Styles/Main.css";
import {
  BiLocationPlus,
  BiPhone,
  BiEnvelope,
  BiCheckCircle,
} from "react-icons/bi";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const cardDetails = [
  {
    icon: <BiPhone style={{ width: "70px", height: "70px" }} />,
    detail: "+2349167713252",
    key: 1,
  },
  {
    icon: <BiLocationPlus style={{ width: "70px", height: "70px" }} />,
    detail: "Lagos, Nigeria.",
    key: 2,
  },
  {
    icon: <BiEnvelope style={{ width: "70px", height: "70px" }} />,
    detail: "asiegbulamikenna@gmail.com",
    key: 3,
  },
  {
    icon: <BiCheckCircle style={{ width: "70px", height: "70px" }} />,
    detail: "Freelance Available.",
    key: 4,
  },
];

function Card(props) {
  return (
    <div className="item">
      {props.icon}
      <p>
        <strong>{props.detail}</strong>
      </p>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    emailjs.send('service_1ny1gma', 'template_33uin4a', formData, 'Aagb1RPf4Dsx8ZICh')
      .then((response) => {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        alert('Failed to send email.');
        console.error('Failed to send email:', err);
      });
    
  };

  const year = new Date().getFullYear()

  return (
    <div id="contact-section">
      <div className="contact">
        <Info heading="CONTACT" sub="Get in touch with me." />

        <div className="details">
          {cardDetails.map((item) => (
            <Card icon={item.icon} detail={item.detail} key={item.key} />
          ))}
        </div>

        <div className="contactForm">
          <p>
            <span>Connect with me.</span>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <br />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <button type="submit">Send Message</button>
          </form>
        </div>
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
          <p>© {year} Ikenna Noble Asiegbulam</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
