import React from 'react';
import type { Skill, Project, ExperienceItem, EducationItem, CodingProfile } from './types.ts';
import p1 from './Photos/p1.jpg';
import p2 from './Photos/p2.webp';
import chemflux from './Photos/Chemflux.png';
import nexus from './Photos/nexus ss.png';

export const SKILLS: Skill[] = [
  { name: 'Java' },
  { name: 'C++' },
  { name: 'Python' },
  { name: 'SQL' },
  { name: 'React.js' },
  { name: 'Node.js' },
  { name: 'Bootstrap' },
  { name: 'MongoDB' },
  { name: 'Natural Language Processing' },
  { name: 'Large Language Models' },
  { name: 'PyTorch' },
  { name: 'Streamlit' },
  { name: 'Django' },
  { name: 'Express.js' },
  { name: 'TypeScript' },
  { name: 'Pandas' },
  { name: 'PyQt5' },
];

export const LANGUAGES: Skill[] = [
  { name: 'English' },
  { name: 'Japanese' },
  { name: 'Tamil' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Study Mate',
    description: 'An AI-driven PDF learning assistant designed to revolutionize how students interact with study materials.\n\nKey Features:\n• **Smart Extraction:** Extracts text while preserving layout and structure.\n• **Semantic Search:** Uses advanced embeddings to find the most relevant content.\n• **Contextual Q&A:** Ask questions about your PDF and get accurate, cited answers.\n• **Adaptive Quizzes:** Automatically generates quizzes to test your knowledge.\n• **Privacy First:** Your data stays private and is processed securely.\n\nBuilt with Python, PyTorch, and Streamlit, leveraging state-of-the-art NLP models.',
    imageUrl: p1,
    repoUrl: 'https://github.com/Nitish-Karthick/StudyMate.git',
    tags: ['Python', 'PyTorch', 'Streamlit', 'Prompt Engineering', 'NLP'],
  },
  {
    title: 'Portfolio Website',
    description: 'A sleek, modern, and high-performance portfolio website built to showcase my work and skills.\n\nTechnical Highlights:\n• **React 19 & TypeScript:** Utilizing the latest features for type safety and performance.\n• **Vite:** Blazing fast build times and hot module replacement.\n• **Custom Hooks:** Hand-crafted hooks for typewriter effects and scroll animations.\n• **Dark Mode:** Fully responsive light/dark theme switching with persistence.\n• **Responsive Design:** Optimized for all devices, from mobile to desktop.',
    imageUrl: p2,
    repoUrl: 'https://github.com/Nitish-Karthick/Portfolio',
    tags: ['React.js', 'TypeScript', 'CSS'],
  },
  {
    title: 'ChemFlux',
    description: `ChemFlux is a comprehensive digital platform designed to modernize the management of chemical laboratories. It addresses the challenges of manual inventory tracking and equipment management by providing a centralized system for real-time monitoring and data analysis.

    **Key Features:**
    - **Real-time Inventory Tracking:** Monitors chemical stock levels, expiration dates, and usage patterns to prevent shortages and waste.
    - **Equipment Management:** Tracks the status, maintenance schedules, and availability of laboratory equipment.
    - **Data Visualization:** Utilizes Chart.js to provide interactive graphs and charts for analyzing chemical usage and inventory trends.
    - **User Management:** Secure authentication and role-based access control using Django's built-in system.
    - **Automated Alerts:** Sends notifications for low stock levels and upcoming equipment maintenance.

    **Technical Highlights:**
    - **Backend:** Built with Django (Python), ensuring a robust and scalable server-side architecture.
    - **Frontend:** Developed using React.js for a dynamic and responsive user interface.
    - **Database:** Uses Pandas for efficient data manipulation and analysis within the backend.
    - **Desktop Integration:** Includes a PyQt5-based desktop application for offline access and specific laboratory controls.

    **Demo Credentials:**
    - **Username:** admin
    - **Password:** Chemflux@12345`,
    imageUrl: chemflux,
    repoUrl: 'https://github.com/Nitish-Karthick/ChemFlux',
    liveUrl: 'https://chemflux.netlify.app/',
    backendUrl: 'https://chemflux.onrender.com/api/ping/',
    tags: ['Django', 'React.js', 'PyQt5', 'Pandas', 'Chart.js'],
  },
  {
    title: 'Nexus',
    description: `Nexus is a next-generation social networking platform built to foster meaningful connections and community engagement. It combines the best features of modern social media with a focus on user privacy and content quality.

    **Core Features:**
    - **User Profiles:** Customizable profiles with bio, avatar, and activity feeds.
    - **Real-time Messaging:** Instant chat functionality powered by WebSockets for seamless communication.
    - **Content Sharing:** Support for rich media posts, including images, videos, and links.
    - **Community Groups:** Create and join groups based on shared interests and topics.
    - **Advanced Search:** Powerful search capabilities to find users, groups, and content.

    **Technical Stack:**
    - **Frontend:** React.js with TypeScript for type-safe and maintainable code.
    - **Backend:** Node.js and Express.js for a high-performance API.
    - **Database:** MongoDB for flexible and scalable data storage.
    - **Authentication:** JWT-based secure authentication flow.`,
    imageUrl: nexus,
    repoUrl: 'https://github.com/Nitish-Karthick/Nexus',
    liveUrl: 'https://nexuswarp.netlify.app/',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech. in Artificial Intelligence & Data Science',
    institution: 'Sri Eshwar College of Engineering, Coimbatore',
    period: '2024 - Present',
  },
  {
    degree: 'Class XII (HSC)',
    institution: 'Tamil Nadu State Board',
    period: '2024',
  },
  {
    degree: 'Class X (SSLC)',
    institution: 'Tamil Nadu State Board',
    period: '2022',
  }
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Nitish_Karthick/',
    details: [
      'Solved Around 50 problems',
      'Actively practicing problem-solving in Java',
    ],
  },
  {
    name: 'Skillrack',
    url: 'http://www.skillrack.com/profile/514491/75fafd36272d4e472acd36bd3bd2fd4a47c5dfd3',
    details: [
      'Solved Around 500 coding problems',
    ],
  },
];


export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.294 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.607 1.933 2.373 3.328 4.464 3.364-1.89 1.479-4.27 2.333-6.84 2.333-.442 0-.878-.026-1.306-.077 2.449 1.575 5.358 2.49 8.49 2.49 10.187 0 15.777-8.438 15.777-15.777 0-.24-.005-.478-.016-.715.973-.699 1.82-1.575 2.488-2.583z" /></svg>
);

export const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
);

export const ResumeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 3v18c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V3c0-1.105-.895-2-2-2H4C2.895 1 2 1.895 2 3zm4 2h8v2H6V5zm0 4h8v2H6V9zm0 4h5v2H6v-2z" /></svg>
);

export const UpArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6v6m-11 5L20 5" />
  </svg>
);

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
    <defs>
      <path id="hexagon" d="M14 2 L25 8 L25 20 L14 26 L3 20 L3 8 Z" />
      <filter id="glow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
      </filter>
    </defs>

    {/* Glowing hexagon layer (behind) */}
    <use
      href="#hexagon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      filter="url(#glow)"
      opacity="0.8"
    />

    {/* Sharp hexagon layer (behind) */}
    <use
      href="#hexagon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />

    {/* The new 'n' letter (in front) */}
    <path
      d="M9 22 V12 C9 8, 19 8, 19 12 V22"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
  </svg>
);


export const ServerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 003 3h13.5a3 3 0 003-3m-16.5-3a3 3 0 01-3-3m3 3a3 3 0 003 3h13.5a3 3 0 003-3m-16.5-3a3 3 0 01-3-3m3 3a3 3 0 003 3h13.5a3 3 0 003-3m-16.5-3a3 3 0 01-3-3" />
  </svg>
);

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nitish-karthick-v-446036328/', icon: LinkedInIcon },
  { name: 'GitHub', url: 'https://github.com/Nitish-Karthick', icon: GitHubIcon },
];
