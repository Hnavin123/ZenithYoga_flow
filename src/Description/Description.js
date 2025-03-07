import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <div className="description-container">
      <h1>About Me</h1>
      <p>
      I am a Computer Science Engineer with a passion for exploring cutting-edge technologies and solving complex problems through innovative solutions. My journey revolves around continuous learning and staying updated with the latest trends in web development
        I enjoy solving real-world problems through coding and building interactive applications. My journey in the tech world has been driven by curiosity, dedication, and the constant desire to learn.
      </p>

      <p>
      <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Technical Expertise</span><br/>
        Proficient in React.js, JavaScript, and Ruby on Rails, I am dedicated to crafting dynamic and interactive user interfaces that enhance the user experience. My technical skills help me build efficient and scalable web applications.
      </p>
      
      <p>
      <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Problem Solver</span><br/>
        Driven by logic and creativity, I enjoy breaking down problems into smaller components to find optimal solutions. From building frontend applications to integrating APIs, problem-solving is at the heart of my development process.
      </p>

      <p>
      <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Team Player & Collaborator</span><br/>
        With experience in working on collaborative projects, I understand the importance of teamwork and communication. I thrive in environments that promote knowledge sharing and collective growth.
      </p> 

      <p>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Aspiring Full Stack Developer</span><br/>
          "As an aspiring Full Stack Developer, I am on a journey to master both frontend and backend technologies. My goal is to contribute to impactful projects that make a difference in people's lives."
    </p>
    </div>
  );
};

export default Description;
