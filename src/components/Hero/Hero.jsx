import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="hero-title">
            NAINA JOSHI
            <span className="hero-subtitle-block">
              AI & Data Systems Engineer
            </span>
          </h1>
        </motion.div>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Building <span className="text-accent">intelligent platforms</span> that analyze, 
          predict, and optimize real-world systems.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Work <ArrowRight size={18} />
          </button>
          
          <a href="https://github.com/NJ2612" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Github size={20} /> GitHub
          </a>
          
          <a href="https://drive.google.com/file/d/1tuXqh4kT8bVFuwcKAfLluL3Bh8XmgFmZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FileText size={20} /> Resume
          </a>
        </motion.div>
      </div>

      <div className="hero-visuals">
        {/* Simplified Abstract Shape */}
        <div className="orb-container">
           <div className="orb orb-1"></div>
           <div className="orb orb-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
