import React, { useState, useEffect, useMemo } from 'react';
import { RefreshCw, Check } from 'lucide-react';
import { TechIcon } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const TechStack = ({ technologies, githubUsername = 'arpitm544', onUpdateUsername }) => {
  const { ref: badgesRef, isVisible: badgesVisible } = useScrollAnimation(0.08, '-20px');
  const { ref: heatmapRef, isVisible: heatmapVisible } = useScrollAnimation(0.08, '-20px');

  const [username, setUsername] = useState(githubUsername);
  const [inputUsername, setInputUsername] = useState(githubUsername);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contributionsData, setContributionsData] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);

  // Fetch real GitHub contribution data
  useEffect(() => {
    if (!username) return;

    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(`https://github-contributions-api.jogruber.de/v4/${username.trim()}?y=last`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub user "${username}" not found or API error`);
        }
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data && data.contributions) {
          setContributionsData(data);
          setLoading(false);
        } else {
          throw new Error('Invalid response structure');
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  // Group fetched 365 days of contributions into 52 weeks (7 days per column)
  const heatmapGrid = useMemo(() => {
    if (!contributionsData || !contributionsData.contributions) {
      return null;
    }

    const list = contributionsData.contributions;
    const grid = [];
    const monthLabels = [];
    let currentMonth = '';

    // Group into 7-day chunks
    for (let i = 0; i < list.length; i += 7) {
      const week = list.slice(i, i + 7);
      grid.push(week);

      // Determine month label based on first day of week
      if (week.length > 0) {
        const dateObj = new Date(week[0].date);
        const monthName = dateObj.toLocaleString('default', { month: 'short' });
        if (monthName !== currentMonth) {
          monthLabels.push({ index: grid.length - 1, label: monthName });
          currentMonth = monthName;
        }
      }
    }

    return {
      grid,
      monthLabels,
      totalCount: contributionsData.total?.lastYear ?? list.reduce((acc, c) => acc + (c.count || 0), 0)
    };
  }, [contributionsData]);

  const handleSyncSubmit = (e) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      setUsername(inputUsername.trim());
      setIsEditingUsername(false);
      if (onUpdateUsername) onUpdateUsername(inputUsername.trim());
    }
  };

  return (
    <section className="tech-section" id="skills">
      <h2 className="section-title">Tools and Technology</h2>

      {/* Tech Badges */}
      <div
        className={`tech-badges-grid anim-fade-up${badgesVisible ? ' is-visible' : ''}`}
        ref={badgesRef}
      >
        {technologies.map((tech, idx) => (
          <div key={idx} className="tech-badge-pill" style={{ '--accent': tech.color }}>
            <span className="tech-badge-icon">
              <TechIcon name={tech.icon || tech.name} size={16} />
            </span>
            <span className="tech-badge-name">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Real GitHub Activity Heatmap Card */}
      <div
        className={`heatmap-container-card anim-fade-up${heatmapVisible ? ' is-visible' : ''} anim-delay-2`}
        ref={heatmapRef}
      >
        <div className="heatmap-header-bar">
          <div className="heatmap-title-group">
            <TechIcon name="github" size={16} />
            <span className="heatmap-heading">GitHub Contributions</span>
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="heatmap-user-tag"
            >
              @{username}
            </a>
          </div>
        </div>

        {loading ? (
          <div className="heatmap-loading-state">
            <RefreshCw size={20} className="animate-spin" />
            <span>Fetching live GitHub contributions for @{username}...</span>
          </div>
        ) : error ? (
          <div className="heatmap-error-state">
            <p>Could not fetch GitHub activity for @{username}.</p>
            <button 
              onClick={() => setIsEditingUsername(true)}
              className="heatmap-retry-btn"
            >
              Enter valid GitHub handle
            </button>
          </div>
        ) : heatmapGrid ? (
          <div className="heatmap-scroll-area">
            {/* Dynamic Month Labels */}
            <div className="heatmap-months-header">
              {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, idx) => (
                <span key={idx} className="heatmap-month-label">{m}</span>
              ))}
            </div>

            {/* Matrix of days */}
            <div className="heatmap-matrix">
              {heatmapGrid.grid.map((week, wIdx) => (
                <div key={wIdx} className="heatmap-column">
                  {week.map((cell, dIdx) => (
                    <div
                      key={dIdx}
                      className={`heatmap-cell level-${cell.level || (cell.count > 0 ? Math.min(Math.ceil(cell.count / 2), 4) : 0)}`}
                      onMouseEnter={() => setHoveredCell(cell)}
                      onMouseLeave={() => setHoveredCell(null)}
                      title={`${cell.count || 0} contributions on ${cell.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Heatmap Footer Legend */}
        <div className="heatmap-footer">
          <span className="contributions-count">
            {hoveredCell 
              ? `${hoveredCell.count || 0} contributions on ${hoveredCell.date}` 
              : `${heatmapGrid?.totalCount ?? 0} contributions in the last year`}
          </span>

          <div className="heatmap-legend">
            <span>Less</span>
            <span className="heatmap-cell level-0 mini"></span>
            <span className="heatmap-cell level-1 mini"></span>
            <span className="heatmap-cell level-2 mini"></span>
            <span className="heatmap-cell level-3 mini"></span>
            <span className="heatmap-cell level-4 mini"></span>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
