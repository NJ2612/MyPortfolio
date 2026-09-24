import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const featuredProjects = useMemo(
    () =>
      [...projects]
        .filter((project) => project.featured)
        .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
        .slice(0, 3),
    []
  );

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">SELECTED WORK</h2>
        <div className="section-line"></div>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <article key={project.id} className={`featured-project project-${index + 1}`}>
            <div className="project-number">{String(index + 1).padStart(2, '0')}</div>

            <div className="project-content">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.stack[0]}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.headline}</p>

              <div className="entry-tech">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={`${project.id}-${tech}`}>{tech}</span>
                ))}
              </div>

              <Link to={`/projects/${project.id}`} className="case-study-link">
                View case study <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-cta-wrap">
        <Link to="/projects" className="projects-cta">
          VIEW ALL PROJECTS <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
