import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { X, ExternalLink, Github, Cpu, Activity, Database, Server } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">SYSTEM ARCHIVES</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-entry subtle-border"
            layoutId={`project-card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            whileHover={{ y: -5, backgroundColor: 'var(--bg-card-hover)' }}
          >
            <div className="entry-header">
              <span className="entry-id">SYS-{project.id.toString().padStart(3, '0')}</span>
              <span className="entry-category">{project.category}</span>
            </div>
            <h3 className="entry-title">{project.title}</h3>
            <p className="entry-headline">{project.headline}</p>
            <div className="entry-tech">
              {project.stack.slice(0, 3).map(t => <span key={t}>{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              className="project-modal"
              layoutId={`project-card-${selectedId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedId(null)}>
                <X size={24} />
              </button>

              <div className="modal-content">
                <header className="modal-header">
                  <span className="modal-id">SYS-{selectedProject.id.toString().padStart(3, '0')}</span>
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-category">{selectedProject.headline}</p>
                </header>

                <div className="modal-grid">
                  <div className="modal-main">
                    <section className="detail-section">
                      <h3><Activity size={18} /> Overview</h3>
                      <p>{selectedProject.overview}</p>
                    </section>

                    <section className="detail-section">
                      <h3><Server size={18} /> Architecture</h3>
                      <ul className="sys-list">
                        {selectedProject.architecture.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="detail-section">
                      <h3><Cpu size={18} /> Core Components / Logic</h3>
                      <div className="tags-container">
                        {selectedProject.models.map(m => (
                          <span key={m} className="tag-chip">{m}</span>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="modal-sidebar">
                    <div className="tech-stack-panel">
                      <h4>Tech Stack</h4>
                      <div className="stack-grid">
                        {selectedProject.stack.map(s => <span key={s}>{s}</span>)}
                      </div>
                    </div>
                     
                    {/* Metrics removed conform request */}
                    
                    <div className="modal-actions">
                      {selectedProject.links.github && (
                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="btn-modal">
                          <Github size={18} /> Source
                        </a>
                      )}
                      {selectedProject.links.demo && (
                        <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="btn-modal primary">
                          <ExternalLink size={18} /> Live System
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
