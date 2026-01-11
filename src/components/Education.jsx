import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaGithub, FaYoutube, FaAward, FaLaptopCode, FaCertificate } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/Education.css';

// --- ASSETS ---
// Ensure these paths match your folder structure
import AKGEC from "../assets/akgec.jpeg"; 
import Montfort from "../assets/montfort.png";
import School from "../assets/school.jpeg"; 
// You might want to find a logo for Integral University or use a generic icon
// import Integral from "../assets/integral.png"; 

const educationData = [
  {
    id: 1,
    type: "Post-Graduation",
    institution: "Integral University, Lucknow",
    degree: "M.Tech in Computer Science & Engineering",
    year: "2025 - Present", // Assuming current enrollment based on context
    description: "Specializing in Soft Computing, Advanced Algorithms, and Neural Networks.",
    logo: null, // Fallback to icon
    icon: <FaUniversity />,
    details: [
      "Focus: Cognitive Architectures & AI Systems",
      "Research: Autonomous Agents & Large Language Models"
    ]
  },
  {
    id: 2,
    type: "Under-Graduation",
    institution: "Ajay Kumar Garg Engineering College, Ghaziabad",
    degree: "B.Tech in Computer Science & Engineering",
    year: "2021 - 2025",
    grade: "Aggregate: 7.01 SGPA",
    logo: AKGEC,
    description: "Built a strong foundation in Data Structures, DBMS, and Operating Systems.",
    capstone: {
      title: "Ayurveda GenAI Prototype",
      desc: "A Generative AI solution for Ayurvedic knowledge retrieval.",
      achievement: "🏆 Regional Finalist: Google GenAI Hackathon (Aug 2024)",
      github: "https://github.com/umair120115/Ayurveda",
      video: "https://youtu.be/OwgrC97DOrs"
    }
  },
  {
    id: 3,
    type: "Intermediate",
    institution: "Montfort Inter College, Lucknow",
    degree: "Class XII (PCM - CBSE)",
    year: "2020",
    grade: "93.4%",
    logo: Montfort,
    description: "Excited about Physics and Mathematics."
  },
  {
    id: 4,
    type: "High School",
    institution: "St. Xavier's High School, Azamgarh",
    degree: "Class X (CBSE)",
    year: "2018",
    grade: "85.8%",
    logo: School,
    description: "Foundation in Science and Mathematics."
  }
];

const certifications = [
  "Data Science with Python - SpringBoard",
  "Certificate in Full Stack Development - Coursera",
  "Machine Learning Specialization - Coursera",
  "React.js Advanced Course - Codecademy",
  "Python for Data Science - Udemy"
];

function Education() {
  return (
    <div className="education-wrapper">
      <Navbar />

      <div className="education-container">
        
        {/* --- ABOUT ME SECTION --- */}
        <motion.section 
          className="about-section glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <FaLaptopCode className="header-icon" />
            <h2 className="gradient-text">About Me</h2>
          </div>
          <div className="about-content">
            <p className="intro-text">
              I am a <strong>Full Stack AI Engineer</strong> driven by the convergence of 
              <em> scalable software architecture</em> and <em>autonomous cognitive systems</em>. 
              My passion lies in building applications that don't just process data, but 
              <strong> reason, plan, and execute</strong> complex tasks.
            </p>
            <div className="about-grid">
              <div className="about-item">
                <h3>🚀 The Engineer</h3>
                <p>
                  I specialize in crafting robust backends with <strong>Django & FastAPI</strong> 
                  and immersive frontends with <strong>React Native</strong>. I believe in 
                  clean code, modular design (Domain-Driven Design), and "building for scale" 
                  from Day 1.
                </p>
              </div>
              <div className="about-item">
                <h3>🧠 The Researcher</h3>
                <p>
                  Currently pursuing an <strong>M.Tech in Computer Science & Engineering</strong>, I am deeply 
                  invested in the future of <strong>Agentic AI</strong>. My work involves orchestrating 
                  LLMs (LangChain/Graph), optimizing RAG pipelines, and reducing hallucination 
                  in production AI.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- TIMELINE SECTION --- */}
        <h2 className="section-title"><FaGraduationCap /> Academic Journey</h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              className="timeline-item" 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-card">
                <div className="edu-header">
                  {item.logo ? (
                    <img src={item.logo} alt={item.institution} className="edu-logo" />
                  ) : (
                    <div className="edu-icon-placeholder">{item.icon}</div>
                  )}
                  <div className="edu-title-block">
                    <span className="edu-type">{item.type}</span>
                    <h3>{item.institution}</h3>
                    <h4>{item.degree}</h4>
                    <span className="edu-year">{item.year} {item.grade && `• ${item.grade}`}</span>
                  </div>
                </div>

                <p className="edu-desc">{item.description}</p>
                
                {item.details && (
                  <ul className="edu-details-list">
                    {item.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                )}

                {/* CAPSTONE PROJECT HIGHLIGHT */}
                {item.capstone && (
                  <div className="capstone-box">
                    <div className="capstone-header">
                      <FaAward className="award-icon" />
                      <strong>Capstone Project: {item.capstone.title}</strong>
                    </div>
                    <p>{item.capstone.desc}</p>
                    <p className="achievement-highlight">{item.capstone.achievement}</p>
                    <div className="capstone-links">
                      <a href={item.capstone.github} target="_blank" rel="noreferrer" className="link-btn">
                        <FaGithub /> Code
                      </a>
                      <a href={item.capstone.video} target="_blank" rel="noreferrer" className="link-btn youtube">
                        <FaYoutube /> Demo
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CERTIFICATIONS SECTION --- */}
        <section className="cert-section">
          <h2 className="section-title"><FaCertificate /> Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <motion.div 
                className="cert-card glass-card"
                key={idx}
                whileHover={{ scale: 1.05 }}
              >
                <div className="cert-icon"><FaAward /></div>
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default Education;