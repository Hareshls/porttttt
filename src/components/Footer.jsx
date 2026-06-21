import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden border-t border-dark-border">
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-brand"
            style={{
              width: `${i * 300}px`,
              height: `${i * 300}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Let's <span className="text-brand">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:bhavanard16@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-dark font-bold rounded-full hover:bg-brand-light transition-colors shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]"
          >
            <FaEnvelope /> Say Hello
          </a>

          <div className="flex justify-center gap-6 mt-16 mb-16">
            <a href="mailto:bhavanard16@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-brand transition-colors text-sm">
              <FaEnvelope /> bhavanard16@gmail.com
            </a>
            <a href="tel:+918903055603" className="flex items-center gap-2 text-gray-400 hover:text-brand transition-colors text-sm">
              <FaPhoneAlt /> +91-8903055603
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-16">
            <a href="https://linkedin.com/in/bhavanard16" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white glow-border transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/BhavanaRD16" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white glow-border transition-all">
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>

        <div className="border-t border-dark-border pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Bhavana R. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Built with <span className="text-brand">React</span> & <span className="text-brand">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
