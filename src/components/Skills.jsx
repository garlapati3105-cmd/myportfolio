import { motion as framerMotion } from 'framer-motion';
import { Code2, LayoutTemplate, Brain, Wrench, ShieldCheck } from 'lucide-react';


const SKILLS_DATA = [
  {
    category: 'Languages',
    icon: Code2,
    color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
    glowColor: 'hover:shadow-purple-500/10 hover:border-purple-500/40',
    skills: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    icon: LayoutTemplate,
    color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400',
    glowColor: 'hover:shadow-cyan-500/10 hover:border-cyan-500/40',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'AI & Automation',
    icon: Brain,
    color: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-400',
    glowColor: 'hover:shadow-amber-500/10 hover:border-amber-500/40',
    skills: ['Agentic AI', 'n8n Workflows', 'Claude & GPT APIs', 'Groq API', 'Vector Embeddings'],
  },
  {
    category: 'Tools & APIs',
    icon: Wrench,
    color: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400',
    glowColor: 'hover:shadow-emerald-500/10 hover:border-emerald-500/40',
    skills: ['Git', 'GitHub', 'Vercel', 'Chrome Extension APIs', 'MCP Specifications'],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-20 relative grid-bg">
      {/* Background Radial Glow */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] glow-ball-purple rounded-full filter blur-[100px] -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>02. Technical Arsenal</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Skills Cards Grid */}
        <framerMotion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILLS_DATA.map((cat, idx) => {
            const IconComponent = cat.icon;
            
            return (
              <framerMotion.div
                key={cat.category}
                variants={cardVariants}
                className={`glass-card rounded-2xl p-6 flex flex-col items-start border text-left h-full ${cat.glowColor}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center border shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-white text-base tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2 w-full mt-auto">
                  {cat.skills.map((skill) => (
                    <framerMotion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-gray-300 font-mono text-xs hover:border-cyan-500/20 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-300 cursor-default flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-500/70" />
                      <span>{skill}</span>
                    </framerMotion.span>
                  ))}
                </div>
              </framerMotion.div>
            );
          })}
        </framerMotion.div>

        {/* Dynamic AI Sub-Badge Footer */}
        <framerMotion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-panel border border-cyan-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="font-mono text-xs text-gray-400">
            Currently deep-diving into: <strong className="text-cyan-400">Model Context Protocol (MCP) servers & Vector Databases</strong>
          </span>
        </framerMotion.div>

      </div>
    </section>
  );
}
