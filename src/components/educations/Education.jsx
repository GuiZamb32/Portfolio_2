import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-container">
        <h2 className="section-title">
          Formação <span className="gradient-text">Acadêmica</span>
        </h2>
        <div className="education-card">
          <div className="education-content">
            <span className="education-badge">🎓 Em Andamento</span>
            <h3>Ciências de Dados e Inteligência Artificial</h3>
            <p className="institution">Faculdade de Tecnologia</p>
            <p className="education-description">
              Aprofundando conhecimentos em machine learning, análise preditiva, 
              big data e algoritmos inteligentes para complementar a expertise em desenvolvimento full stack.
            </p>
          </div>
          <div className="glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;