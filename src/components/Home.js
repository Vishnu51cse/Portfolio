import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <img src="profilepic.jpg" alt="Your Name" className="profile-image" />
            <div className="profile-text">
                <h2>Vishnu Prasad S</h2>
                <p>Student currently pursuing B.E. in Computer Science Engineering. A good eager learner with time bound
                skills and a work ethic looking for a Entry level positon.</p>
            </div>
        </div>
    );
};

export default Home;
