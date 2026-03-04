import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const highlights = [
  { 
    title: "Hack the Winter (2.0)", 
    desc: "Ranked Top 5 at GEHU Bhimtal based on technical evaluation of submitted solutions." 
  },
  { 
    title: "Adobe India Hackathon", 
    desc: "Selected in top 5% nationwide after multi-round technical screening." 
  },
  { 
    title: "National Hackathon Finalist", 
    desc: "Finalist in ComSoc hackX, Innovation Contest, Neural Nexus Hackathon among 120+ teams." 
  },
  { 
    title: "Smart India Hackathon", 
    desc: "Qualified institute-level round through problem analysis and technical assessment." 
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="section-header right">
        <div className="section-line"></div>
        <h2 className="section-title">BENCHMARKS</h2>
      </div>

      <div className="achievements-grid">
        {highlights.map((item, index) => (
          <motion.div 
            key={index}
            className="highlight-card subtle-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
