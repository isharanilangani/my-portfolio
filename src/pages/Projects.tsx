import React from 'react';

const Projects: React.FC = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                <li>
                    <h2>Project 1</h2>
                    <p>Description of project 1</p>
                    <a href="https://link-to-project-1.com">Live Demo</a>
                </li>
                <li>
                    <h2>Project 2</h2>
                    <p>Description of project 2</p>
                    <a href="https://link-to-project-2.com">Live Demo</a>
                </li>
            </ul>
        </div>
    );
};

export default Projects;
