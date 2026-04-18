import { motion } from "motion/react";
import { RESUME_DATA } from "../constants";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-10 md:px-15 bg-white border-b border-brand-border overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <span className="section-header">Academic Foundations</span>
        <h2 className="text-3xl font-bold tracking-tighter text-brand-primary mb-16">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-brand-bg-sidebar border border-brand-border rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
            >
              <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[2px] block mb-4 group-hover:scale-110 origin-left transition-transform">
                {edu.period}
              </span>
              <h3 className="text-base font-bold text-brand-primary mb-2 leading-tight group-hover:text-brand-accent transition-colors">
                {edu.degree}
              </h3>
              <p className="text-[12px] text-brand-secondary font-medium uppercase tracking-tight opacity-80">
                {edu.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
