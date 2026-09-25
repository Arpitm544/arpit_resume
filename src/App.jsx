import React, { useState, useEffect } from 'react';
import { portfolioData as initialData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OpenSource } from './components/OpenSource';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeSyncModal } from './components/ResumeSyncModal';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme_preference') || 'light';
  });

  const [data, setData] = useState(() => {
    // Clear previously stored showcase dummy data so fresh resume data renders
    localStorage.removeItem('portfolio_custom_data');
    return initialData;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme_preference', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleDataUpdate = (newData) => {
    setData(newData);
    localStorage.setItem('portfolio_custom_data', JSON.stringify(newData));
  };

  return (
    <div className="app-container">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        handle={data.personalInfo.handle} 
      />

      <main>
        <Hero personalInfo={data.personalInfo} />

        <OpenSource openSource={data.openSource} />
        
        <TechStack 
          technologies={data.technologies} 
          githubUsername={data.personalInfo.githubUsername || data.personalInfo.handle || 'arpitmaurya'} 
          onUpdateUsername={(newUsername) => {
            handleDataUpdate({
              ...data,
              personalInfo: {
                ...data.personalInfo,
                githubUsername: newUsername
              }
            });
          }}
        />
        
        <Projects projects={data.projects} />
        
        <Education education={data.education} />
        
        <Contact />
      </main>

      <Footer handle={data.personalInfo.handle} />

      {/* Floating Customizer Drawer */}
      <ResumeSyncModal 
        portfolioData={data} 
        setPortfolioData={handleDataUpdate} 
      />
    </div>
  );
}

export default App;
