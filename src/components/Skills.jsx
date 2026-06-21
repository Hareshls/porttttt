import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiC, SiMysql, SiSqlite, SiMongodb, SiExpress, SiPostman, SiVercel, SiNetlify, SiRender, SiCanva 
} from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'React Native', icon: FaReact, color: '#61DAFB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'SQLite', icon: SiSqlite, color: '#003B5C' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-dark">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-dark/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand drop-shadow-lg">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The technologies and tools I use to build robust, scalable, and beautifully designed applications.
          </p>
        </motion.div>

        {/* Orbit Layout (Desktop) */}
        <div className="hidden md:flex justify-center items-center relative h-[700px] lg:h-[900px] xl:h-[1000px] group/orbit">
          
          {/* Central Glowing Orb */}
          <div className="absolute w-40 h-40 lg:w-56 lg:h-56 rounded-full flex items-center justify-center z-20">
            {/* Outer pulse */}
            <div className="absolute inset-0 rounded-full bg-brand/20 blur-[30px] animate-pulse" />
            <div className="absolute inset-[-20px] rounded-full border border-brand/30 animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
            {/* Inner Glass Sphere */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-dark-card via-dark to-[#1a1a1a] border-2 border-brand/50 shadow-[inset_0_0_30px_rgba(147,51,234,0.2),0_0_50px_rgba(147,51,234,0.6)] flex items-center justify-center overflow-hidden">
              <div className="absolute top-[-20%] left-[-20%] w-24 h-24 bg-white/10 rounded-full blur-[15px]" />
              <span className="font-outfit font-black tracking-widest text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-md">
                TECH
              </span>
            </div>
          </div>

          {/* Inner Orbit Ring */}
          <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full border border-brand/10 shadow-[inset_0_0_50px_rgba(147,51,234,0.05)] animate-spin-slow pointer-events-none">
            {skills.slice(0, 6).map((skill, index) => {
              const angle = (index / 6) * 360;
              return (
                <div 
                  key={skill.name}
                  className="absolute left-0 top-0 w-full h-full"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div 
                    className="absolute top-0 left-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer transition-all group/skill pointer-events-auto"
                    style={{ transform: `translate(-50%, -50%) rotate(-${angle}deg)` }}
                  >
                    <div className="w-full h-full flex items-center justify-center animate-spin-slow-reverse">
                      {/* Glassmorphic Node Background */}
                      <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:bg-white/10" />
                      
                      <skill.icon 
                        size={32} 
                        className="relative z-10 transition-transform duration-300 group-hover/skill:scale-125" 
                        style={{ color: skill.color }}
                      />
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-10 opacity-0 group-hover/skill:opacity-100 group-hover/skill:-translate-y-2 transition-all duration-300 whitespace-nowrap text-sm font-bold bg-dark-card border border-brand/30 px-3 py-1 rounded-full shadow-xl pointer-events-none text-white z-50">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outer Orbit Ring */}
          <div className="absolute w-[650px] h-[650px] lg:w-[850px] lg:h-[850px] xl:w-[1000px] xl:h-[1000px] rounded-full border border-brand/10 shadow-[0_0_50px_rgba(147,51,234,0.02)] animate-spin-slower-reverse pointer-events-none">
            {skills.slice(6, 15).map((skill, index) => {
              const angle = (index / 9) * 360;
              return (
                <div 
                  key={skill.name}
                  className="absolute left-0 top-0 w-full h-full"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div 
                    className="absolute top-0 left-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer transition-all group/skill pointer-events-auto"
                    style={{ transform: `translate(-50%, -50%) rotate(-${angle}deg)` }}
                  >
                    <div className="w-full h-full flex items-center justify-center animate-spin-slower">
                      {/* Glassmorphic Node Background */}
                      <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:bg-white/10" />
                      
                      <skill.icon 
                        size={32} 
                        className="relative z-10 transition-transform duration-300 group-hover/skill:scale-125" 
                        style={{ color: skill.color }}
                      />
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-10 opacity-0 group-hover/skill:opacity-100 group-hover/skill:-translate-y-2 transition-all duration-300 whitespace-nowrap text-sm font-bold bg-dark-card border border-brand/30 px-3 py-1 rounded-full shadow-xl pointer-events-none text-white z-50">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grid Layout (Mobile) */}
        <div className="md:hidden grid grid-cols-3 sm:grid-cols-4 gap-6 relative z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <skill.icon size={28} className="transition-transform duration-300 group-hover:scale-125" style={{ color: skill.color }} />
              </div>
              <span className="text-xs font-semibold text-center text-gray-400 group-hover:text-brand-light transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
