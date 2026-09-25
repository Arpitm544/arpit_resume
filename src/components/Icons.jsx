import React from 'react';

export const TechIcon = ({ name, size = 18 }) => {
  switch (name.toLowerCase()) {
    case 'golang':
    case 'go':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#00ADD8">
          <path d="M1.98 12.3c0-.6.1-1.1.3-1.6l2.1.8c-.1.3-.2.6-.2.8 0 1.5 1.1 2.7 2.6 2.7 1.2 0 2.2-.8 2.5-1.9H6.9v-2.3h5.2c.1.4.1.8.1 1.2 0 3-2.3 5.3-5.4 5.3-2.9 0-5.3-2.2-5.3-5zM17.4 6.9c2.9 0 5.2 2.3 5.2 5.3s-2.3 5.3-5.2 5.3-5.2-2.3-5.2-5.3 2.3-5.3 5.2-5.3zm0 8.3c1.6 0 2.9-1.3 2.9-3s-1.3-3-2.9-3-2.9 1.3-2.9 3 1.3 3 2.9 3z" />
        </svg>
      );
    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#ED8B00">
          <path d="M8.85 16.82s-.98.08-.66.63c.8 1.4 3.75.98 3.75.98s1.25.1 2.37-.62c0 0-.67.43-1.84.48-1.57.07-3.05-.33-3.62-1.47M7.94 13.75s-1.42.33-1.02.9c.98 1.4 4.88 1.3 6.95.42 0 0-1.8.63-4.1.42-2-.18-2.65-.95-1.83-1.74m6.58-3.06c.7 1.4-1.17 2.62-1.17 2.62s2.6-.9 1.83-2.5c-.75-1.55-2.6-2.58-1.75-4.52 0 0-2.8 1.6-.74 3.65.68.7.9 1.05.7 1.75M9.4 19.34s-2.3.43-1.28 1.08c1.6 1.02 7.7.8 9.94-.92 0 0-.95.53-2.9.62-2.83.13-5.04-.3-5.76-.78" />
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M6 17.5c.8.8 2 1.3 3.3 1.3 2.1 0 3.5-1.1 3.5-3.2v-7.2h-2.3v7.1c0 1-.6 1.5-1.4 1.5-.7 0-1.2-.3-1.6-.7l-1.5 1.2zm8.5.2c1.2.7 2.6 1.1 4 1.1 2.5 0 3.9-1.2 3.9-3.2 0-1.8-1.2-2.7-2.9-3.4l-.8-.3c-1.1-.5-1.6-.9-1.6-1.6 0-.7.6-1.3 1.6-1.3.9 0 1.7.3 2.3.8l1.3-1.6c-.9-.7-2.1-1-3.4-1-2.4 0-3.8 1.4-3.8 3.2 0 1.8 1.2 2.7 3 3.4l.7.3c1.2.5 1.7 1 1.7 1.8 0 .9-.8 1.4-1.8 1.4-1.2 0-2.2-.4-3-1.1l-1.3 1.5z" fill="#000000" />
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M4 8h8v2.3H9.4V19H6.6v-8.7H4V8zm9.5 7.1c.8.5 1.8.8 2.7.8 1.1 0 1.7-.5 1.7-1.1 0-.7-.6-1-1.8-1.5l-.8-.3c-1.6-.7-2.6-1.5-2.6-3 0-2 1.6-3.2 3.8-3.2 1.3 0 2.4.4 3.3.9l-.8 2.1c-.7-.4-1.6-.7-2.4-.7-1 0-1.5.4-1.5 1 0 .6.5.9 1.6 1.3l.8.3c1.8.7 2.8 1.6 2.8 3.2 0 2.1-1.7 3.3-4.1 3.3-1.6 0-2.9-.4-3.9-1l1.1-2.3z" fill="#FFFFFF" />
        </svg>
      );
    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );
    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.4v7.2L12 19.8l7.2-4.2V8.4L12 4.3z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'express':
    case 'express.js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.5 17.5l4-11h2.5l-4 11h-2.5zm7 0l2.5-7 2.5 7h2.5l-3.5-9.5 2-1.5h-3l-2.5 7-2-7h-2.5l3.5 11h3z" />
        </svg>
      );
    case 'postgres':
    case 'postgresql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4169E1" strokeWidth="2">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.6 1.9 6.8 4.8 8.5V17c0-2.8 2.2-5 5-5s5 2.2 5 5v3.5c2.9-1.7 4.8-4.9 4.8-8.5 0-5.5-4.5-10-9.8-10z" />
          <circle cx="9" cy="9" r="1.5" fill="#4169E1" />
          <circle cx="15" cy="9" r="1.5" fill="#4169E1" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 2C11.5 4 8 8.5 8 13.5c0 3.5 2 6.5 4 8.5 2-2 4-5 4-8.5 0-5-3.5-9.5-4-11.5z" />
          <path d="M12 4v16" stroke="#FFFFFF" strokeWidth="1.2" />
        </svg>
      );
    case 'aws':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF9900">
          <path d="M12 4.5a18.2 18.2 0 0 0-8.8 2.3l.8 1.7A16.3 16.3 0 0 1 12 6.5c3.2 0 6.2.9 8.8 2.5l.8-1.7A18.2 18.2 0 0 0 12 4.5zM4 17.5c4.5 3 11.5 3 16 0l-.8-1.5c-3.8 2.5-10.6 2.5-14.4 0l-.8 1.5z" />
        </svg>
      );
    case 'firebase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFCA28">
          <path d="M4.5 18.5l2-13.5 3.5 6.5-5.5 7zm15 0L14 3.5l-3 5.5 8.5 9.5zM12 21.5l7.5-3-7.5-4.5-7.5 4.5 7.5 3z" />
        </svg>
      );
    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
          <rect x="2" y="10" width="3" height="3" rx="0.5" />
          <rect x="6" y="10" width="3" height="3" rx="0.5" />
          <rect x="10" y="10" width="3" height="3" rx="0.5" />
          <rect x="6" y="6" width="3" height="3" rx="0.5" />
          <rect x="10" y="6" width="3" height="3" rx="0.5" />
          <rect x="14" y="6" width="3" height="3" rx="0.5" />
          <path d="M22 13c-.5-1.5-2-2-3-2-.5 0-1 .2-1.5.5C16.5 8 13.5 8 13.5 8S10 8 9 10H2c0 4 3 8 10 8 7 0 9.5-3.5 10-5z" />
        </svg>
      );
    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.8l-8.4-8.4a2.4 2.4 0 0 0-3.4 0L7.4 4.8l3.1 3.1a2.4 2.4 0 0 1 3.1 3.1l2.9 2.9a2.4 2.4 0 1 1-1.7 1.7l-2.7-2.7v4.6a2.4 2.4 0 1 1-2.4-2.4V10a2.4 2.4 0 0 1-1.2-3.1L5.3 4.2 2.4 7.1a2.4 2.4 0 0 0 0 3.4l8.4 8.4a2.4 2.4 0 0 0 3.4 0l7.4-7.4a2.4 2.4 0 0 0 0-3.7z" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'postman':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF6C37">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6l5 6-5 6-5-6 5-6z" fill="#FFFFFF" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
};
