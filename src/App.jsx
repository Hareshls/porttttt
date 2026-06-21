import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Check session storage to only show preloader once per session
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeenPreloader || prefersReducedMotion) {
      setLoading(false);
    }
  }, [prefersReducedMotion]);

  const handlePreloaderComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasSeenPreloader', 'true');
  };

  return (
    <div className="bg-dark min-h-screen text-gray-200 selection:bg-brand selection:text-dark">
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Achievements />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
