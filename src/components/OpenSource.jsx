import React from 'react';
import { GitPullRequest, GitMerge } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const OpenSource = ({ openSource }) => {
  const { ref, isVisible } = useScrollAnimation(0.1, '-30px');

  if (!openSource || openSource.length === 0) return null;

  return (
    <section className="opensource-section" id="opensource" ref={ref}>
      <h2 className={`section-title anim-fade-up${isVisible ? ' is-visible' : ''}`}>
        Open Source Contributions
      </h2>

      <div className="opensource-list">
        {openSource.map((item, cardIdx) => {
          const delayClass = `anim-delay-${Math.min(cardIdx + 1, 6)}`;
          return (
            <article
              key={item.id}
              className={`opensource-card anim-fade-up${isVisible ? ' is-visible' : ''} ${delayClass}`}
            >
              <div className="opensource-header">
                <div>
                  <div className="repo-title-row">
                    <GitPullRequest size={18} className="pr-icon" />
                    <h3 className="repo-title">{item.repo}</h3>
                  </div>
                  <p className="repo-stack">{item.stack}</p>
                </div>
                <span className="repo-period">{item.period}</span>
              </div>

              <p className="repo-description">{item.description}</p>

              <ul className="contributions-list">
                {item.contributions.map((c, idx) => (
                  <li key={idx} className="contribution-item">
                    <GitMerge size={14} className="bullet-pr-icon" />
                    <div className="contribution-content">
                      <span>{c.text} </span>
                      <span className="pr-badge">{c.pr}</span>
                    </div>
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
