import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaUsers, FaLightbulb, FaCrown, FaMicrophone, FaClipboardList, FaUserTie } from 'react-icons/fa';

const achievements = [
  { title: 'Smart India Hackathon', subtitle: 'Pre-finalist, 2025', desc: 'Competed at the national level, engineering innovative problem-solving solutions under extreme time pressure.', icon: FaTrophy },
  { title: 'Mini Hackathon', subtitle: 'Runner-up, 2025', desc: 'Secured the runner-up position at Kongu Engineering College, demonstrating rapid prototyping skills.', icon: FaMedal },
  { title: 'Techno Cultural Fest', subtitle: 'Finalist, 2025', desc: 'Reached the final stage by showcasing technical excellence and creative execution.', icon: FaStar },
  { title: 'World Robot Olympiad', subtitle: 'Zonal Winner, 2019', desc: 'Crowned Zonal Champion and selected as a National Participant for advanced robotics design.', icon: FaCrown },
];

const leadership = [
  { title: 'Head Girl', subtitle: 'School Student Council', desc: 'Directed coordination across the entire student body and successfully managed major annual events.', icon: FaCrown },
  { title: 'Mock G20 Summit', subtitle: 'Co-Chair & Host, 2023', desc: 'Spearheaded event logistics and multi-team coordination on complex global diplomatic themes.', icon: FaMicrophone },
  { title: 'Editorial Team', subtitle: 'Department Newsletter', desc: 'Produced, edited, and structured content for internal publication and mass distribution.', icon: FaClipboardList },
  { title: 'Class Representative', subtitle: '2024 – 2025', desc: 'Acted as the primary liaison between students and the faculty administration, resolving conflicts.', icon: FaUserTie },
];

const softSkills = [
  'Effective Communication', 'Oratory & Public Speaking', 'Team Coordination', 
  'Event Management', 'Adaptability', 'Creative Thinking', 'Problem Solving', 'Leadership'
];

const ExpandingAccordion = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] gap-4">
      {items.map((item, i) => {
        const isActive = active === i;
        return (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] border ${
              isActive 
                ? 'flex-[5] md:flex-[7] shadow-[0_0_40px_rgba(147,51,234,0.3)] bg-gradient-to-br from-[#1a0b2e] to-dark border-brand/50' 
                : 'flex-[1] bg-dark-card border-white/5 hover:bg-white/10'
            }`}
          >
            {/* Massive background icon */}
            <div className={`absolute -right-10 -bottom-10 transition-all duration-1000 ${isActive ? 'text-[250px] opacity-10 text-brand' : 'text-[100px] opacity-[0.02] text-white'}`}>
              <item.icon />
            </div>

            {/* Glowing gradient overlay for active card */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

            {/* Icon Circle (Bottom Left) */}
            <div className={`absolute bottom-8 left-6 md:left-8 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 z-20 ${
              isActive ? 'bg-brand text-white shadow-[0_0_20px_rgba(147,51,234,0.6)] scale-110' : 'bg-white/5 text-gray-500 scale-100'
            }`}>
              <item.icon size={24} />
            </div>

            {/* Vertical Text when shrunk (Desktop Only) */}
            <div className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap origin-center rotate-90 text-gray-500 font-black tracking-widest uppercase text-sm hidden md:block transition-all duration-300 ${isActive ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
               {item.title}
            </div>

            {/* Full Content (Fades in) */}
            <div className={`absolute bottom-32 left-6 md:left-8 right-6 md:right-8 transition-all duration-500 z-20 flex flex-col justify-end ${
              isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
                <span className="text-brand-light font-bold tracking-widest uppercase text-sm">{item.subtitle}</span>
              </div>
              <h4 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                {item.title}
              </h4>
              <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed drop-shadow-md max-w-2xl">
                {item.desc}
              </p>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative bg-dark overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Recognition & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light drop-shadow-lg">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A track record of leadership, competitive excellence, and soft skills.
          </p>
        </motion.div>

        {/* Infinite Scrolling Soft Skills Marquee */}
        <div className="relative w-full overflow-hidden py-10 mb-24 border-y border-white/5 bg-gradient-to-r from-dark via-white/[0.02] to-dark">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-dark to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-6 w-max"
          >
            {/* Array is quadrupled to ensure seamless infinite looping */}
            {[...softSkills, ...softSkills, ...softSkills, ...softSkills].map((skill, i) => (
              <div 
                key={i} 
                className="px-8 py-4 bg-[#0a0515] border border-brand/20 rounded-full flex items-center gap-3 shadow-[0_0_15px_rgba(147,51,234,0.15)] hover:border-brand/60 transition-colors duration-300"
              >
                <FaLightbulb className="text-brand-light animate-pulse" />
                <span className="text-lg md:text-xl font-bold text-gray-200 tracking-wide whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Honors Accordion */}
        <div className="mb-24">
          <h3 className="text-4xl font-black text-white mb-10 flex items-center gap-4">
            <FaTrophy className="text-brand" /> Honors & Awards
          </h3>
          <ExpandingAccordion items={achievements} />
        </div>

        {/* Leadership Accordion */}
        <div>
          <h3 className="text-4xl font-black text-white mb-10 flex items-center gap-4">
            <FaUsers className="text-brand" /> Leadership Roles
          </h3>
          <ExpandingAccordion items={leadership} />
        </div>

      </div>
    </section>
  );
}
