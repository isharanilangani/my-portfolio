import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    Made with <FontAwesomeIcon icon={faHeart} className="footer-heart-icon" /> by Ishara
                </p>
            </div>
        </footer>
    );
};

export default Footer;
