import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { text: 'பவான', lang: 'Tamil' },
  { text: 'भावना', lang: 'Hindi' },
  { text: 'バヴァナ', lang: 'Japanese' },
  { text: 'بهافانا', lang: 'Arabic' },
  { text: 'ಭಾವನಾ', lang: 'Kannada' },
  { text: 'భావన', lang: 'Telugu' },
  { text: 'ഭാവന', lang: 'Malayalam' },
  { text: 'ભાવના', lang: 'Gujarati' },
  { text: 'ভাবনা', lang: 'Bengali' },
  { text: 'Бхавана', lang: 'Russian' },
  { text: '바바나', lang: 'Korean' },
  { text: '巴瓦纳', lang: 'Chinese' },
  { text: 'Μπαβάνα', lang: 'Greek' },
  { text: 'Bhavana', lang: 'Spanish' },
  { text: 'Bhavana', lang: 'French' },
  { text: 'BHAVANA', lang: 'English' }
];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    if (index < languages.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 200);
      return () => clearTimeout(timer);
    } else {
      // Hold on the final text, then wipe
      const holdTimer = setTimeout(() => setIsWiping(true), 1200);
      return () => clearTimeout(holdTimer);
    }
  }, [index]);

  useEffect(() => {
    // Progress bar animation
    const totalDuration = languages.length * 200;
    const intervalTime = 20;
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(100, Math.round((currentStep / steps) * 100));
      setProgress(newProgress);
      
      if (currentStep >= steps) {
        clearInterval(progressInterval);
      }
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isWiping && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e0836]/40 via-dark to-dark cursor-pointer"
          onClick={() => setIsWiping(true)}
          exit={{ 
            clipPath: 'circle(0% at 50% 50%)', 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="relative text-center w-full max-w-2xl px-6 flex flex-col items-center">
            
            {/* Language Text Container */}
            <div className="h-32 md:h-40 flex items-center justify-center mb-6">
              <h1
                className={`text-6xl md:text-8xl font-black tracking-widest uppercase font-outfit ${
                  index === languages.length - 1 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand to-brand-dark drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]' 
                    : 'text-gray-300'
                }`}
              >
                {languages[index].text}
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-gray-400 tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm font-medium mb-10 uppercase font-inter"
            >
              Initialising Experience
            </motion.p>

            {/* Progress Bar */}
            <div className="w-full max-w-sm bg-dark-border h-[2px] rounded-full overflow-hidden mb-6 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-light to-brand shadow-[0_0_10px_rgba(147,51,234,0.8)]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            {/* Percentage */}
            <div className="text-gray-400 font-mono text-sm tracking-widest">
              {progress}%
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
