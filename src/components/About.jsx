import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const initialPhotos = [
  '/profile.jpg',
  '/1744307238613.jpg', 
  '/photo1 (1).jpeg', 
  '/photo1 (2).jpeg', 
  '/photo2.jpg', 
];

export default function About() {
  const [photos] = useState(initialPhotos.map((url, i) => ({ id: i, url })));
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval: changes photo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section id="about" className="py-24 relative bg-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[30vw] h-[30vw] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-brand/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">


        <div className="flex flex-col gap-16 items-center">
          {/* Photo Side (3D Coverflow) - Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] [perspective:1200px]"
          >
            <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
              {photos.map((photo, index) => {
                // Calculate relative position based on 5 photos
                let offset = index - activeIndex;
                if (offset > 2) offset -= photos.length;
                if (offset < -2) offset += photos.length;
                
                const absOffset = Math.abs(offset);
                const sign = Math.sign(offset);
                const isFront = absOffset === 0;
                
                return (
                  <motion.div
                    key={photo.id}
                    initial={false}
                    animate={{ 
                      x: `${sign * (absOffset === 0 ? 0 : absOffset === 1 ? 80 : 160)}%`, 
                      z: -absOffset * 50, 
                      rotateY: 0, 
                      scale: absOffset === 0 ? 1 : absOffset === 1 ? 0.8 : 0.6, 
                      zIndex: 10 - absOffset,
                      opacity: 1 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-56 h-80 sm:w-64 sm:h-96 md:w-80 md:h-[450px] lg:w-96 lg:h-[550px] rounded-2xl overflow-hidden border border-brand/20 bg-dark-card shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <img 
                      src={photo.url} 
                      alt={`Gallery ${photo.id}`} 
                      className={`w-full h-full object-cover object-top transition-transform duration-700 ${isFront ? 'hover:scale-105' : ''}`}
                    />
                    
                    {/* Shadow overlay for side images */}
                    <motion.div 
                      className="absolute inset-0 bg-black"
                      animate={{ opacity: isFront ? 0 : 0.65 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                );
              })}
              
              {/* Removed Floating accent per user request */}
            </div>
          </motion.div>

          {/* Centered Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center w-full mt-4 mb-4"
          >
            <div className="flex flex-col items-start">
              <h2 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">About <span className="text-brand">Me</span></h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-brand to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Text Side - Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-4xl"
          >
            <div className="glass-panel p-8 md:p-12 lg:p-16 rounded-3xl glow-border">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight text-center">
                Passionate about building <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]">impactful solutions</span>.
              </h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed font-inter text-lg md:text-xl text-center">
                <p>
                  I'm a dedicated Software Developer with a strong foundation in building scalable, user-centric applications. My journey in tech is driven by a deep curiosity for how things work and a desire to solve complex problems through code.
                </p>
                <p>
                  Whether it's crafting intelligent offline-first mobile applications, engineering robust machine learning pipelines for healthcare, or designing interactive web experiences, I thrive on turning ideas into reality.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, refining my problem-solving skills, and staying up-to-date with the latest trends in software architecture and artificial intelligence.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Experience", value: "Hands-on" },
                  { label: "Focus", value: "Full Stack & ML" },
                  { label: "Location", value: "India" }
                ].map((stat, i) => (
                  <div key={i} className="bg-dark/50 p-6 rounded-2xl border border-dark-border hover:border-brand/50 transition-colors duration-300 flex flex-col items-center justify-center text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-bold">{stat.label}</p>
                    <p className="text-brand-light font-bold text-xl">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
