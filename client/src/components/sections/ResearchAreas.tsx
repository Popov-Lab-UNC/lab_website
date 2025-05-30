import { motion } from "framer-motion";
import { researchAreas } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faDna, faCapsules, faAtom } from "@fortawesome/free-solid-svg-icons";

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
    primary: { bg: "bg-primary/10", text: "text-primary", hover: "group-hover:text-primary" },
    secondary: { bg: "bg-secondary/10", text: "text-secondary", hover: "group-hover:text-secondary" },
    tertiary: { bg: "bg-tertiary/10", text: "text-tertiary", hover: "group-hover:text-tertiary" },
    quaternary: { bg: "bg-quaternary/10", text: "text-quaternary", hover: "group-hover:text-quaternary" }, 
  };

  const iconMap = {
    robot: faRobot,
    dna: faDna,
    capsules: faCapsules,
    atom: faAtom,
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
            Learn about our approach to drug discovery
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
                <FontAwesomeIcon icon={iconMap[area.icon]} className={colorMap[area.color].text} />
                {/*<i className={`fas fa-${area.icon} ${colorMap[area.color].text} text-xl`}></i>*/}
              </div>
              <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-slate-800 mb-3">{area.title}</h3>
              <p className="text-slate-600 mb-4">
                {area.description}
              </p>
              <a href={area.link} className={`${colorMap[area.color].text} font-medium inline-flex items-center group`}>
                Learn more <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
