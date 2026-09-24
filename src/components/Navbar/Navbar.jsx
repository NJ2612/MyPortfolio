import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const sectionLookup = {
  home: 'home',
  projects: 'projects',
  experience: 'timeline',
  skills: 'skills',
  about: 'about',
  contact: 'contact'
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const navigateToSection = (sectionId) => {
    const targetId = sectionLookup[sectionId] || sectionId;
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate(`/?section=${sectionId}`);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');
    if (!section) return;

    const targetId = sectionLookup[section] || section;
    const element = document.getElementById(targetId);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.pathname, location.search]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link className="nav-logo" to="/" onClick={() => setIsOpen(false)}>
          NAINA JOSHI <span className="highlight">.SYS</span>
        </Link>

        <div className="nav-links desktop">
          <button onClick={() => navigateToSection('home')}>HOME</button>
          <Link to="/projects">PROJECTS</Link>
          <button onClick={() => navigateToSection('experience')}>EXPERIENCE</button>
          <button onClick={() => navigateToSection('skills')}>SKILLS</button>
          <button onClick={() => navigateToSection('about')}>ABOUT</button>
          <button className="btn-contact" onClick={() => navigateToSection('contact')}>CONTACT</button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <div className="mobile-links" onClick={(event) => event.stopPropagation()}>
              <button onClick={() => navigateToSection('home')}>HOME</button>
              <Link to="/projects" onClick={() => setIsOpen(false)}>PROJECTS</Link>
              <button onClick={() => navigateToSection('experience')}>EXPERIENCE</button>
              <button onClick={() => navigateToSection('skills')}>SKILLS</button>
              <button onClick={() => navigateToSection('about')}>ABOUT</button>
              <button className="btn-contact" onClick={() => navigateToSection('contact')}>CONTACT</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
