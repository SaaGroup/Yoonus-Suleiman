import { motion } from "motion/react";
import { RESUME_DATA } from "../constants";
import { BookOpen, Award, FileText } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="py-24 px-10 md:px-15 bg-white border-b border-brand-border overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
          <aside className="space-y-12">
            <div>
              <span className="section-header">Recognition</span>
              <h2 className="text-3xl font-bold tracking-tighter text-brand-primary mb-6">Professional Memberships</h2>
              <p className="text-[14px] text-brand-secondary leading-relaxed mb-8">
                Distinguished affiliations and certified memberships in leading economic and marketing institutions.
              </p>
              
              <div className="space-y-4">
                {RESUME_DATA.memberships?.map((member, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl border border-brand-border bg-brand-bg-sidebar hover:border-brand-accent transition-colors group"
                  >
                    <div className="p-2 bg-white rounded-lg border border-brand-border shadow-sm group-hover:scale-110 transition-transform">
                      <Award size={16} className="text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-brand-primary leading-tight mb-1">{member.title}</h4>
                      <span className="text-[10px] font-bold text-brand-secondary uppercase opacity-60">Verified • {member.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </aside>

          <main>
            <span className="section-header">Knowledge Base</span>
            <h2 className="text-3xl font-bold tracking-tighter text-brand-primary mb-12">Research & Publications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESUME_DATA.research?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 border border-brand-border rounded-2xl bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all group relative"
                >
                  <div className="mb-4 flex justify-between items-start">
                    <div className="p-2 bg-indigo-50 rounded-lg text-brand-accent">
                      <FileText size={18} />
                    </div>
                    <span className="text-[11px] font-bold text-brand-secondary opacity-40">{item.year}</span>
                  </div>
                  <h3 className="text-[14px] font-bold text-brand-primary leading-snug group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <BookOpen size={12} className="text-brand-accent" />
                    <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest">Academic Work</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </motion.div>
    </section>
  );
}
