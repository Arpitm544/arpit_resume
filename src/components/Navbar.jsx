import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme, handle }) => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        <a href="#" className="navbar-logo">
          {handle}
        </a>

        <div className="navbar-right">
          <a href="#opensource" className="nav-link">open source</a>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#education" className="nav-link">education</a>
          <a href="#contact" className="nav-link">contact</a>

          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={18} className="theme-icon moon" />
            ) : (
              <Sun size={18} className="theme-icon sun" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
