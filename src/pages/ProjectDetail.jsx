import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Cpu, Server, Activity } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => String(item.id) === String(projectId));

  if (!project) {
    return (
      <main className="project-detail-page empty-state">
        <h1>Project not found</h1>
        <Link to="/projects" className="archive-link">Return to archive</Link>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <div className="detail-shell">
        <Link to="/projects" className="detail-back-link">
          <ArrowLeft size={16} /> Back to archive
        </Link>

        <header className="detail-header">
          <div className="detail-topline">
            <span>SYS-{String(project.id).padStart(3, '0')}</span>
            <span>{project.category}</span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.headline}</p>
        </header>

        <section className="detail-summary-grid">
          <div className="detail-panel">
            <h2><Activity size={18} /> Overview</h2>
            <p>{project.overview}</p>
          </div>

          <div className="detail-panel">
            <h2><Cpu size={18} /> Core systems</h2>
            <div className="detail-tags">
              {project.models.map((model) => (
                <span key={model}>{model}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-architecture">
          <h2><Server size={18} /> Architecture</h2>
          <ul>
            {project.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-stack-panel">
          <h2>Technology stack</h2>
          <div className="detail-tags">
            {project.stack.map((item) => (
              <span key={`${project.id}-${item}`}>{item}</span>
            ))}
          </div>
        </section>

        <div className="detail-actions">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-modal primary">
              <Github size={18} /> Source
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-modal">
              <ExternalLink size={18} /> Live system
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
