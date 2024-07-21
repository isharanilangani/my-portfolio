import React from "react";
import "./About.css";
import "./Experience.css";
import profileImage from "../assets/Profile.jpg";

const Education: React.FC = () => {
  return (
    <div className="about-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="about-content">
        <h4>What I am good at</h4>
        <h1>My Education</h1>
        <div className="experience-container">
          <div className="experience-item">
            <div className="experience-date">
              <h3>2020 - Reading</h3>
            </div>
            <div className="experience-details">
              <h2>Bsc(Hons) in Computing and Information Systems</h2>
              <h3>Sabaragamuwa University of Sri Lanka</h3>
              <p>
                I am currently studying as a fourth-year undergraduate in the
                Department of Computing and Information Systems.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">
              <h3>2019 - 2020</h3>
            </div>
            <div className="experience-details">
              <h2>Deploma in Information Technology</h2>
              <h3>Esoft Metro Campus, Rathnapura</h3>
              <p>
                I successfully completed a diploma in Information Technology at
                Esoft Metro Campus.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">
              <h3>2008 - 2018</h3>
            </div>
            <div className="experience-details">
              <h2>G.C.E Advanced Level</h2>
              <h3>R/ Eheliyagoda Central College, Eheliyagoda</h3>
              <p>
                I successfully completed the G.C.E. Advanced Level Examination
                in the Physical Science stream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
