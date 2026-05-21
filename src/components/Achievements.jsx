import { motion } from 'framer-motion';
import { Award, Trophy, Code2, Cpu, CheckCircle } from 'lucide-react';

const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: '3rd Place — Murf AI Hackathon',
    subtitle: 'Voice Agent Challenge (Global Competition)',
    description: 'Designed and deployed a responsive real-time voice synthesis recruiter agent using conversational NLP pipelines and Murf AI APIs.',
    icon: Trophy,
    color: 'from-amber-400/20 to-purple-600/20 border-amber-400/30 text-amber-400',
    featured: true,
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.15)] border-amber-500/40',
  },
  {
    id: 2,
    title: 'Active Open-Source Dev',
    subtitle: 'AI Agents & Tools Ecosystem',
    description: 'Built and published autonomous scripts, chrome helper expansions, and MCP servers to simplify development workflows.',
    icon: Code2,
    color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400',
    featured: false,
    glow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:border-cyan-500/30',
  },
  {
    id: 3,
    title: 'GenAI Specialist Pipeline',
    subtitle: 'Advanced Agentic Learning Systems',
    description: 'Actively researching state-of-the-art model behaviors, tool execution loops, and structured json model inputs.',
    icon: Cpu,
    color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
    featured: false,
    glow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:border-purple-500/30',
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="py-20 relative bg-bg-darker/30">
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] glow-ball-purple rounded-full filter blur-[120px] -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>04. Major Milestones</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Achievements
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Cards Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {ACHIEVEMENTS_DATA.map((ach) => {
            const IconComponent = ach.icon;
            
            return (
              <motion.div
                key={ach.id}
                variants={cardVariants}
                className={`glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between border text-left relative overflow-hidden h-full ${
                  ach.featured ? 'lg:col-span-6 ' + ach.glow : 'lg:col-span-3 ' + ach.glow
                }`}
              >
                {/* Visual Glow overlay for the featured card */}
                {ach.featured && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 filter blur-3xl rounded-full"></div>
                )}
                
                <div>
                  {/* Category Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${ach.color} flex items-center justify-center border shrink-0 shadow-lg`}>
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    {ach.featured && (
                      <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold tracking-widest uppercase">
                        Featured Honor
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-extrabold text-xl text-white mb-1.5 tracking-wide leading-snug">
                    {ach.title}
                  </h3>
                  <span className="block font-mono text-xs font-semibold text-cyan-400 mb-4 tracking-wide">
                    {ach.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>

                {/* Bottom checks indicators */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500/70" />
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                    Verified milestone
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
