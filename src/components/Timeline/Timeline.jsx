import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  { year: '2026', title: 'Top 5% @ Adobe Hackathon', desc: 'Building generative AI models for creative workflows.' },
  { year: '2025', title: 'ML Platforms & Hackathons', desc: 'Focusing on large-scale ML systems and competitive programming.' },
  { year: '2024', title: 'Optimization Systems', desc: 'Deep dive into system architecture and optimization algorithms.' },
  { year: '2023', title: 'CSE (AI & DS)', desc: 'Started specialization in AI & Data Science.' }
];

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="section-header">
        <h2 className="section-title">JOURNEY</h2>
        <div className="section-line"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
