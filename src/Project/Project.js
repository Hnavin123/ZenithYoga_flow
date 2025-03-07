import React from 'react';
import './Project.css';

const Projects = () => {
  const projects = [
    { name: 'Calculator App', description: 'A basic calculator app with addition, subtraction, multiplication, and division features.' },
    { name: 'To-Do List', description: 'A simple app to add, edit, and delete daily tasks.' },
    { name: 'Weather App', description: 'Displays current weather information using an API.' },
    { name: 'Portfolio Website', description: 'A responsive portfolio to showcase your projects and skills.' }
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
