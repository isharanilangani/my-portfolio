import React from "react";
import "./About.css";
import "./Service.css";
import profileImage from "../assets/Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Service: React.FC = () => {
  return (
    <div className="about-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="about-content">
        <h4>What I am good at</h4>
        <h1>My Services</h1>
        <div className="service-all-container">
          <div className="service-container">
            <div className="service-item">
              <div className="service-text">
                <h3>
                  <FontAwesomeIcon icon={faCode} className="service-icon" />{" "}
                  Fast Coding Service
                </h3>
                <p>
                  I provide fast and efficient coding services to meet your
                  project deadlines without compromising on quality. Whether you
                  need a new feature implemented or a bug fixed, you can count
                  on quick turnaround times.
                </p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-text">
                <h3>
                  <FontAwesomeIcon icon={faFileAlt} className="service-icon" />{" "}
                  Documentation
                </h3>
                <p>
                  Comprehensive documentation is key to maintaining and scaling
                  any project. I offer detailed and well-organized documentation
                  services to ensure your codebase is easy to understand and use
                  for future developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
