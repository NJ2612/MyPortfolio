import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          NAINA JOSHI <span className="highlight">.SYS</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop">
          <button onClick={() => scrollTo('projects')}>PROJECTS</button>
          <button onClick={() => scrollTo('skills')}>SKILLS</button>
          <button onClick={() => scrollTo('timeline')}>TIMELINE</button>
          <button className="btn-contact" onClick={() => scrollTo('contact')}>CONTACT</button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-links">
              <button onClick={() => scrollTo('projects')}>PROJECTS</button>
              <button onClick={() => scrollTo('skills')}>SKILLS</button>
              <button onClick={() => scrollTo('timeline')}>TIMELINE</button>
              <button className="btn-contact" onClick={() => scrollTo('contact')}>CONTACT</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
