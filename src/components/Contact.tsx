import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { RESUME_DATA } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-10 md:px-15 bg-brand-bg-sidebar border-b border-brand-border overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="section-header">Inquiries</span>
            <h2 className="text-4xl font-bold tracking-tighter text-brand-primary mb-6 leading-tight">
              Let's build something <br />
              <span className="text-brand-accent italic font-serif font-light">meaningful</span> together.
            </h2>
            <p className="text-[15px] text-brand-secondary leading-relaxed mb-10 max-w-sm font-medium">
              I am available for new opportunities and strategic consulting in marketing and brand leadership.
            </p>
            
            <div className="space-y-6">
              <div className="p-4 bg-white border border-brand-border rounded-xl shadow-sm inline-flex items-center gap-4 group hover:border-brand-accent transition-colors">
                <div className="w-10 h-10 bg-brand-bg-sidebar rounded-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div className="text-sm">
                  <span className="block text-[10px] uppercase text-brand-secondary font-bold mb-0.5 tracking-widest">Email</span>
                  <span className="font-bold text-brand-primary">{RESUME_DATA.email}</span>
                </div>
              </div>
              <br />
              <div className="p-4 bg-white border border-brand-border rounded-xl shadow-sm inline-flex items-center gap-4 group hover:border-brand-accent transition-colors">
                <div className="w-10 h-10 bg-brand-bg-sidebar rounded-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div className="text-sm">
                  <span className="block text-[10px] uppercase text-brand-secondary font-bold mb-0.5 tracking-widest">Phone</span>
                  <span className="font-bold text-brand-primary">{RESUME_DATA.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-brand-border p-10 rounded-2xl shadow-2xl shadow-indigo-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 blur-2xl" />
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-brand-bg-sidebar border border-brand-border rounded-xl focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/5 outline-none text-sm transition-all font-medium"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-brand-bg-sidebar border border-brand-border rounded-xl focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/5 outline-none text-sm transition-all font-medium"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 bg-brand-bg-sidebar border border-brand-border rounded-xl focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/5 outline-none text-sm transition-all resize-none font-medium"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-brand-primary text-white text-[12px] font-bold uppercase tracking-[0.3em] rounded-xl hover:bg-brand-accent transition-all shadow-lg shadow-indigo-200"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
