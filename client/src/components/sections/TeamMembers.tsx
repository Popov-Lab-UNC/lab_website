import { motion } from "framer-motion";
import { teamMembers, socialLinks } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUniversity, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

export default function TeamMembers() {
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

  const colorMap: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary/80",
    quaternary: "text-quaternary",
  };

  const hoverColorMap: Record<string, string> = {
    primary: "hover:text-primary",
    secondary: "hover:text-secondary",
    tertiary: "hover:text-tertiary/80",
    quaternary: "hover:text-quaternary",
  };

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin': return faLinkedinIn;
      case 'github': return faGithub;
      case 'googlescholar': return faGraduationCap
      default: return undefined;
    }
  }

  return (
    // 1. Change section background
    <section id="team" className="py-24 bg-slate-900"> {/* Changed bg-slate-50 to bg-slate-900 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 2. Change header text colors */}
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4"> {/* Changed text-slate-800 to text-white */}
            Our Team
          </h2>
          <p className="text-xl text-slate-300 max-w-xl mx-auto"> {/* Increased from text-lg to text-xl */}
            Meet the people behind our discoveries
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              // 3. Update card styling
              className={cn(
                "rounded-xl overflow-hidden transition-all",
                "bg-slate-800/50 border border-slate-700", // Dark background and border
                "hover:shadow-lg hover:border-slate-600" // Keep shadow or use hover:scale-105 hover:brightness-110
              )}
              variants={item}
            >
              <div className="w-44 h-44 rounded-full overflow-hidden mx-auto mt-6 mb-5 border-2 border-slate-500 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center" // Added object-center
                  />
              </div>
              <div className="p-6 pt-0">
                 {/* Change name text color */}
                <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-center text-white mb-1">{member.name}</h3>
                {/* Role color remains dynamic */}
                <p className={`${colorMap[member.color]} text-center font-medium mb-3 text-lg`}>{member.role}</p>
                 {/* Change bio text color */}
                <p className="text-slate-300 mb-4 text-base"> {/* Increased font size from text-sm to text-base */}
                  {member.bio}
                </p>
                {/* 3. Update social icon base color */}
                <div className="flex items-center space-x-3">
                  {/* Example: Add actual links based on member data */}
                  {member.linkedin && (
                     <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`text-slate-400 ${hoverColorMap[member.color]} transition-colors`} aria-label={`Visit ${member.name}'s LinkedIn profile`}>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  )}
                   {member.github && (
                     <a href={member.github} target="_blank" rel="noopener noreferrer" className={`text-slate-400 ${hoverColorMap[member.color]} transition-colors`} aria-label={`Visit ${member.name}'s GitHub profile`}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {member.googlescholar && (
                     <a href={member.googlescholar} target="_blank" rel="noopener noreferrer" className={`text-slate-400 ${hoverColorMap[member.color]} transition-colors`} aria-label={`View ${member.name}'s Google Scholar profile`}>
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}