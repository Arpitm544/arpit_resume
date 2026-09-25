import React from 'react';

export const Footer = ({ handle }) => {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        © Designed and Developed by {handle}
      </p>
    </footer>
  );
};
