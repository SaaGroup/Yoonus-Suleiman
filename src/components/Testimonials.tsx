import { motion } from "motion/react";
import { RESUME_DATA } from "../constants";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-10 md:px-15 bg-white border-b border-brand-border overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <span className="section-header mx-auto w-fit">Testimonials</span>
          <h2 className="text-4xl font-bold tracking-tighter text-brand-primary mt-4">
            Trusted by Leaders & Peers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {RESUME_DATA.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="p-10 border border-brand-border rounded-2xl bg-brand-bg-sidebar relative group hover:bg-white hover:border-brand-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              <Quote className="absolute top-8 right-10 w-12 h-12 text-brand-accent/10 group-hover:text-brand-accent/20 transition-colors -z-0" />
              <div className="relative z-10">
                <p className="text-[16px] italic text-brand-secondary leading-relaxed mb-8 font-medium">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary text-sm uppercase tracking-tight">{t.name}</h4>
                    <p className="text-[10px] text-brand-accent uppercase tracking-[1.5px] mt-1 font-bold italic opacity-80">
                      {t.title} @ {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
