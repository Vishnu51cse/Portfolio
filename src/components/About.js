import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h3>Education</h3>
            <ul>
                <li>
                    <strong>Bachelor in Engineering (B.E.) in Computer Science And Engineering</strong> (2021 - 2025)
                    <br />
                    Kongu Engineering College, Perundurai. CGPA: 7.36
                </li>
                <li>
                    <strong>Higher Secondary Education</strong> (2021)
                    <br />
                    KVS English Medium School, Virudhunagar. Percentage: 92.2
                </li>
                <li>
                    <strong>Secondary Education</strong> (2019)
                    <br />
                    KVS English Medium School, Virudhunagar. Percentage: 86.6
                </li>
            </ul>
            <h3>Skills and Interests</h3>
            <ul>
                <li>Soft Skills: Adaptability, Time Management, Team Work</li>
                <li>Technical Skills: Python, SQL, Java</li>
                <li>Frameworks: Django</li>
                <li>Tools: Postman API</li>
                <li>Areas of Interest: Data Structures, Web Development</li>
            </ul>
        </div>
    );
};

export default About;
