import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Education = ({ education }) => {
  const { ref, isVisible } = useScrollAnimation(0.1, '-30px');

  if (!education || education.length === 0) return null;

  return (
    <section className="education-section" id="education" ref={ref}>
      <h2 className={`section-title anim-fade-up${isVisible ? ' is-visible' : ''}`}>
        Education
      </h2>

      <div className="education-list">
        {education.map((edu, idx) => {
          const delayClass = `anim-delay-${Math.min(idx + 1, 6)}`;
          return (
            <article
              key={idx}
              className={`education-card anim-fade-right${isVisible ? ' is-visible' : ''} ${delayClass}`}
            >
              <div className="education-header">
                <div className="edu-title-group">
                  <GraduationCap size={18} className="edu-icon" />
                  <div>
                    <h3 className="education-institution">{edu.institution}</h3>
                    <p className="education-degree">{edu.degree}</p>
                  </div>
                </div>
                <span className="education-period">{edu.period}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
