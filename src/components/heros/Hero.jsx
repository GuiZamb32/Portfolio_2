import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-effect"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Guilherme Zamboni
            <span className="gradient-text">Menegacio</span>
          </h1>
          <p className="subtitle">Desenvolvedor Full Stack</p>
          <p className="description">
            Transformando ideias em soluções digitais robustas. Especializado em desenvolvimento web moderno, 
            arquitetura de dados e inteligência artificial. Cursando Ciências de Dados e IA, 
            combinando código limpo com análise inteligente.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://github.com/GuiZamb32" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/icons/github.png`} 
                alt="GitHub" 
                className="btn-icon"
              />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/guilherme-zamboni-000624301/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} 
                alt="LinkedIn" 
                className="btn-icon"
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;