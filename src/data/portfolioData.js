export const portfolioData = {
  personalInfo: {
    name: "Arpit",
    fullName: "Arpit Maurya",
    handle: "arpitmaurya",
    badgeCode: "#24CS",
    location: "India",
    email: "arpitmaurya840@gmail.com",
    phone: "+91 9415829278",
    headline: "Hi , I am Arpit",
    subheadline: "A Full Stack Developer & CS Undergrad at Polaris School of Technology .",
    summary: [
      "I build modern web applications and backend services using ",
      { text: "Golang", bold: true },
      ", ",
      { text: "TypeScript", bold: true },
      ", ",
      { text: "React", bold: true },
      ", ",
      { text: "Node.js", bold: true },
      ", ",
      { text: "Express.js", bold: true },
      ", ",
      { text: "PostgreSQL", bold: true },
      ", and ",
      { text: "MongoDB", bold: true },
      " ."
    ],
    focus: {
      part1: "My focus is on ",
      highlight1: "crafting clean",
      part2: " , thoughtful frontends and designing backend systems that are , ",
      highlight2: "scalable",
      part3: " reliable, and easy to maintain."
    },
    status: "Open to work , freelance and collaborations !",
    motto: "Always learning , Always Shipping !",
    githubUsername: "arpitm544",
    links: {
      resume: "#",
      contact: "#contact",
      email: "arpitmaurya840@gmail.com",
      phone: "tel:+919415829278",
      github: "https://github.com/arpitm544",
      linkedin: "https://www.linkedin.com/in/arpit-maurya-741996313/?isSelfProfile=true"
    }
  },

  technologies: [
    { name: "Golang", icon: "golang", color: "#00ADD8" },
    { name: "TypeScript", icon: "ts", color: "#3178C6" },
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { name: "Java", icon: "java", color: "#ED8B00" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Node.js", icon: "node", color: "#339933" },
    { name: "Express.js", icon: "express", color: "#000000" },
    { name: "Gin / GORM", icon: "gin", color: "#00ADD8" },
    { name: "PostgreSQL", icon: "postgres", color: "#4169E1" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "AWS", icon: "aws", color: "#FF9900" },
    { name: "Firebase", icon: "firebase", color: "#FFCA28" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "GitHub", icon: "github", color: "#24292E" },
    { name: "Postman", icon: "postman", color: "#FF6C37" }
  ],

  openSource: [
    {
      id: "mcp-use",
      repo: "mcp-use(manufact)",
      stack: "TypeScript, React, Node.js",
      period: "2025 — Present",
      description: "Active contributor to mcp-use ecosystem enhancing developer tooling and Model Context Protocol client UI.",
      contributions: [
        {
          text: "Added OpenRouter as a first-class LLM provider, expanding model integration options for developers",
          pr: "PR #1403"
        },
        {
          text: "Resolved duplicate TypeScript exports, improving package reliability and maintainability",
          pr: "PR #1453"
        },
        {
          text: "Implemented dark-mode aware scrollbars and improved tab badge visibility in the MCP Inspector UI",
          pr: "PR #1484, PR #1490"
        },
        {
          text: "Migrated the greeting-card example to a React widget, enabling dynamic prop-based rendering and improving usability",
          pr: "PR #1659"
        },
        {
          text: "Improved screenshot handling by centralizing the logic and adding REPL screenshot support",
          pr: "PR #1592"
        },
        {
          text: "Added proper cleanup when exiting the CLI with Ctrl+C (SIGINT)",
          pr: "PR #1687"
        }
      ]
    }
  ],

  projects: [
    {
      id: "codepilot",
      title: "CodePilot — AI Code Review System",
      techBadge: "React, Node.js, Express.js, LLM API",
      links: [
        { label: "GitHub", url: "https://github.com/Arpitm544/Ai-code-.git" },
        { label: "Live Demo", url: "https://github.com" }
      ],
      points: [
        "Built 8+ REST APIs for a code review system where users submit code and get AI feedback.",
        "Added JWT login so only the right users can access their own routes and data.",
        "Used MVC structure and one central error handler to keep the code clean and easy to manage.",
        "Made sure all API responses follow the same format so frontend can plug in without issues.",
        "Integrated AI APIs to analyze submitted code and return review suggestions."
      ],
      tags: ["React", "Node.js", "Express.js", "LLM API", "JWT", "MVC"]
    },
    {
      id: "tasknest",
      title: "TaskNest — Task Management Platform",
      techBadge: "React, Node.js, Golang, PostgreSQL, AWS",
      links: [
        { label: "GitHub", url: "https://github.com/Arpitm544/TaskNest.git" },
        { label: "Live Demo", url: "https://www.web.tasknest.com/" }
      ],
      points: [
        "Designed PostgreSQL tables for users, tasks and teams to handle assignments and team collaboration.",
        "Built and debugged REST APIs in Go using Gin for routing and GORM for database queries.",
        "Used JWT auth, request validation and one central error handler to keep things secure and consistent.",
        "Set up AWS S3 so users can upload and share files directly on the platform.",
        "Added role-based access control so different users only see and do what they're allowed to.",
        "Built an AI feature that splits big assignments into smaller tasks and milestones."
      ],
      tags: ["Golang", "Gin", "GORM", "PostgreSQL", "AWS S3", "React"]
    },
    {
      id: "chatui",
      title: "ChatUI — Real-Time Chat Application",
      techBadge: "React, Node.js, MongoDB",
      links: [
        { label: "GitHub", url: "https://github.com/Arpitm544/ChatUI.git" },
        { label: "Live Demo", url: "https://chatclone-xi.vercel.app/" }
      ],
      points: [
        "Built real-time chat using Socket.io with React frontend and Node.js backend.",
        "Stored messages in MongoDB with data models that support multiple users and chat history.",
        "Added JWT auth to handle sessions and keep messaging secure.",
        "Managed chat state on the frontend so messages update instantly without page reload.",
        "Handled loading states and errors on the UI so the app doesn't break on bad responses."
      ],
      tags: ["Socket.io", "React", "Node.js", "MongoDB", "Real-Time"]
    }
  ],

  education: [
    {
      institution: "Polaris School of Technology",
      degree: "B.Tech in Computer Science",
      period: "2024 — 2028"
    },
    {
      institution: "Senior Secondary (12th)",
      degree: "High School Certification",
      period: "2024"
    },
    {
      institution: "Secondary (10th)",
      degree: "Secondary School Certification",
      period: "2022"
    }
  ],

  blogs: [
    {
      id: "status",
      message: "in progress , to be added soon !"
    }
  ]
};
