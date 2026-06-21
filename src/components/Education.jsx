import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const milestones = [
  {
    id: 1,
    title: 'B.E. Computer Science',
    institution: 'Kongu Engineering College, Erode',
    duration: '2024 – 2028',
    score: '8.78',
    scoreLabel: 'CGPA',
    current: true,
    icon: <GraduationCap className="w-8 h-8 text-white" />
  },
  {
    id: 2,
    title: 'HSC',
    institution: 'VIVIDH International Residential School',
    duration: 'May 2023 – Apr 2024',
    score: '89.2%',
    scoreLabel: 'Percentage',
    current: false,
    icon: <Award className="w-6 h-6 text-brand" />
  },
  {
    id: 3,
    title: 'SSLC',
    institution: 'VIVIDH International Residential School',
    duration: 'May 2021 – Apr 2022',
    score: '93.2%',
    scoreLabel: 'Percentage',
    current: false,
    icon: <BookOpen className="w-6 h-6 text-brand" />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative bg-dark overflow-hidden">
      {/* Premium Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/10 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3 pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter mb-4">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-brand-dark drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-medium">My academic journey, reimagined.</p>
        </motion.div>

        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          
          {/* Main Card: B.E. (Spans 2 columns, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] bg-dark-card border border-brand/30 p-8 md:p-12 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Holographic glowing background effect */}
            <div className="absolute -inset-20 bg-gradient-to-br from-brand/20 via-transparent to-brand/5 blur-[50px] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Rotating abstract shape in the background */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-brand-dark shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    {milestones[0].icon}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/30 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
                    <span className="text-brand-light text-sm font-bold tracking-wide">Current Focus</span>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  {milestones[0].title}
                </h3>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md">
                  {milestones[0].institution}
                </p>
                <p className="text-brand-light/70 text-base mt-2 font-semibold tracking-wider">
                  {milestones[0].duration}
                </p>
              </div>

              {/* Massive Score Indicator */}
              <div className="flex items-end justify-between mt-10 border-t border-white/10 pt-8">
                <div className="flex items-center gap-3 text-gray-500 font-medium">
                  <Star className="w-5 h-5 text-brand" />
                  <span>Academic Excellence</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">{milestones[0].scoreLabel}</p>
                  <p className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    {milestones[0].score}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Card: HSC */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 relative rounded-[2.5rem] bg-dark-card border border-white/5 p-8 overflow-hidden group hover:border-brand/30 transition-colors duration-500 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand/10 transition-colors duration-500">
                {milestones[1].icon}
              </div>
              <p className="text-brand/50 text-sm font-semibold">{milestones[1].duration}</p>
            </div>

            <div className="relative z-10 mt-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors duration-300">
                {milestones[1].title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {milestones[1].institution}
              </p>
              
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white drop-shadow-md">{milestones[1].score}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">{milestones[1].scoreLabel}</span>
              </div>
            </div>
          </motion.div>

          {/* Tertiary Card: SSLC */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 relative rounded-[2.5rem] bg-dark-card border border-white/5 p-8 overflow-hidden group hover:border-brand/30 transition-colors duration-500 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand/10 transition-colors duration-500">
                {milestones[2].icon}
              </div>
              <p className="text-brand/50 text-sm font-semibold">{milestones[2].duration}</p>
            </div>

            <div className="relative z-10 mt-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors duration-300">
                {milestones[2].title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {milestones[2].institution}
              </p>
              
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white drop-shadow-md">{milestones[2].score}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">{milestones[2].scoreLabel}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
