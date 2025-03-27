import { motion } from "framer-motion";
import { researchAreas } from "@/lib/constants";

export default function ResearchAreas() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Maps color names to Tailwind classes
  const colorMap: Record<string, { bg: string, text: string, hover: string }> = {
    //primary: { bg: "bg-[#0062CC]/10", text: "text-[#0062CC]", hover: "group-hover:text-[#0062CC]" },
    //secondary: { bg: "bg-[#16D6FB]/10", text: "text-[#16D6FB]", hover: "group-hover:text-[#16D6FB]" },
    //accent: { bg: "bg-[#7209B7]/10", text: "text-[#7209B7]", hover: "group-hover:text-[#7209B7]" },
    //success: { bg: "bg-[#10B981]/10", text: "text-[#10B981]", hover: "group-hover:text-[#10B981]" },
    //warning: { bg: "bg-[#F59E0B]/10", text: "text-[#F59E0B]", hover: "group-hover:text-[#F59E0B]" },
    primary: { bg: "bg-primary/10", text: "text-primary", hover: "group-hover:text-primary" }, // Orange
    secondary: { bg: "bg-secondary/10", text: "text-secondary", hover: "group-hover:text-secondary" }, // Purple
    accent: { bg: "bg-accent/10", text: "text-accent", hover: "group-hover:text-accent" }, // Keep original accent or choose new
    success: { bg: "bg-green-500/10", text: "text-green-500", hover: "group-hover:text-green-500" }, // Example: explicit green
    warning: { bg: "bg-yellow-500/10", text: "text-yellow-500", hover: "group-hover:text-yellow-500" }, // Example: explicit yellow
  };

  return (
    <section id="research" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">Our Research Areas</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Exploring innovative approaches to drug discovery
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {researchAreas.map((area, index) => (
            <motion.div 
              key={index}
              className="bg-slate-50 rounded-xl p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group"
              variants={item}
            >
              <div className={`w-14 h-14 rounded-full ${colorMap[area.color].bg} flex items-center justify-center mb-6`}>
                <i className={`fas fa-${area.icon} ${colorMap[area.color].text} text-xl`}></i>
              </div>
              <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-slate-800 mb-3">{area.title}</h3>
              <p className="text-slate-600 mb-4">
                {area.description}
              </p>
              <a href="#" className={`${colorMap[area.color].text} font-medium inline-flex items-center group`}>
                Learn more <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
