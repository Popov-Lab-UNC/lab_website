import { motion } from "framer-motion";
import { teamMembers, socialLinks } from "@/lib/constants"; // Assuming socialLinks are defined here too
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons"; // Example solid icon
import { cn } from "@/lib/utils"; // Import cn if not already

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

  // Maps color names to text color classes (Should still work on dark)
  const colorMap: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    success: "text-green-500",
    warning: "text-yellow-500",
  };

  // Maps color names to hover color classes (Should still work on dark)
  const hoverColorMap: Record<string, string> = {
    primary: "hover:text-primary",
    secondary: "hover:text-secondary",
    accent: "hover:text-accent",
    success: "hover:text-green-500",
    warning: "hover:text-yellow-500",
  };

  // Function to get appropriate icon
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin': return faLinkedinIn;
      case 'github': return faGithub;
      default: return undefined; // Or a default icon
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
          <p className="text-lg text-slate-300 max-w-xl mx-auto"> {/* Changed text-slate-600 to text-slate-300 */}
            Meet the minds behind our discoveries
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
              <div className="h-60 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center" // Added object-center
                />
              </div>
              <div className="p-6">
                 {/* Change name text color */}
                <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-white mb-1">{member.name}</h3>
                {/* Role color remains dynamic */}
                <p className={`${colorMap[member.color]} font-medium mb-3`}>{member.role}</p>
                 {/* Change bio text color */}
                <p className="text-slate-300 mb-4 text-sm"> {/* Made text slightly smaller, changed color */}
                  {member.bio}
                </p>
                {/* 3. Update social icon base color */}
                <div className="flex items-center space-x-3">
                  {/* Example: Add actual links based on member data */}
                  {member.linkedin && (
                     <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`text-slate-400 ${hoverColorMap[member.color]} transition-colors`}>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  )}
                   {member.github && (
                     <a href={member.github} target="_blank" rel="noopener noreferrer" className={`text-slate-400 ${hoverColorMap[member.color]} transition-colors`}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                   {/* Add more icons based on available data */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}