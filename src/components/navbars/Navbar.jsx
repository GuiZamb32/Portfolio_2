import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">GZ</div>
        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#education">Formação</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <div className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;