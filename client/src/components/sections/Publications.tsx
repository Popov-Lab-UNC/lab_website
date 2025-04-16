import { motion } from "framer-motion";
import { publications } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Publications() {
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

  // Maps color names to classes
  const colorMap: Record<string, { text: string, bg: string }> = {
    primary: { text: "text-primary", bg: "bg-primary/10" },
    secondary: { text: "text-secondary", bg: "bg-secondary/10" },
    tertiary: { text: "text-tertiary", bg: "bg-tertiary/10" },
    quaternary: { text: "text-quaternary0", bg: "bg-quaternary/10" },
    other: {text: "text-slate-500", bg: "bg-slate-500/10" },
  };

  // Map specific tags to colors
  const tagColorMap: Record<string, string> = {
    "Virtual Screening": "primary",
    "DEL Technology": "secondary",
    "Collaborative Drug Discovery": "tertiary",
    "Computational Biophysics": "quaternary",
    "Tool Development": "other",
  };

  // Function to get color for a tag
  const getTagColor = (tag: string) => {
    return tagColorMap[tag] || "primary"; // Default to primary if tag not found
  };

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">Recent Publications</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Our latest contributions to the scientific community
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {publications.map((publication, index) => (
            <motion.div 
              key={index}
              className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              variants={item}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Optional: Keep icon consistent or use publication.color */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${colorMap[getTagColor(publication.tags[0])].bg} rounded-lg flex items-center justify-center`}>
                    <i className={`fas fa-file-alt ${colorMap[getTagColor(publication.tags[0])].text} text-xl`}></i>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-slate-800 mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-slate-600 mb-2">
                    {publication.authors} <span className="italic">{publication.journal}</span> ({publication.year}) {publication.isPreprint && <span className="text-xs bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-sm ml-1">Preprint</span>}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    {publication.tags.map((tag, tagIndex) => (
                        <span 
                        key={tagIndex} 
                        className={`px-3 py-1 ${colorMap[getTagColor(tag)].bg} ${colorMap[getTagColor(tag)].text} rounded-full`}
                        >
                        {tag}
                        </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    asChild
                    variant="link"
                    className={`text-primary hover:text-primary/80 p-0 h-auto`}
                  >
                    <a href={publication.link} target="_blank" rel="noopener noreferrer">
                      View Paper
                      <i className="fas fa-external-link-alt ml-1.5 text-xs"></i>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="text-center mt-10">
            <a href="https://scholar.google.com/citations?hl=en&user=hzCErdwAAAAJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 hover:underline text-lg font-medium">
              View All Publications
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
