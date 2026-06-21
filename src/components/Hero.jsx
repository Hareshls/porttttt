import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-dark">
      
      {/* --- Premium Background Effects --- */}
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand/10 blur-[120px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[120px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      {/* --------------------------------- */}

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Side: Text (Spans 7 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/5 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand shadow-[0_0_8px_#9333ea]"></span>
            </span>
            <span className="text-sm font-medium text-brand-light tracking-wide">Available for new opportunities</span>
          </motion.div>

          {/* Massive Typography */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight mb-6 relative whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-lg pr-4">
              BHAVANA
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand to-brand-dark drop-shadow-[0_0_30px_rgba(147,51,234,0.4)]">
              R.
            </span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="h-[1px] w-24 bg-gradient-to-r from-brand to-transparent mb-6" />

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-light tracking-widest text-gray-300 uppercase mb-4">
            Software <span className="font-semibold text-white">Developer</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-lg leading-relaxed mb-10 border-l-2 border-brand/30 pl-4">
            Aspiring Software Engineer building scalable, high-performance solutions that create real-world impact.
          </motion.p>
          
          {/* Buttons & Socials */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="group relative px-8 py-4 bg-brand text-dark font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.2)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-brand via-white to-brand opacity-0 group-hover:opacity-30 mix-blend-overlay transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">View Projects <FaCode /></span>
            </a>
            
            <div className="flex items-center gap-4">
              {[
                { icon: FaGithub, href: "https://github.com/BhavanaRD16" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/bhavanard16" },
                { icon: FaEnvelope, href: "mailto:bhavanard16@gmail.com" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className="relative p-3 rounded-full bg-dark-card border border-dark-border hover:border-brand text-gray-400 hover:text-brand transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:-translate-y-1 group">
                  <div className="absolute inset-0 bg-brand/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <social.icon size={22} className="relative z-10" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Advanced 3D Graphic (Spans 5 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring' }}
          className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* 3D Orbit Rings */}
          <div className="absolute inset-0 flex items-center justify-center [perspective:1000px] pointer-events-none">
            <div className="w-[120%] h-[120%] absolute rounded-full border border-brand/20 animate-[spin_20s_linear_infinite]" style={{ transform: 'rotateX(65deg) rotateY(15deg)' }}>
               {/* Orbiting Planet */}
               <div className="absolute top-0 left-1/2 w-4 h-4 bg-brand rounded-full shadow-[0_0_20px_#9333ea] -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="w-[90%] h-[90%] absolute rounded-full border border-brand/30 animate-[spin_15s_linear_infinite_reverse]" style={{ transform: 'rotateX(65deg) rotateY(15deg)' }}>
               <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff] -translate-x-1/2 translate-y-1/2" />
            </div>
          </div>

          {/* Central Profile Bento Box */}
          <div className="relative w-64 h-[350px] sm:w-72 sm:h-[400px] md:w-80 md:h-[450px] z-10 group perspective-1000 mt-10 lg:mt-0">
            {/* Glow Behind */}
            <div className="absolute inset-0 bg-brand/40 rounded-[2.5rem] blur-[60px] group-hover:bg-brand/60 group-hover:blur-[80px] transition-all duration-700" />
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-[2.5rem] border border-white/10 bg-dark overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="/profile.jpg" 
                alt="Bhavana R" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
            </div>
            
            {/* Floating Top Left Tech Badge (Replaced Avatar) */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -left-8 md:-left-12 px-4 py-2 rounded-full border border-white/10 bg-[#0a0515]/80 backdrop-blur-md flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20 hover:border-brand/50 transition-colors"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand shadow-[0_0_5px_#9333ea]"></span>
              </div>
              <span className="text-white text-[10px] md:text-xs font-black tracking-widest uppercase">Innovating</span>
            </motion.div>

            {/* Floating Bento Card 1 (Left side) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 -left-8 md:-left-16 w-32 h-32 md:w-36 md:h-36 glass-panel rounded-3xl p-4 flex flex-col justify-between shadow-2xl border-white/10 bg-white/5 backdrop-blur-xl z-20"
            >
              <div className="flex justify-between items-start">
                <span className="text-gray-300 font-medium text-xs md:text-sm">Focus</span>
                <span className="text-white text-xs opacity-50">→</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-white leading-none tracking-tighter">&lt;/&gt;</span>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <img src="/profile.jpg" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] text-gray-300">Role</span>
                    <span className="text-[10px] font-bold text-white">Developer</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Bento Card 2 (Bottom Right side) */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:-right-10 w-32 h-32 md:w-36 md:h-36 bg-brand rounded-3xl p-4 flex flex-col justify-between shadow-[0_15px_30px_rgba(147,51,234,0.4)] border border-brand-light/30 z-20"
            >
              <div className="flex justify-between items-start">
                <span className="text-brand-light font-medium text-xs md:text-sm">Efficiency</span>
                <span className="text-white text-xs">→</span>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                {/* Audio/Bar Chart decoration */}
                <div className="flex items-end gap-1 h-10">
                  <div className="w-1.5 h-3 bg-black/40 rounded-full" />
                  <div className="w-1.5 h-5 bg-black/50 rounded-full" />
                  <div className="w-1.5 h-8 bg-black/70 rounded-full" />
                  <div className="w-1.5 h-10 bg-black/90 rounded-full" />
                  <div className="w-1.5 h-6 bg-black/60 rounded-full" />
                  <div className="w-1.5 h-4 bg-black/40 rounded-full" />
                  <div className="w-1.5 h-7 bg-black/60 rounded-full" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-5 h-5 rounded-full bg-black/20 overflow-hidden flex items-center justify-center">
                     <img src="/profile.jpg" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] text-brand-light">Status</span>
                    <span className="text-[10px] font-bold text-dark">100% Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
