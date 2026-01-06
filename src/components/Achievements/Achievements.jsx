import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const highlights = [
  { 
    title: "Adobe India Hackathon", 
    desc: "Recognized for generative AI innovation in creative workflows." 
  },
  { 
    title: "Platform Adoption", 
    desc: "Deployed solutions used by university wide student bodies." 
  },
  { 
    title: "System Optimization", 
    desc: "Architected algorithms for resource conflict resolution." 
  },
  { 
    title: "Research Precision", 
    desc: "Achieved high fidelity in anomaly detection simulations." 
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
