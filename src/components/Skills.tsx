import { motion } from "motion/react";
import { RESUME_DATA } from "../constants";
import { CheckCircle2 } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-10 md:px-15 bg-brand-bg-sidebar border-b border-brand-border relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-header">Skillset</span>
            <h2 className="text-3xl font-bold tracking-tighter text-brand-primary">Expertise & Competencies</h2>
          </div>
          <p className="text-[13px] text-brand-secondary font-medium max-w-xs md:text-right">
            Broad spectrum of marketing and business development skills acquired over two decades.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {RESUME_DATA.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, backgroundColor: "#6366f1", color: "#ffffff", borderColor: "#6366f1" }}
              className="px-5 py-3 bg-white border border-brand-border rounded-xl text-[13px] font-bold text-brand-primary shadow-sm cursor-default transition-colors duration-200"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
