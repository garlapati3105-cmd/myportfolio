import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MessageSquare, Terminal, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [agentFeedback, setAgentFeedback] = useState('');

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Ident identification required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Comms target address required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email syntax.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Payload block cannot be empty.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');
    setAgentFeedback('Encrypting packet payload...');

    setTimeout(() => {
      setAgentFeedback('Routing packet via secure node...');
      
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setAgentFeedback('Packet accepted by Saikiran.AgenticOS queue! Dispatching response thread.');
      }, 1500);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative bg-bg-darker/20 grid-bg">
      {/* Background Radial Glow */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] glow-ball-purple rounded-full filter blur-[120px] -z-10 opacity-40"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] glow-ball-cyan rounded-full filter blur-[120px] -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06. Comms Channels</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch text-left">
          
          {/* Left Column: Direct Comms & Shortcuts */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-panel border border-white/5 rounded-2xl p-6 md:p-8">
              <h3 className="font-display font-bold text-xl text-white mb-3">Let's collaborate!</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                If you have an internship role, an open-source venture, a hackathon invitation, or just want to discuss custom autonomous agent environments, shoot me a packet! I usually reply within a couple of hours.
              </p>

              {/* Direct coordinates list */}
              <div className="flex flex-col gap-4">
                {/* Email shortcut */}
                <a
                  href="mailto:garlapati3105@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">Email Address</span>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">garlapati3105@gmail.com</span>
                  </div>
                </a>

                {/* LinkedIn shortcut */}
                <a
                  href="https://www.linkedin.com/in/sai-kiran-garlapati-795710397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">Professional Link</span>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">linkedin.com/in/sai-kiran-garlapati-795710397</span>
                  </div>
                </a>

                {/* GitHub shortcut */}
                <a
                  href="https://github.com/garlapati3105-cmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">Code Repositories</span>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">github.com/garlapati3105-cmd</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Mail Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl border border-white/5 p-6 md:p-8 relative overflow-hidden h-full flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Identity Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`px-4 py-3 rounded-xl bg-[#05070e] border text-sm text-white focus:outline-none transition-all duration-300 ${
                      errors.name ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-cyan-500/50'
                    }`}
                    placeholder="e.g. John Doe / Recruiter"
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-red-400 mt-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Return Comms Target (Email)</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`px-4 py-3 rounded-xl bg-[#05070e] border text-sm text-white focus:outline-none transition-all duration-300 ${
                      errors.email ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-cyan-500/50'
                    }`}
                    placeholder="e.g. contact@company.com"
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-red-400 mt-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider">Payload Message Body</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`px-4 py-3 rounded-xl bg-[#05070e] border text-sm text-white focus:outline-none transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-cyan-500/50'
                    }`}
                    placeholder="Describe your project requirements, opportunity details, etc."
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-red-400 mt-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Submission button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white cursor-pointer shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Dispatching Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Dynamic Agent Logs Notification Bar */}
              <AnimatePresence>
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-6 p-4 rounded-xl bg-white/5 border border-cyan-500/20 flex gap-3 items-center text-left"
                  >
                    {status === 'sending' ? (
                      <Terminal className="w-5 h-5 text-cyan-400 animate-pulse shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    <div>
                      <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest">AgenticOS Logs</span>
                      <span className="font-mono text-[11px] text-gray-300 mt-0.5 block leading-normal">{agentFeedback}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
