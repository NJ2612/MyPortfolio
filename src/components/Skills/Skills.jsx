import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header right">
        <div className="section-line"></div>
        <h2 className="section-title">CAPABILITIES</h2>
      </div>

      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="skill-category">
             <h3 className="category-title">{category.category}</h3>
             <div className="category-grid">
               {category.items.map((skill, i) => (
                 <motion.div 
                   key={i} 
                   className="skill-chip subtle-border"
                   whileHover={{ y: -2, borderColor: 'var(--accent-primary)' }}
                 >
                   <span className="skill-name">{skill.name}</span>
                   <span className="skill-context">{skill.context}</span>
                 </motion.div>
               ))}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
