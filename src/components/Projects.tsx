import { motion } from "motion/react";
import { RESUME_DATA } from "../constants";
import { ExternalLink, ShoppingBag, BarChart, Zap } from "lucide-react";

export default function Projects() {
  const icons = [<BarChart />, <Zap />, <ShoppingBag />];

  return (
    <section id="portfolio" className="py-24 px-10 md:px-15 bg-white border-b border-brand-border">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <span className="section-header">Selected Work</span>
        <h2 className="text-3xl font-bold tracking-tighter text-brand-primary mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 border border-brand-border rounded-xl bg-brand-bg-sidebar hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[2px] block mb-2">{project.category}</span>
              <h4 className="text-lg font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-[13px] text-brand-secondary leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
