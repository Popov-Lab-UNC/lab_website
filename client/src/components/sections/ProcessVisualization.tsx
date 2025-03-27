import { motion } from "framer-motion";
import { processSteps, advancedStages } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function ProcessVisualization() {
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
  const colorMap: Record<string, { bg: string, text: string, border: string }> = {
    primary: { bg: "bg-[#0062CC]/20", text: "text-[#0062CC]", border: "bg-[#0062CC]/30" },
    secondary: { bg: "bg-[#16D6FB]/20", text: "text-[#16D6FB]", border: "bg-[#16D6FB]/30" },
    accent: { bg: "bg-[#7209B7]/20", text: "text-[#7209B7]", border: "bg-[#7209B7]/30" },
    success: { bg: "bg-[#10B981]/20", text: "text-[#10B981]", border: "bg-[#10B981]/30" },
    warning: { bg: "bg-[#F59E0B]/20", text: "text-[#F59E0B]", border: "bg-[#F59E0B]/30" },
  };

  return (
    <section id="process" className="py-24 bg-slate-800 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-slate-900/80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">Our Drug Discovery Process</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            A systematic approach to transforming scientific insights into therapeutic breakthroughs
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 text-center transition-all hover:scale-105 hover:brightness-110"
                variants={item}
              >
                <div className={`w-16 h-16 ${colorMap[step.color].bg} rounded-full flex items-center justify-center mx-auto mb-5`}>
                  <i className={`fas fa-${step.icon} ${colorMap[step.color].text} text-2xl`}></i>
                </div>
                <span className={`inline-block ${colorMap[step.color].bg} ${colorMap[step.color].text} text-sm px-3 py-1 rounded-full mb-3`}>{step.phase}</span>
                <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-slate-300 mb-4">
                  {step.description}
                </p>
                <div className={`h-1 w-20 ${colorMap[step.color].border} mx-auto`}></div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Advanced Stages */}
          <div className="mt-12 pt-12 border-t border-slate-700">
            <h3 className="font-['Space_Grotesk'] font-semibold text-2xl text-white text-center mb-8">Advanced Development Stages</h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {advancedStages.map((stage, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 text-center transition-all hover:scale-105 hover:brightness-110"
                  variants={item}
                >
                  <div className={`w-14 h-14 ${colorMap[stage.color].bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`fas fa-${stage.icon} ${colorMap[stage.color].text} text-xl`}></i>
                  </div>
                  <h4 className="font-['Space_Grotesk'] font-semibold text-lg text-white mb-2">{stage.title}</h4>
                  <p className="text-slate-300">
                    {stage.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              className="px-6 py-3 bg-gradient-to-r from-[#0062CC] to-[#7209B7] text-white font-medium rounded-lg hover:shadow-lg transition-all h-auto"
            >
              <a href="#">Learn More About Our Process</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
