import React from "react";
import "./About.css";
import "./Contact.css";
import profileImage from "../assets/Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <div className="about-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="about-content">
        <h4>What clients say</h4>
        <h1>Contact Me</h1>
        <div className="contact-all-container">
          <p>
            If you'd like to get in touch, feel free to connect with me on
            LinkedIn or send me an email. I'm always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/ishara-dabarera-476315246/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:isharaecc1998@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
