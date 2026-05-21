import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';


const TYPING_WORDS = [
  'AI Systems Builder',
  'Full-Stack Developer',
  'Agentic AI Architect',
  'Automation Specialist'
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Holographic terminal logs
  const [agentLogs, setAgentLogs] = useState([
    { id: 1, text: 'Initializing Saikiran.AgenticOS...', type: 'info' },
  ]);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = TYPING_WORDS[wordIdx];
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.slice(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at end
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.slice(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
          setTypingSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIdx, typingSpeed]);

  // Periodic updates to Agent Log for interactive aesthetic
  useEffect(() => {
    const events = [
      'Querying Groq API for iterative code fixes...',
      'Auto-Debug: Lint error detected in build pipeline. Resolving...',
      'Agentic reasoning loop active (Depth: 4/5)',
      'MCP Server connection established successfully.',
      'Analyzing resume semantic ATS matches...',
      'Generating high-fidelity SVG canvas vectors...',
      'Compiling vector database index embeddings...',
      'Status: Active & monitoring user cursor interactions.'
    ];

    const interval = setInterval(() => {
      const randomText = events[Math.floor(Math.random() * events.length)];
      setAgentLogs((prev) => {
        const next = [...prev, { id: Date.now(), text: randomText, type: 'info' }];
        if (next.length > 5) next.shift(); // keep last 5
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden grid-bg">
      {/* Background Radial Neon Accents */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] glow-ball-cyan rounded-full filter blur-[80px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] glow-ball-purple rounded-full filter blur-[80px] -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Bio details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Top glowing pill */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>OPEN FOR INTERNSHIPS & HACKATHONS</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-4 leading-[1.05]"
          >
            Hi, I’m <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-glow">
              Garlapati Saikiran
            </span>
          </motion.h1>

          {/* Animated Subtitle / Typing text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2.5 h-8 mb-6"
          >
            <span className="font-mono text-lg md:text-xl text-gray-400 font-semibold uppercase tracking-wider">
              [
            </span>
            <span className="font-display text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {currentText}
            </span>
            <span className="w-2.5 h-5 bg-cyan-500 animate-ping rounded-sm"></span>
            <span className="font-mono text-lg md:text-xl text-gray-400 font-semibold uppercase tracking-wider">
              ]
            </span>
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-400 font-normal leading-relaxed max-w-xl mb-8"
          >
            First-year Computer Science student passionate about building 
            <strong className="text-gray-200"> autonomous AI agents</strong>, custom 
            <strong className="text-gray-200"> automation workflows</strong>, Chrome extensions, 
            and modern web architectures. Transforming iterative reasoning into practical software.
          </motion.p>

          {/* Actions & Links Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full"
          >
            <button
              onClick={handleScrollToProjects}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white cursor-pointer shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Resume button directs to a clean notification, or prints alert */}
            <a
              href="mailto:garlapati3105@gmail.com?subject=Resume Request - Garlapati Saikiran"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold text-sm bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Request Resume</span>
            </a>

            {/* Social media connections */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/garlapati3105-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:-translate-y-0.5"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-kiran-garlapati-795710397"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column: Holographic Agent Card Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:block z-10"
        >
          <div className="glass-card rounded-2xl border border-white/5 p-6 glow-cyan relative overflow-hidden group">
            {/* Corner glowing nodes */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 filter blur-xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 filter blur-xl rounded-full"></div>
            
            {/* Top terminal bar */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-gray-400">AGENTS_REASONING_CONSOLE</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/30 border border-cyan-500/50"></span>
              </div>
            </div>

            {/* Inner dynamic agent logs logs */}
            <div className="font-mono text-[11px] leading-relaxed text-left h-48 overflow-y-auto flex flex-col gap-2.5 scrollbar-none select-none">
              <AnimatePresence mode="popLayout">
                {agentLogs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-2 items-start"
                  >
                    <span className="text-cyan-500 font-bold">&gt;&gt;</span>
                    <span className="text-gray-300">{log.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Simulated System Metrics widgets */}
            <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-3 gap-2">
              <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                <span className="block text-[8px] font-mono text-gray-500 uppercase">SYS_LOAD</span>
                <span className="font-mono text-xs font-semibold text-cyan-400">12.04%</span>
              </div>
              <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                <span className="block text-[8px] font-mono text-gray-500 uppercase">REASONING_D</span>
                <span className="font-mono text-xs font-semibold text-purple-400">98.9%</span>
              </div>
              <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                <span className="block text-[8px] font-mono text-gray-500 uppercase">LOC_BUILD</span>
                <span className="font-mono text-xs font-semibold text-emerald-400">14k+ lines</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
