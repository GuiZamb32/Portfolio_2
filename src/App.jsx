import React from 'react';
import Navbar from './components/navbars/Navbar';
import Hero from './components/heros/Hero';
import Skills from './components/skills/Skill';
import Education from './components/educations/Education';
import Contact from './components/contacts/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Guilherme Zamboni Menegacio.</p>
      </footer>
    </div>
  );
}

export default App;