import React from 'react';
import './Skills.css'; // Import your CSS file

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
    'Responsive Design',
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
