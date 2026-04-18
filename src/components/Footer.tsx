import { RESUME_DATA } from "../constants";
import { Linkedin, Twitter, Facebook, FileText } from "lucide-react";

export default function Footer() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'LinkedIn': return <Linkedin size={18} />;
      case 'Twitter': return <Twitter size={18} />;
      case 'Facebook': return <Facebook size={18} />;
      default: return null;
    }
  };

  return (
    <footer className="py-20 px-10 md:px-15 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white font-bold text-xl">
                Y
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tighter">Yoonus Suleiman Jatto</h3>
            </div>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-xs font-medium">
              A decade-spanning career built on strategic marketing, brand leadership, and a relentless drive for performance.
            </p>
            <div className="flex gap-4">
              {RESUME_DATA.social.map((s) => (
                <a 
                  key={s.name} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 border border-white/10 rounded-xl text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300"
                  title={s.name}
                >
                  {getIcon(s.name)}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent block">Quick Navigation</span>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[13px] font-bold uppercase tracking-widest">
               <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
               <a href="#experience" className="hover:text-brand-accent transition-colors">Experience</a>
               <a href="#portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a>
               <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
               <a href="#skills" className="hover:text-brand-accent transition-colors">Skills</a>
               <a href="#testimonials" className="hover:text-brand-accent transition-colors">Insights</a>
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent block">Professional Assets</span>
            <button 
              onClick={() => window.print()}
              className="group flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-brand-primary transition-all duration-300 w-full text-left"
            >
              <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                <FileText size={20} />
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-widest opacity-60">Curriculum Vitae</span>
                <span className="text-sm font-bold">Download Comprehensive PDF</span>
              </div>
            </button>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Strategic Expert Available Daily</span>
          </div>
          
          <div className="text-[11px] text-white/30 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Yoonus Suleiman Jatto. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


