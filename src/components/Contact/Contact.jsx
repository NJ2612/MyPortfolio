import React from 'react';
import { Mail, Linkedin, Github, FileText, Phone, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">INITIALIZE_CONNECTION</h2>
        <div className="contact-grid">
          <a href="mailto:menainajoshi@gmail.com" className="contact-item">
            <div className="icon-box">
              <Mail className="contact-icon" />
            </div>
            <span>Email</span>
          </a>
          
          <a href="https://www.linkedin.com/in/naina-joshi-221072301/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="icon-box">
              <Linkedin className="contact-icon" />
            </div>
            <span>LinkedIn</span>
          </a>
          
          <a href="https://github.com/NJ2612/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="icon-box">
              <Github className="contact-icon" />
            </div>
            <span>GitHub</span>
          </a>

          <a href="https://wa.me/9044184929" target="_blank" rel="noopener noreferrer" className="contact-item">
             <div className="icon-box">
               <MessageCircle className="contact-icon" />
             </div>
             <span>WhatsApp</span>
          </a>

          <a href="tel:+919044184929" className="contact-item">
            <div className="icon-box">
              <Phone className="contact-icon" />
            </div>
            <span>Call</span>
          </a>
          
          <a href="Resume/Naina_Joshi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="icon-box">
              <FileText className="contact-icon" />
            </div>
            <span>Resume</span>
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Naina Joshi. System Operational.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
