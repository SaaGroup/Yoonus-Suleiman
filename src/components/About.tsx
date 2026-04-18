import { motion } from "motion/react";
import { RESUME_DATA } from "../constants";
import { Award, Target, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-brand-accent" />,
      title: "Strategic Excellence",
      desc: "Proven track record in developing high-impact marketing strategies."
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: "Goal Oriented",
      desc: "Dedicated to driving profits and increasing market dominance."
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "People Leader",
      desc: "Expert in team supervision and relationship management."
    }
  ];

  return (
    <section id="about" className="py-24 px-10 md:px-15 bg-white border-b border-brand-border">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="section-header">Professional Profile</span>
            <h2 className="text-3xl font-bold tracking-tighter text-brand-primary mb-8 max-w-md">
              Leadership in Marketing & Economics backed by 20+ years of strategic experience.
            </h2>
            <p className="text-[15px] text-brand-secondary leading-relaxed mb-6">
              {RESUME_DATA.summary}
            </p>
          </div>
          <div className="bg-brand-bg-sidebar p-8 lg:p-12 rounded-2xl border border-brand-border h-fit">
            <span className="section-header">Core Competencies</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {highlights.map((h, i) => (
                 <div key={i} className="space-y-3">
                   <div className="w-10 h-10 bg-white rounded-lg border border-brand-border shadow-sm flex items-center justify-center mb-4">
                     {h.icon}
                   </div>
                   <h3 className="text-sm font-bold text-brand-primary uppercase tracking-tight">{h.title}</h3>
                   <p className="text-[12px] text-brand-secondary leading-relaxed font-medium">{h.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
