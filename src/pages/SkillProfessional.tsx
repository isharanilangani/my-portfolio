import React from "react";
import LanguagePie from "../components/LanguagePie";
import FrameworkPie from "../components/FrameworkPie";
import ToolPie from "../components/ToolPie";
import DatabasePie from "../components/DatabasePie";
import profileImage from "../assets/Profile.jpg";
import { Link, Outlet } from "react-router-dom";

const SkillProfessional: React.FC = () => {
  return (
    <div className="about-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="about-content">
        <h4>What I am good at</h4>
        <h1>My Skills</h1>
        <div className="skills-container">
          <nav>
            <ul className="nav-bar">
              <li className="nav-item">
                <Link to="/skill">All</Link>
              </li>
              <li className="nav-item">
                <Link to="/skill/professional">Professional</Link>
              </li>
              <li className="nav-item">
                <Link to="/skill/communication">Communication</Link>
              </li>
              <li className="nav-item">
                <Link to="/skill/soft">Soft</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
        <div className="skills-all-container">
          <h3>Professional Skills</h3>
          <div className="skills-all-category">
            <div className="skills-category">
              <h4>Languages</h4>
              <div className="circle-container">
                <LanguagePie />
              </div>
            </div>
            <div className="skills-category">
              <h4>Frameworks</h4>
              <div className="circle-container">
                <FrameworkPie />
              </div>
            </div>
            <div className="skills-category">
              <h4>Databases</h4>
              <div className="circle-container">
                <DatabasePie />
              </div>
            </div>
            <div className="skills-category">
              <h4>Technology</h4>
              <div className="circle-container">
                <ToolPie />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProfessional;
