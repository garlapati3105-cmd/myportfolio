import { motion } from 'framer-motion';
import { Terminal, Sparkles, BookOpen, GraduationCap, Award, BrainCircuit } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 relative bg-bg-darker/30">
      {/* Glow Effects */}
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] glow-ball-cyan rounded-full filter blur-[100px] -z-10 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>01. Academic Profile</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Terminal JSON Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="glass-card rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden h-full flex flex-col">
              {/* Terminal Window Header */}
              <div className="flex justify-between items-center bg-white/5 px-5 py-3.5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs font-semibold text-gray-300">saikiran.json</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/40"></span>
                </div>
              </div>

              {/* Terminal Code Content */}
              <div className="p-6 font-mono text-xs sm:text-sm text-left leading-relaxed flex-grow select-all bg-[#05070f]/90">
                <p className="text-gray-500">// Fetching database records...</p>
                <p className="text-cyan-500 font-bold">$ cat saikiran.json</p>
                
                <div className="mt-4 text-gray-300">
                  <span className="text-purple-400">&#123;</span>
                  <div className="pl-5 sm:pl-8 flex flex-col gap-1.5 mt-1.5">
                    <div>
                      <span className="text-cyan-400">"fullName"</span>: <span className="text-amber-300">"Garlapati Saikiran"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">"academicRole"</span>: <span className="text-amber-300">"1st-Year B.Tech CSE Student"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">"specialization"</span>: <span className="text-amber-300">"AI Engineering & Automation"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">"coreStrengths"</span>: <span className="text-purple-300">[</span>
                      <div className="pl-5 text-amber-300">
                        "Autonomous AI Agents",<br />
                        "Full-Stack Web Dev",<br />
                        "n8n Workflows & MCP Servers",<br />
                        "Chrome Extensions APIs"
                      </div>
                      <span className="text-purple-300">]</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">"passionMetric"</span>: <span className="text-emerald-400">100.0</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">"hackathons"</span>: <span className="text-emerald-400">true</span>
                    </div>
                  </div>
                  <span className="text-purple-400">&#125;</span>
                </div>
                
                <p className="text-cyan-500 font-bold mt-4 animate-pulse">$ <span className="text-gray-400">|</span></p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            {/* Bio description */}
            <motion.div variants={itemVariants} className="glass-panel border border-white/5 rounded-2xl p-6 text-left">
              <h3 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-cyan-400" />
                <span>The Vision</span>
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                As a freshman in Computer Science & Engineering, I don’t believe in waiting until graduation to build. I dive deep into emerging technologies, focusing on creating **agentic systems** and **workflow automations** that make computers act as collaborative partners rather than static tools.
              </p>
            </motion.div>

            {/* Structured details in micro-grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="glass-panel border border-white/5 rounded-2xl p-5 text-left flex gap-4 items-start hover:border-cyan-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Self-Taught & Agile</h4>
                  <p className="text-xs text-gray-400 mt-1">Eagerly learning system architectures, API schemas, and vector pipelines.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-panel border border-white/5 rounded-2xl p-5 text-left flex gap-4 items-start hover:border-purple-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Hackathon Competitor</h4>
                  <p className="text-xs text-gray-400 mt-1">Winning prize positions by converting rapid ideas into functional MVPs.</p>
                </div>
              </motion.div>
            </div>

            {/* Interest badges */}
            <motion.div variants={itemVariants} className="glass-panel border border-white/5 rounded-2xl p-6 text-left">
              <h3 className="font-display font-semibold text-sm text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                <span>Areas of Direct Investigation</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Autonomous LLM Agents',
                  'Model Context Protocol (MCP)',
                  'Web Automation Workflows',
                  'Chrome Extension Ecosystems',
                  'Semantic Search & Vector Indexes',
                  'Full-Stack Node/React'
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-gray-300 font-mono text-xs hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
