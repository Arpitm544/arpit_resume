import React, { useRef } from 'react';
import { FileText, Send, Mail } from 'lucide-react';
import { TechIcon } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero = ({ personalInfo }) => {
  const { ref: leftRef,  isVisible: leftVisible }  = useScrollAnimation(0.08, '0px');
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.08, '0px');
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -16;
    const rotateY = ((x - centerX) / centerX) * 16;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    const px = ((x - centerX) / centerX) * -12;
    const py = ((y - centerY) / centerY) * -12;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`;
    cardRef.current.style.setProperty('--glare-x', `${glareX.toFixed(1)}%`);
    cardRef.current.style.setProperty('--glare-y', `${glareY.toFixed(1)}%`);
    cardRef.current.style.setProperty('--glare-opacity', '1');
    cardRef.current.style.setProperty('--px', `${px.toFixed(2)}px`);
    cardRef.current.style.setProperty('--py', `${py.toFixed(2)}px`);
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.08s ease-out, box-shadow 0.2s ease';
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease';
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    cardRef.current.style.setProperty('--glare-opacity', '0');
    cardRef.current.style.setProperty('--px', '0px');
    cardRef.current.style.setProperty('--py', '0px');
  };

  return (
    <section className="hero-section" id="about">
      <div className="hero-grid">
        {/* Left Column: Bio & Info */}
        <div
          className={`hero-content anim-fade-right${leftVisible ? ' is-visible' : ''}`}
          ref={leftRef}
        >
          <h1 className="hero-title">{personalInfo.headline}</h1>
          <p className="hero-subtitle">{personalInfo.subheadline}</p>

          <div className="hero-bio-block">
            <p className="hero-tech-summary">
              I build modern web applications and backend systems using{' '}
              <strong>Golang</strong>, <strong>TypeScript</strong>,{' '}
              <strong>React</strong>, <strong>Node.js</strong>,{' '}
              <strong>Express.js</strong>, <strong>PostgreSQL</strong>, and{' '}
              <strong>MongoDB</strong>.
            </p>

            <div className="hero-focus-box">
              <p>
                My focus is on{' '}
                <span className="highlight-yellow">
                  crafting clean
                  <span className="marker-arrow marker-arrow-top">▲</span>
                </span>
                , thoughtful frontends and designing backend systems that are ,{' '}
                <span className="highlight-yellow">
                  scalable
                  <span className="marker-arrow marker-arrow-bottom">▲</span>
                </span>{' '}
                reliable, and easy to maintain.
              </p>
            </div>

            <div className="availability-wrapper">
              <span className="availability-badge">
                {personalInfo.status}
                <span className="marker-arrow marker-arrow-right">▲</span>
              </span>
            </div>

            <p className="hero-motto">{personalInfo.motto}</p>
          </div>

          {/* Action Row */}
          <div className="hero-actions">
            <a
              href={personalInfo.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FileText size={16} className="btn-icon" />
              <span>Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              <Send size={15} className="btn-icon" />
              <span>Get in touch !</span>
            </a>

            {/* Social Icons */}
            <div className="social-icons-group">
              <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer"
                className="social-icon-btn" aria-label="GitHub" title="GitHub">
                <TechIcon name="github" size={16} />
              </a>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer"
                className="social-icon-btn" aria-label="LinkedIn" title="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-icon-btn"
                aria-label="Email" title={`Email: ${personalInfo.email}`}>
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Framed Manga Art Card */}
        <div
          className={`hero-avatar-wrapper anim-fade-left${rightVisible ? ' is-visible' : ''}`}
          ref={rightRef}
        >
          <div
            className="avatar-frame-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="avatar-card-glare" />
            <div className="avatar-image-container">
              <img
                src="/avatar-art.png"
                alt={personalInfo.fullName}
                className="avatar-art-img"
                loading="eager"
              />
            </div>
            <div className="avatar-caption">
              <span className="avatar-name">{personalInfo.fullName}</span>
              <span className="avatar-code">{personalInfo.badgeCode}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
