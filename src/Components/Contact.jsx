import React, { useState } from "react";
import axios from "axios";
import Info from "./Info";
import "../Styles/Main.css";
import {
  BiLocationPlus,
  BiPhone,
  BiEnvelope,
  BiCheckCircle,
} from "react-icons/bi";

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

  const [submissionStatus, setSubmissionStatus] = useState("");

  // Handle changes to form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("/api/submit", formData);
      console.log("Success:", response.data);
      setSubmissionStatus("Form submitted successfully!");
      // Clear the form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("Failed to submit the form.");
    }
  };

  return (
    <div id="contact-section">
      <div className="contact">
        <Info heading="CONTACT" sub="Get in touch with me." />

        <div className="details">
          {cardDetails.map((item) => (
            <Card icon={item.icon} detail={item.detail} />
          ))}
        </div>

        <div className="contactForm">
          <p>
            <span>Connect with me.</span>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
            />
            <br />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
            <br />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
