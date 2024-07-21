import React from "react";
import "./About.css";
import "./Experience.css";
import profileImage from "../assets/Profile.jpg";

const Experience: React.FC = () => {
  return (
    <div className="about-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="about-content">
        <h4>What I am good at</h4>
        <h1>My Experience</h1>
        <div className="experience-container">
          <div className="experience-item">
            <div className="experience-date">
              <h3>2024 Feb - Present</h3>
            </div>
            <div className="experience-details">
              <h2>Backend Developer Intern</h2>
              <h3>Ceylon's Crown PVT(LTD)</h3>
              <p>
                Responsible for designing, developing, and maintaining RESTful
                APIs to support various applications. Utilizing PHP Framework
                Laravel for robust backend solutions, including:
              </p>
              <ul>
                <li>
                  Developing and implementing efficient, scalable, and secure
                  API endpoints.
                </li>
                <li>
                  Managing database interactions using Eloquent ORM for seamless
                  data retrieval and manipulation.
                </li>
                <li>
                  Ensuring robust authentication and authorization mechanisms
                  using Laravel Passport and JWT.
                </li>
                <li>
                  Integrating third-party services and APIs to enhance
                  application functionality.
                </li>
              </ul>
              <p>
                Leveraging JavaScript with Node.js and Express.js for
                high-performance, non-blocking API services:
              </p>
              <ul>
                <li>
                  Creating and managing RESTful API endpoints using Express.js
                  to handle client requests and responses.
                </li>
                <li>
                  Implementing middleware for request validation, logging, and
                  error handling.
                </li>
                <li>
                  Optimizing server performance and scalability using
                  asynchronous programming and event-driven architecture.
                </li>
                <li>
                  Collaborating with front-end developers to ensure seamless
                  integration between the server and client applications.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">
              <h3>2019 - 2020</h3>
            </div>
            <div className="experience-details">
              <h2>Trainee</h2>
              <h3>Sampath Bank, Awissawella Branch</h3>
              <p>
                Worked in the account opening section.Assisted customers in
                opening new accounts, maintained accurate records, and resolved
                inquiries to ensure efficient service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
