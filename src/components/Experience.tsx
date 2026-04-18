import { motion } from "motion/react";
import { RESUME_DATA } from "../constants";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-10 md:px-15 bg-white border-b border-brand-border overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <span className="section-header">Career History</span>
        <h2 className="text-3xl font-bold tracking-tighter text-brand-primary mb-16">Professional Experience</h2>
        
        <div className="space-y-16">
          {RESUME_DATA.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 group"
            >
              <div className="space-y-3 md:border-r border-brand-border md:pr-10">
                <p className="text-[11px] font-bold text-brand-accent uppercase tracking-[2px]">{exp.period}</p>
                <h4 className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300">{exp.role}</h4>
                <p className="text-[14px] text-brand-secondary font-bold uppercase tracking-tight">{exp.company}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-brand-secondary font-medium opacity-60">
                  <MapPin size={12} />
                  {exp.location}
                </div>
              </div>

              <div className="space-y-4">
                {exp.achievements.map((achievement, ai) => (
                  <div key={ai} className="flex gap-4 group/item">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-accent/30 group-hover/item:bg-brand-accent transition-colors shrink-0" />
                    <p className="text-[15px] text-brand-secondary leading-relaxed font-medium group-hover/item:text-brand-primary transition-colors duration-200">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
