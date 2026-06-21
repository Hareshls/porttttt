import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Setup scroll spy to automatically highlight current section
    const observerOptions = {
      root: null,
      // Creates a narrow detection window in the middle of the screen.
      // This guarantees it works perfectly even for extremely tall sections!
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingLink = navLinks.find(link => link.href === `#${entry.target.id}`);
          if (matchingLink) {
            setActive(matchingLink.name);
          }
        }
      });
    }, observerOptions);

    // Tell the observer to watch all sections
    navLinks.forEach((link) => {
      const sectionId = link.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={clsx(
          'transition-all duration-300',
          scrolled ? 'scale-95' : 'scale-100'
        )}
      >
      <div className="flex items-center p-1.5 bg-dark-card/60 backdrop-blur-xl border border-brand/20 rounded-full shadow-lg shadow-brand/5">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={clsx(
              'relative px-5 py-2 text-sm font-medium transition-colors rounded-full',
              active === link.name ? 'text-dark' : 'text-gray-300 hover:text-white'
            )}
          >
            {active === link.name && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-brand rounded-full z-[-1]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </a>
        ))}
      </div>
    </motion.nav>
    </div>
  );
}
