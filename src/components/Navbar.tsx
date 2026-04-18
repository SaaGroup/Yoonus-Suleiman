import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { RESUME_DATA } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Work", href: "#portfolio" },
    { name: "Insights", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-10 md:px-15 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
            S
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-sm font-bold tracking-tighter text-brand-primary uppercase">
              {RESUME_DATA.name}
            </a>
            <span className="text-[9px] uppercase tracking-[2px] text-brand-accent font-bold">
              Economics and Marketing Strategist
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-bold text-brand-secondary hover:text-brand-accent uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-brand-accent transition-all shadow-md shadow-indigo-100"
          >
            Hire Me
          </a>
        </div>


        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-brand-border bg-white"
        >
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] border-b border-brand-bg-sidebar pb-4 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-lg text-center shadow-lg"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
