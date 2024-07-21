import React from "react";
import profileImage from "../assets/Profile.jpg";
import { Link, Outlet } from "react-router-dom";
import LanguageProgress from "../components/LanguageProgress";
import "./About.css";
import "./Skill.css";

const SkillsSoft: React.FC = () => {
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
          <h3>Soft Skills</h3>
          <div className="skills-all-category">
            <div className="skills-category-line">
              <LanguageProgress
                language="Organizing"
                percentage={90}
                gradient="linear-gradient(to right, #0056b3, #7e7e7e)"
              />
              <LanguageProgress
                language="Flexible"
                percentage={80}
                gradient="linear-gradient(to right, #0056b3, #7e7e7e)"
              />
              <LanguageProgress
                language="Adaptability"
                percentage={70}
                gradient="linear-gradient(to right, #0056b3, #7e7e7e)"
              />
              <LanguageProgress
                language="Leadership"
                percentage={90}
                gradient="linear-gradient(to right, #0056b3, #7e7e7e)"
              />
              <LanguageProgress
                language="Patience"
                percentage={70}
                gradient="linear-gradient(to right, #0056b3, #7e7e7e)"
              />
              <LanguageProgress
                language="Analytical"
                percentage={90}
                gradient="linear-gradient(to right, #0056b3, #7e7e7e)"
              />
              <LanguageProgress
                language="Attention"
                percentage={85}
                gradient="linear-gradient(to right, #0056b3, #7e7e7e)"
              />
              <LanguageProgress
                language="Collaboration"
                percentage={70}
                gradient="linear-gradient(to right, #0056b3, #7e7e7e)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSoft;
