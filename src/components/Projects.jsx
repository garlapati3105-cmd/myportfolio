import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Code, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';



const PROJECTS_DATA = [
  {
    id: 'auto-debug',
    title: 'Auto-Debug Agent',
    description: 'AI-powered autonomous debugging system that analyzes, fixes, validates, and executes code using iterative reasoning loops and system feedback.',
    tech: ['Python', 'Agentic AI', 'Groq API', 'AST Parsing'],
    category: 'ai',
    github: 'https://github.com/garlapati3105-cmd/autodebug-agent',
    demo: 'https://github.com/garlapati3105-cmd/autodebug-agent',
    glowColor: 'group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/10'
  },
  {
    id: 'resume-builder',
    title: 'ATS Resume Builder',
    description: 'ATS-friendly resume builder web app with structural real-time markdown previews, template selectors, and pixel-perfect PDF export engines.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'PDF Export'],
    category: 'web',
    github: 'https://github.com/garlapati3105-cmd/resume-builder',
    demo: 'https://github.com/garlapati3105-cmd/resume-builder',
    glowColor: 'group-hover:border-purple-500/40 group-hover:shadow-purple-500/10'
  },
  {
    id: 'news-summarizer',
    title: 'AI News Summarizer',
    description: 'Chrome extension that reads articles, strips visual clutter, and generates contextual multi-bullet summaries using Groq AI and LLaMA models.',
    tech: ['JavaScript', 'Chrome APIs', 'Groq API', 'LLaMA 3'],
    category: 'ai',
    github: 'https://github.com/garlapati3105-cmd/Ai_news_summarizer',
    demo: 'https://github.com/garlapati3105-cmd/Ai_news_summarizer',
    glowColor: 'group-hover:border-amber-500/40 group-hover:shadow-amber-500/10'
  },
  {
    id: 'interview-ai',
    title: 'InterviewAI',
    description: 'Real-time AI voice interview coach designed for automated placement checks and low-latency mock interview conversational feedback loops.',
    tech: ['Voice AI', 'Murf AI API', 'NLP Pipelines', 'React'],
    category: 'ai',
    github: 'https://github.com/garlapati3105-cmd/InterviewAI',
    demo: 'https://github.com/garlapati3105-cmd/InterviewAI',
    glowColor: 'group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/10'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 relative bg-bg-darker/20">
      {/* Background Neon Glow */}
      <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] glow-ball-cyan rounded-full filter blur-[120px] -z-10 opacity-50"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] glow-ball-purple rounded-full filter blur-[120px] -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. Functional Prototypes</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Recent Projects
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {[
            { name: 'All Work', id: 'all' },
            { name: 'AI & Agents', id: 'ai' },
            { name: 'Full-Stack & Web', id: 'web' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-full font-display text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                  : 'text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                className="group glass-card rounded-2xl p-6 border flex flex-col justify-between h-full hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] relative overflow-hidden cursor-pointer"
              >
                {/* Tech Glowing Accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 filter blur-2xl group-hover:bg-cyan-500/10 transition-all duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Card Header Folder details */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
                      <Code className="w-5 h-5 pointer-events-none" />
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-1 relative z-20 pointer-events-auto"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5 pointer-events-none" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-1 relative z-20 pointer-events-auto"
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5 pointer-events-none" />
                      </a>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display font-extrabold text-xl text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3 flex items-center gap-2">
                    <span>{project.title}</span>
                    {project.category === 'ai' && (
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse pointer-events-none" />
                    )}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Premium Action CTA */}
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors mt-2 mb-6">
                    <span>Explore Source Code</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Tech Stack badging */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 relative z-10" onClick={(e) => e.stopPropagation()}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#070b13] border border-white/5 text-gray-400 font-mono text-[10px] uppercase font-semibold group-hover:border-cyan-500/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Callout CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 glass-panel border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-white">Want to see more of my code?</h4>
            <p className="text-sm text-gray-400 mt-1">I actively maintain experimental pipelines, MCP setups, and automation repositories on my GitHub.</p>
          </div>
          <a
            href="https://github.com/garlapati3105-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-display font-bold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 shrink-0"
          >
            <Github className="w-4.5 h-4.5" />
            <span>Explore Github</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
