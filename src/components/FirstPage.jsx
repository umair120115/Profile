import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaReact, FaAws } from "react-icons/fa";
import { SiDjango, SiFastapi, SiTensorflow, SiLangchain, SiPostgresql } from "react-icons/si";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfilePic from "../assets/umair.jpeg"; 
import '../styles/FirstPage.css';

function FirstPage() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      
      <div className="bento-container">
        <div className="bento-grid">
          
          {/* 1. HERO PROFILE */}
          <div className="bento-card hero-card">
            <div className="hero-content">
              <div className="image-wrapper">
                <img src={ProfilePic} alt="Umair" className="profile-img" />
                <div className="status-indicator">🟢 Available</div>
              </div>
              <div className="hero-text">
                <h1>Umair Ahmad</h1>
                <p>
                  <strong>Full Stack AI Engineer</strong> merging scalable systems with intelligent agents.
                  <br />
                  Currently Python Developer @ <strong>DealMart</strong>.
                </p>
                <div className="hero-actions">
                   <a href="mailto:ua16453@gmail.com" className="btn-primary">Let's Talk</a>
                   <a href="https://drive.google.com/file/d/1hKaEpG82Npf6gqAAsYxh9eIJIVpwbNMA/view?usp=sharing" className="btn-glass">Resume</a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CURRENT ROLE */}
          <div className="bento-card role-card">
            <div className="card-header">🚀 Current Focus</div>
            <div style={{marginTop: '15px'}}>
               <h2>DealMart</h2>
               <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>
                 Engineering high-concurrency backends & WhatsApp automation bots using Django & Meta API.
               </p>
            </div>
          </div>

          {/* 3. SOCIALS */}
          <div className="bento-card social-card">
            <a href="https://github.com/Umair120115" className="social-link"><FaGithub /></a>
            <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
            <a href="mailto:ua16453@gmail.com" className="social-link"><FaEnvelope /></a>
          </div>

          {/* 4. TECH STACK */}
          <div className="bento-card tech-card">
            <h3>Technical Arsenal</h3>
            <div className="tech-grid">
              <div className="tech-item"><FaPython /> Python</div>
              <div className="tech-item"><SiDjango /> Django</div>
              <div className="tech-item"><SiFastapi /> FastAPI</div>
              <div className="tech-item"><FaReact /> React Native</div>
              <div className="tech-item"><SiLangchain /> LangChain</div>
              <div className="tech-item"><FaAws /> AWS</div>
              <div className="tech-item"><SiPostgresql /> Postgres</div>
            </div>
          </div>

           {/* 5. EXPERIENCE / PROJECT */}
           <div className="bento-card experience-card">
              <h3>Previous: Duoples</h3>
              <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>Architected RAG pipelines & AI Agents.</p>
           </div>
           
           <div className="bento-card project-card">
              <h3>Featured: Adora App</h3>
              <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>Full-stack social platform with React Native & Django.</p>
           </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FirstPage;