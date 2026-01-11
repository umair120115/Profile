import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaCode, FaRobot, FaMobileAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/Projects.css';

// --- ASSETS (Keep your imports) ---
import OnlineVoting2 from '../assets/voting2.png';
import pdf1 from '../assets/pff1.png';
// Import other assets as needed...

// --- PROJECT DATA ---
const projectsData = [
  {
    id: 1,
    title: "Autonomous Agentic Data System",
    category: "AI & Agents",
    icon: <FaRobot />,
    tech: ["LangGraph", "LangChain", "Gemini LLM", "Python", "JSON/CSV Writers"],
    description: "An end-to-end agentic AI system that autonomously plans, executes, and validates synthetic data generation tasks.",
    features: [
      "Autonomous reasoning & planning (Intent -> Plan -> Tool Selection)",
      "Self-correction loop (Generator -> Critic -> Retry)",
      "Multi-format output generation (JSON, CSV, PDF, TXT)",
      "Schema inference from arbitrary input files",
      "Full observability with reasoning logs"
    ],
    github: "https://github.com/umair120115/Agent---Data-Simulator", // UPDATE THIS LINK
    videoUrl: "https://www.youtube.com/embed/ol_GwpXmkIA", // UNCOMMENT & ADD ID
    image: null ,// Set to null if using video, or add a diagram image,
    youtubeUrl:"https://www.youtube.com/watch?v=ol_GwpXmkIA"
  },
  {
    id: 2,
    title: "Adora Mobile Ecosystem",
    category: "Mobile App",
    icon: <FaMobileAlt />,
    tech: ["React Native", "Expo", "Django", "AWS S3", "Firebase"],
    description: "A full-stack social platform featuring real-time feeds, media sharing, and secure authentication.",
    features: [
      "Real-time social feeds & interactions",
      "Google OAuth integration for seamless onboarding",
      "AWS S3 for scalable media storage",
      "Firebase Cloud Messaging (FCM) for push notifications"
    ],
    github: "https://github.com/umair120115/Adora", // UPDATE THIS LINK
    videoUrl: "https://www.youtube.com/embed/KTwa1HyzDRg",
    image: null,
    youtubeUrl:"https://www.youtube.com/watch?v=KTwa1HyzDRg"
  },
  {
    id: 3,
    title: "Online Voting System",
    category: "Web App",
    icon: <FaCode />,
    tech: ["Django", "ReactJS", "LangChain", "Llama 3", "Groq Cloud"],
    description: "A secure, interactive voting platform with an integrated AI chatbot for voter education.",
    features: [
      "Secure RESTful API backend with Django REST Framework",
      "AI Chatbot powered by Llama 3 & Groq for democracy education",
      "JWT Authentication & Role-based access control",
      "Real-time voting results visualization"
    ],
    github: "https://www.github.com/umair120115/OnlineVoting",
    image: OnlineVoting2
  },
  {
    id: 4,
    title: "Online PDF Viewer & Note Taker",
    category: "EdTech",
    icon: <FaCode />,
    tech: ["ReactJS", "Django DRF", "OpenAI API", "PDF.js"],
    description: "A smart document reader allowing users to upload PDFs, take time-stamped notes, and query content using AI.",
    features: [
      "AI-powered document querying (RAG-lite)",
      "Context-aware note taking linked to specific PDF pages",
      "Cloud storage for user documents",
      "Responsive React frontend"
    ],
    github: "https://www.github.com/umair120115/Reader",
    image: pdf1
  },
  {
    id: 5,
    title: "Deen Social Media",
    category: "Real-time System",
    icon: <FaCode />,
    tech: ["Django Channels", "Redis", "ReactJS", "WebSockets"],
    description: "A real-time social networking platform focused on community connection and instant messaging.",
    features: [
      "Instant messaging using WebSockets & Redis",
      "Dynamic feeds with Like/Comment functionality",
      "User relationship management (Follow/Unfollow)",
      "ASGI asynchronous backend architecture"
    ],
    github: "https://www.github.com/umair120115/Deen",
    image: null
  }
];

// --- COMPONENTS ---

const VideoEmbed = ({ url }) => (
  <div className="video-container">
    <iframe 
      src={url} 
      title="Project Demo" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  </div>
);

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card-glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header">
        <div className="icon-box">{project.icon}</div>
        <div className="header-text">
          <span className="category-tag">{project.category}</span>
          <h3>{project.title}</h3>
        </div>
      </div>

      <div className="card-content">
        <div className="media-section">
          {project.videoUrl ? (
            <VideoEmbed url={project.videoUrl} />
          ) : (
             project.image ? (
              <img src={project.image} alt={project.title} className="project-img" />
             ) : (
              <div className="placeholder-media">
                <span>🎥 Video Coming Soon</span>
              </div>
             )
          )}
        </div>

        <div className="info-section">
          <p className="description">{project.description}</p>
          
          <div className="tech-stack">
            {project.tech.map((t, index) => (
              <span key={index} className="tech-badge">{t}</span>
            ))}
          </div>

          <ul className="features-list">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <div className="card-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
              <FaGithub /> Source Code
            </a>
            {project.videoUrl && (
               <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
               <FaYoutube /> Watch Demo
             </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  return (
    <div className="projects-wrapper">
      <Navbar />
      
      <header className="projects-hero">
        <h1 className="gradient-title">Engineering Showcase</h1>
        <p className="subtitle">
          From <strong>Autonomous Agents</strong> to <strong>Scalable Social Platforms</strong>.
          <br /> Explore my latest R&D and production-grade applications.
        </p>
      </header>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Projects;