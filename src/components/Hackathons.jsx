import React from 'react';

export const Hackathons = ({ hackathons, work }) => {
  return (
    <>
      {/* Hackathons Section */}
      {hackathons && hackathons.length > 0 && (
        <section className="hackathons-section" id="hackathons">
          <h2 className="section-title">Hackathon Wins</h2>

          <div className="hackathons-list">
            {hackathons.map((hack) => (
              <article key={hack.id} className="hackathon-card">
                <div className="hackathon-header">
                  <h3 className="hackathon-title">{hack.title}</h3>
                  <p className="hackathon-organizer">{hack.organizer}</p>
                </div>

                <ul className="hackathon-points-list">
                  {hack.points.map((pt, pIdx) => (
                    <li key={pIdx} className="hackathon-point-item">
                      <span className="bullet-dot">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {hack.projectLink && (
                  <div className="hackathon-link-row">
                    <span>{hack.linkText}</span>
                    <a 
                      href={hack.projectLink.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hackathon-highlight-link"
                    >
                      {hack.projectLink.label}
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience Section */}
      {work && work.length > 0 && (
        <section className="work-section" id="work">
          <h2 className="section-title">Work Experience</h2>

          <div className="work-list">
            {work.map((item, idx) => (
              <article key={idx} className="work-card">
                <div className="work-header">
                  <div>
                    <h3 className="work-role">{item.role}</h3>
                    <p className="work-company">{item.company}</p>
                  </div>
                  <span className="work-period">{item.period}</span>
                </div>
                <p className="work-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
