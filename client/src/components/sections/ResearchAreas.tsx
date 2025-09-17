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

  // Maps color names to Tailwind classes with better contrast for links
  const colorMap: Record<string, { bg: string, text: string, hover: string, link: string }> = {
    primary: { 
      bg: "bg-primary/10", 
      text: "text-primary", 
      hover: "group-hover:text-primary",
      link: "text-slate-800 hover:text-primary font-medium"
    },
    secondary: { 
      bg: "bg-secondary/10", 
      text: "text-secondary", 
      hover: "group-hover:text-secondary",
      link: "text-slate-800 hover:text-green-700 font-medium"
    },
    tertiary: { 
      bg: "bg-tertiary/10", 
      text: "text-tertiary", 
      hover: "group-hover:text-tertiary",
      link: "text-slate-800 hover:text-orange-700 font-medium"
    },
    quaternary: { 
      bg: "bg-quaternary/10", 
      text: "text-quaternary", 
      hover: "group-hover:text-quaternary",
      link: "text-slate-800 hover:text-purple-700 font-medium"
    }, 
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
          <p className="text-xl text-slate-600 max-w-xl mx-auto">
            Learn about our approach to drug discovery
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
              <p className="text-slate-600 mb-4 text-lg">
                {area.description}
              </p>
              <a 
                href={area.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center text-lg"
              >
                {index === 0 && "HIDDEN GEM paper"}
                {index === 1 && "DELi Github"}
                {index === 2 && "CICBDD webpage"}
                {index === 3 && "TS paper"}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
