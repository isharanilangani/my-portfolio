import React from "react";
import "./About.css";
import profileImage from "../assets/Profile.jpg";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="about-content">
        <h2>Software Engineer</h2>
        <h1>Ishara Dabarera</h1>
        <div className="description-all-container">
        <h3>Description</h3>
        <p>
          I am passionate about crafting robust and efficient software solutions
          that bring ideas to life. With a comprehensive background as a full
          stack software engineer, I excel in both frontend and backend
          development, seamlessly integrating diverse technologies to create
          cohesive and user-friendly applications. My expertise enables me to
          transform complex challenges into scalable solutions, ensuring a
          smooth and engaging user experience across all platforms.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
