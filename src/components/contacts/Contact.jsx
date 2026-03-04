import React from 'react';
import './Contact.css';

const contacts = [
  {
    icon: `${process.env.PUBLIC_URL}/icons/github.png`,
    title: 'GitHub',
    url: 'https://github.com/GuiZamb32',
    description: 'github.com/GuiZamb32'
  },
  {
    icon: `${process.env.PUBLIC_URL}/icons/linkedin.png`,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/guilherme-zamboni-000624301/',
    description: 'Guilherme Zamboni Menegacio'
  }
];

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <h2 className="section-title">
          Vamos <span className="gradient-text">Conversar</span>
        </h2>
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <a 
              href={contact.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card" 
              key={index}
            >
              <div className="contact-icon">
                <img 
                  src={contact.icon} 
                  alt={`${contact.title} icon`}
                  onError={(e) => {
                    console.error(`Erro ao carregar: ${contact.icon}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3>{contact.title}</h3>
              <p>{contact.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;