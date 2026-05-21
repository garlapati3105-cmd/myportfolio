import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';

import Navbar from './components/Navbar';
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing Saikiran.AgenticOS...');

  // Preloader boot text updates
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 12) + 4;
          return next > 100 ? 100 : next;
        });
      }, 180);
      return () => clearInterval(interval);
    }
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      setBootText('Boot sequence complete. Opening portfolio...');
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (progress > 80) {
      setBootText('Establishing secure web socket connections...');
    } else if (progress > 55) {
      setBootText('Verifying vector DB database embeddings...');
    } else if (progress > 30) {
      setBootText('Loading agentic reasoning layers...');
    } else if (progress > 10) {
      setBootText('Importing Tailwind core stylesheets...');
    }
  }, [progress]);

  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-200 select-none">
      {loading ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 bg-[#030712] z-[9999] flex flex-col items-center justify-center p-6"
        >
          <div className="max-w-md w-full glass-card p-6 md:p-8 rounded-2xl border border-white/10 text-left relative overflow-hidden shadow-2xl">
            {/* Corner glowing blur ball */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/10 filter blur-xl rounded-full"></div>

            {/* Terminal top header */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-gray-400">SAIKIRAN_AGENTIC_OS_BOOT</span>
              </div>
              <span className="font-mono text-[9px] text-cyan-500/60 font-bold uppercase">v1.0.0</span>
            </div>

            {/* Console log */}
            <div className="font-mono text-xs text-gray-300 min-h-[4rem] leading-relaxed flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-cyan-500 font-bold">&gt;</span>
                <span className="text-gray-400">{bootText}</span>
              </div>
              <div className="flex gap-2 mt-1">
                <span className="text-cyan-500 font-bold">&gt;</span>
                <span>Subsystem status: <strong className="text-cyan-400 font-semibold">{progress}%</strong> ready</span>
              </div>
            </div>

            {/* Loading progress bar */}
            <div className="mt-6 w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
              ></motion.div>
            </div>

            {/* Mini icons */}
            <div className="mt-5 flex justify-center text-gray-600">
              <Cpu className="w-4 h-4 animate-spin text-cyan-500/35" />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="portfolio-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Ambient Neural background connection field */}
          <BackgroundEffect />

          {/* Float Navigation */}
          <Navbar />

          {/* Layout Panels */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
            <Contact />
          </main>

          {/* Layout Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
