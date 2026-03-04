import React from 'react';
import './Skill.css';

const skillsData = [
  { 
    icon: `${process.env.PUBLIC_URL}/icons/react.png`, 
    name: 'React', 
    description: 'Interfaces modernas e responsivas com componentização eficiente' 
  },
  { 
    icon: `${process.env.PUBLIC_URL}/icons/javascript.png`, 
    name: 'JavaScript', 
    description: 'Lógica avançada e manipulação dinâmica do DOM' 
  },
  { 
    icon: `${process.env.PUBLIC_URL}/icons/nodejs.png`, 
    name: 'Node.js', 
    description: 'Backend escalável e APIs RESTful de alta performance' 
  },
  { 
    icon: `${process.env.PUBLIC_URL}/icons/python.png`, 
    name: 'Python', 
    description: 'Automação, análise de dados e scripts inteligentes' 
  },
  { 
    icon: `${process.env.PUBLIC_URL}/icons/postgresql.png`, 
    name: 'PostgreSQL', 
    description: 'Banco de dados relacional robusto e otimizado' 
  }
];

const Skills = () => {
  // Debug: verifique se os caminhos estão corretos
  console.log('Skills data:', skillsData);

  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title">
          Stack <span className="gradient-text">Tecnológico</span>
        </h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} icon`}
                  onError={(e) => {
                    console.error(`Erro ao carregar: ${skill.icon}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;