import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  {     title: 'CSE (AI & DS)', 
    desc: 'Started B.Tech in Computer Science with specialization in Artificial Intelligence and Data Science.' 
  },
  {     title: 'Hack the Winter (Top 5)', 
    desc: 'Ranked Top 5 at Hack the Winter hackathon held at GEHU Bhimtal based on technical evaluation.' 
  },
  {     title: 'Management Intern', 
    desc: 'Worked as a Management Intern at Team Rogers, coordinating university events and workshops for 500+ participants.' 
  },
  {     title: 'Certifications', 
    desc: 'Completed Data Analytics with Python (SWAYAM) and Google Cloud Computing Foundations (NPTEL).' 
  },
  {     title: 'Certifications & Training', 
    desc: 'AWS Solution Architect Virtual Experience (Forage), Complete DS/ML/DL/NLP Bootcamp by Krish Naik, Winter Boot Camp on Data Science & Python (GEHU).' 
  },
  {     title: 'ML & Hackathon Focus', 
    desc: 'Actively building machine learning projects, exploring large-scale ML systems, and participating in competitive programming and hackathons.' 
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