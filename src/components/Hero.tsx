import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { RESUME_DATA } from "../constants";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-24 bg-white border-b border-brand-border relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -mr-64 -mt-64 z-0" />
      
      <div className="max-w-7xl mx-auto px-10 md:px-15 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Mobile Profile Image */}
          <div className="lg:hidden mb-8">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-brand-accent/20 shadow-xl">
              <img 
                src={RESUME_DATA.image} 
                alt={RESUME_DATA.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/seed/yoonus-professional/200/200";
                }}
              />
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-brand-bg-sidebar border border-brand-border rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Available for hire</span>
          </div>
          
          <div className="hero-text text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tighter text-brand-primary mb-10 max-w-2xl">
            I am a <span className="text-brand-accent">marketing expert</span> with 20+ years of driving 
            <span className="italic font-serif font-light text-brand-secondary block mt-2">strategic growth.</span>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#experience"
              className="px-10 py-4 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-brand-accent transition-all shadow-lg shadow-indigo-200"
            >
              Experience
            </a>
            <button 
              onClick={() => window.print()}
              className="px-10 py-4 border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-brand-bg-sidebar transition-all"
            >
              Download CV
            </button>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:block print:hidden h-full border border-brand-border rounded-2xl p-8 bg-brand-bg-sidebar shadow-2xl shadow-indigo-900/5 overflow-hidden"
        >
          <div className="space-y-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-brand-border bg-white shadow-inner">
                <img 
                  src={RESUME_DATA.image} 
                  alt={RESUME_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://picsum.photos/seed/yoonus-professional/800/1000";
                  }}
                />
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="section-header">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-white rounded-lg border border-brand-border shadow-sm">
                    <Mail size={16} className="text-brand-accent" />
                  </div>
                  <div className="text-sm">
                    <span className="block text-[10px] uppercase text-brand-secondary font-bold mb-0.5">Contact Emails</span>
                    <span className="font-semibold text-brand-primary block text-[13px]">{RESUME_DATA.email}</span>
                    <span className="font-semibold text-brand-primary block text-[11px] opacity-70 italic">{RESUME_DATA.officialEmail}</span>
                    {RESUME_DATA.additionalEmails?.map((email, idx) => (
                      <span key={idx} className="font-semibold text-brand-primary block text-[11px] opacity-60">
                        {email}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-white rounded-lg border border-brand-border shadow-sm">
                    <Phone size={16} className="text-brand-accent" />
                  </div>
                  <div className="text-sm">
                    <span className="block text-[10px] uppercase text-brand-secondary font-bold mb-0.5">Phone Lines</span>
                    <span className="font-semibold text-brand-primary block text-[13px] leading-relaxed max-w-[200px]">
                      {RESUME_DATA.phone.split(" / ").join("\n")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-10 border-t border-brand-border flex items-baseline gap-4">
              <span className="text-6xl font-bold tracking-tighter text-brand-accent">20<span className="text-3xl">+</span></span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-secondary leading-tight">
                Years of <br /> Excellence
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

