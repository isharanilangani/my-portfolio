import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/">About</Link></li>
                <li className="navbar-item"><Link to="/skill">Skill</Link></li>
                <li className="navbar-item"><Link to="/services">Services</Link></li>
                <li className="navbar-item"><Link to="/experience">Experience</Link></li>
                <li className="navbar-item"><Link to="/education">Education</Link></li>
                <li className="navbar-item"><Link to="/projects">Projects</Link></li>
                <li className="navbar-item"><Link to="/contact">Contact</Link></li>
            </ul>
            <a 
                href="/path/to/your/cv.pdf" 
                download="Your_CV_Name.pdf"
                title="Download CV"
                className="download-link"
            >
                <FontAwesomeIcon icon={faDownload} size="lg" />
            </a>
        </nav>
    );
};

export default NavBar;
