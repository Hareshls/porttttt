import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Field Guard – Offline Facial Recognition',
    date: 'June 2026',
    tech: ['React Native', 'TensorFlow Lite', 'SQLite', 'AWS Lambda'],
    description: 'Architected an offline-first biometric attendance verification system for remote NHAI highway workers. Built a two-stage face recognition pipeline with liveness detection and geofencing.',
    github: '#', // Add your GitHub link here
  },
  {
    title: 'Machine Learning for Diabetes Detection',
    date: 'Mar – Apr 2026',
    tech: ['Python', 'Google Colab', 'Streamlit', 'Random Forest', 'XGBoost'],
    description: 'Built an end-to-end diabetes prediction system using five ML models trained on 100,000 patient records. Applied SMOTE for class balancing and SHAP for clinical explainability.',
    github: '#', // Add your GitHub link here
  },
  {
    title: 'Rainfall Pattern & Climate Analysis',
    date: 'Apr – June 2026',
    tech: ['Python', 'Pandas', 'Streamlit', 'Matplotlib'],
    description: 'Analyzed 115 years of rainfall data across 36 Indian states. Built a 16-crop recommendation system using CV risk classification and deployed an interactive dashboard.',
    github: '#', // Add your GitHub link here
  },

  {
    title: 'MedGuide – AI Medical Report Analyzer',
    date: 'Jan – Feb 2026',
    tech: ['MERN Stack', 'OCR', 'Prompt Engineering'],
    description: 'Built an OCR pipeline converting unstructured medical reports into structured data. Engineered prompt-based JSON extraction to detect anomalies.',
    github: '#', // Add your GitHub link here
  }
];

const StackedProjectCard = ({ project, index }) => {
  return (
    <div 
      className="sticky w-full"
      style={{ top: `calc(15vh + ${index * 40}px)` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#0a0515] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-[0_-20px_50px_rgba(0,0,0,0.6)] flex flex-col relative overflow-hidden group transition-all duration-500 hover:border-brand/40"
      >
        {/* Giant Number Background */}
        <div className="absolute -top-10 -right-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-brand/[0.05] transition-colors duration-700 select-none">
          0{index + 1}
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side: Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-brand font-mono border border-brand/30 bg-brand/10 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-[inset_0_0_10px_rgba(147,51,234,0.2)]">
                  {project.date}
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-light transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map(t => (
                <span key={t} className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-brand/20 hover:text-white transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-auto">
              {/* GitHub Button */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-dark px-8 py-4 rounded-full font-bold hover:bg-brand hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]"
              >
                <FaGithub size={24} />
                <span>GitHub Repo</span>
              </a>
              
              {/* Example Secondary Action (Can be removed if no live demo exists) */}
              <a href="#" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-light transition-colors font-semibold">
                <span>Details</span>
                <FaExternalLinkAlt size={16} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 w-full h-[500px] bg-brand/5 blur-[150px] -translate-x-1/2 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            A showcase of systems and applications I've built, focusing on real-world impact and complex problem-solving.
          </p>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="relative flex flex-col gap-10 pb-32">
          {projects.map((project, index) => (
            <StackedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
