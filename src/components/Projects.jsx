import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Projects = ({ projects }) => {
  const { ref, isVisible } = useScrollAnimation(0.08, '-30px');

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <h2 className={`section-title anim-fade-up${isVisible ? ' is-visible' : ''}`}>
        Projects
      </h2>

      <div className="projects-list">
        {projects.map((project, cardIdx) => {
          const delayClass = `anim-delay-${Math.min(cardIdx + 1, 6)}`;
          return (
            <article
              key={project.id}
              className={`project-card anim-fade-up${isVisible ? ' is-visible' : ''} ${delayClass}`}
            >
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.links.map((link, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <span className="project-link-separator">—</span>}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {link.label}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {project.techBadge && (
                  <span className="project-tech-badge">{project.techBadge}</span>
                )}
              </div>

              <ul className="project-points-list">
                {project.points.map((point, pIdx) => (
                  <li key={pIdx} className="project-point-item">
                    <span className="bullet-dot">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};
