import React from 'react';
import './About.css'; // Make sure the path to your CSS file is correct

const About = () => {
    return (
        <section className="about-container">
            <div className="text-container">
                <h1>Who am I?</h1>
                <p>Hi, I'm Ansh! I am currently studying Computer Science and Business with a concentration in Finance at Northeastern University! I primarily focus on Application Development, including Full-stack Web Apps and Software Dev, but I also have worked on AI\ML, data science, and Math/Physics tools. Beyond that, I like exploring new places and trying new things!</p>
            </div>
            <div className="profile-container">
                <img src="images/img-1.jpg" alt="Profile" className="profile-image" />
            </div>
        </section>
    );
};

export default About;
