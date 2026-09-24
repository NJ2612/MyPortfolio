import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FolderOpen } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const orderedProjects = [...projects].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

  return (
    <main className="projects-archive-page">
      <section className="page-header">
        <p className="eyebrow">SYSTEM ARCHIVE</p>
        <h1>Complete Project Collection</h1>
        <p className="page-intro">
          A full archive of applied AI, systems, and data work spanning research, automation,
          experimentation, and product prototypes.
        </p>
      </section>

      <section className="archive-grid">
        {orderedProjects.map((project) => (
          <article key={project.id} className="archive-card subtle-border">
            <div className="archive-topline">
              <span className="archive-id">SYS-{String(project.id).padStart(3, '0')}</span>
              <span className="archive-category">{project.category}</span>
            </div>

            <h2>{project.title}</h2>
            <p>{project.headline}</p>

            <div className="archive-tech">
              {project.stack.slice(0, 3).map((item) => (
                <span key={`${project.id}-${item}`}>{item}</span>
              ))}
            </div>

            <Link to={`/projects/${project.id}`} className="archive-link">
              View case study <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </section>

      <div className="archive-footer">
        <Link to="/" className="back-home-link">
          <FolderOpen size={16} /> Back to home
        </Link>
      </div>
    </main>
  );
};

export default ProjectsPage;
