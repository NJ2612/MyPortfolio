import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  { 
    year: '2023', 
    title: 'CSE (AI & DS)', 
    desc: 'Started B.Tech in Computer Science with specialization in Artificial Intelligence & Data Science at Graphic Era Hill University.' 
  },
  { 
    year: '2023', 
    title: 'Management Intern – Team Rogers', 
    desc: 'Coordinated university events and technical workshops for 500+ participants.' 
  },
  { 
    year: '2024', 
    title: 'Cloud & Data Certifications', 
    desc: 'Completed Google Cloud Computing Foundations (NPTEL) and Data Analytics with Python (SWAYAM).' 
  },
  { 
    year: '2025', 
    title: 'Advanced ML Training', 
    desc: 'Completed Complete Data Science, ML, DL, NLP Bootcamp by Krish Naik and Winter Boot Camp on Data Structures & Python (GEHU).' 
  },
  { 
    year: '2025', 
    title: 'AWS Solution Architect', 
    desc: 'Completed AWS Solution Architect Job Simulation on Forage.' 
  },
  { 
    year: '2025', 
    title: 'National Hackathons', 
    desc: 'Selected in Adobe India Hackathon (Top 5% nationwide) and finalist in national-level hackathons including ComSoc HackX, Innovation Contest, and Neural Nexus Hackathon.' 
  },
  { 
    year: '2026', 
    title: 'Hack the Winter (Top 5)', 
    desc: 'Ranked Top 5 at Hack the Winter 2.0 held at GEHU Bhimtal based on technical evaluation.' 
  }
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