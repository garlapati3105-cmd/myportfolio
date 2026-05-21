import { Cpu, Heart, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#030712]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center">
              <Cpu className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-white">Garlapati Saikiran</span>
          </div>
          <span className="text-xs text-gray-500 font-mono">
            &copy; {currentYear} &bull; All systems operational.
          </span>
        </div>

        {/* Built with details */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse fill-red-500" />
          <span>using</span>
          <strong className="text-cyan-400 font-bold">React</strong>
          <span>+</span>
          <strong className="text-purple-400 font-bold">Tailwind CSS</strong>
        </div>

        {/* Small social shortcuts */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/garlapati3105-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-kiran-garlapati-795710397"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:garlapati3105@gmail.com"
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
