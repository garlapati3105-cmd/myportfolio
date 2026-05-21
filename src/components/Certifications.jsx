import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

const CERTIFICATIONS_DATA = [
  {
    id: 'vector-search',
    title: 'Vector Search in Practice: Semantic Search with LLMs',
    issuer: 'Decentralized LLM / Vector Institute',
    date: '2025',
    topics: ['Vector Embeddings', 'Cosine Similarity', 'Vector Indexing (HNSW, IVF)', 'RAG Pipelines'],
    link: 'https://drive.google.com/file/d/1j_wy51wnM6dh_bsbgTtFjtBwxR9aCRWT/view',
  },
  {
    id: 'ai-agents',
    title: 'AI Agents Certification',
    issuer: 'Agentic AI Academy',
    date: '2025',
    topics: ['ReAct Reasoning Loop', 'Tool Integration APIs', 'Autonomous Workflow Logic', 'Multi-Agent Frameworks'],
    link: 'https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/AI-AGENTS-NIAT/AD3T8W97FA.png',
  },
  {
    id: 'base44-nocode',
    title: 'No-Code Application Development with Base44',
    issuer: 'Base44 Platforms',
    date: '2025',
    topics: ['Rapid MVPs', 'Rest API Triggers', 'Internal Node Automation', 'Database Schema Hooks'],
    link: 'https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/NIAT_BASE44_Certificate/1GY6OMT5DL.png',
  }
];


export default function Certifications() {
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
    <section id="certifications" className="py-20 relative grid-bg">
      {/* Background Radial Glow */}
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] glow-ball-cyan rounded-full filter blur-[100px] -z-10 opacity-40 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05. Credentials</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Certifications
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {CERTIFICATIONS_DATA.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              onClick={() => window.open(cert.link, '_blank', 'noopener,noreferrer')}
              className="group glass-card rounded-2xl p-6 border flex flex-col justify-between h-full hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)] relative overflow-hidden cursor-pointer"
            >
              <div>
                {/* Visual Header */}
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Award className="w-5.5 h-5.5 pointer-events-none" />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-lg text-white mb-1 leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                {/* Issuer */}
                <span className="block font-mono text-[11px] text-gray-400 font-semibold mb-5 uppercase tracking-wider">
                  {cert.issuer}
                </span>

                {/* Sub-Bullets (Core curriculum) */}
                <div className="mt-4 flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block">Curriculum Covered</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 rounded-lg bg-[#070b13] border border-white/5 text-gray-400 font-mono text-[9px]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Hook */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 animate-pulse pointer-events-none" />
                  <span>Verified Credential</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-500/20 transition-all duration-300 cursor-pointer"
                  title="Verify Authority"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5 pointer-events-none" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
