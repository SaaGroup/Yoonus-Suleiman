import { useEffect } from 'react';

const sectionMeta: Record<string, { title: string; description: string; keywords: string }> = {
  hero: {
    title: "Yoonus Suleiman Jatto | Marketing Expert & Performance Leader",
    description: "Marketing professional with 20+ years of experience driving profits and market share.",
    keywords: "marketing expert, performance leader, Yoonus Suleiman Jatto, business development"
  },
  about: {
    title: "About Yoonus Suleiman Jatto | 20+ Years Marketing Excellence",
    description: "Learn about Yoonus's strategic approach to brand dominance and market expansion.",
    keywords: "marketing strategy, brand dominance, Yoonus Suleiman Jatto, retail marketing"
  },
  skills: {
    title: "Expertise & Skills | Yoonus Suleiman Jatto",
    description: "Core competencies in retail, digital, and performance marketing.",
    keywords: "digital marketing, retail marketing, competitive analysis, business development skills"
  },
  experience: {
    title: "Career History | Yoonus Suleiman Jatto",
    description: "Professional journey from DAAR Communications to strategic consulting.",
    keywords: "career history, work experience, DAAR Communications, marketing leadership"
  },
  portfolio: {
    title: "Portfolio & Case Studies | Yoonus Suleiman Jatto",
    description: "Successful marketing transformations and brand case studies.",
    keywords: "portfolio, case studies, marketing projects, ROI optimization"
  },
  education: {
    title: "Education & Certifications | Yoonus Suleiman Jatto",
    description: "Academic background including MBA in Marketing and MSc in Economics.",
    keywords: "MBA Marketing, MSc Economics, NIIT certifications, lifelong learning"
  },
  testimonials: {
    title: "Client Testimonials | Yoonus Suleiman Jatto",
    description: "What clients and colleagues say about Yoonus's leadership.",
    keywords: "testimonials, reviews, professional recommendations, leadership feedback"
  },
  contact: {
    title: "Contact Yoonus Suleiman Jatto | Get in Touch",
    description: "Available for strategic consulting and brand leadership roles.",
    keywords: "contact, strategic consulting, brand leadership, hire marketing expert"
  }
};

export function useSEO() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || 'hero';
          const meta = sectionMeta[sectionId];
          if (meta) {
            document.title = meta.title;
            
            // Update Meta Description
            let desc = document.querySelector('meta[name="description"]');
            if (desc) {
              desc.setAttribute('content', meta.description);
            } else {
              desc = document.createElement('meta');
              desc.setAttribute('name', 'description');
              desc.setAttribute('content', meta.description);
              document.head.appendChild(desc);
            }

            // Update Meta Keywords
            let keywords = document.querySelector('meta[name="keywords"]');
            if (keywords) {
              keywords.setAttribute('content', meta.keywords);
            } else {
              keywords = document.createElement('meta');
              keywords.setAttribute('name', 'keywords');
              keywords.setAttribute('content', meta.keywords);
              document.head.appendChild(keywords);
            }
          }
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll('section[id], section:first-of-type');
    sections.forEach(s => observer.observe(s));

    return () => {
      sections.forEach(s => observer.unobserve(s));
    };
  }, []);
}
