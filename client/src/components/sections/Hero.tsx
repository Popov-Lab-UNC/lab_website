import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center text-white pt-16 bg-gradient-to-r from-primary/90 to-secondary/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              The <span className="text-secondary">BIND</span> Lab: Biophysics and Informatics for Drug Discovery
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-xl">
              Located at the University of North Carolina at Chapel Hill, our lab uses computational approaches to discover new drugs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="px-6 py-6 bg-white text-primary font-medium rounded-lg shadow 
                          hover:bg-white hover:text-primary/80 hover:shadow-lg hover:-translate-y-1 
                          transition-all duration-300 ease-in-out h-auto"
              >
                <a href="#research">Explore Our Research</a>
              </Button>
              {/*
              <Button
                asChild
                variant="outline"
                className="px-6 py-6 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all h-auto"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                    window.scrollTo({
                      top: contactSection.offsetTop - headerHeight - 10,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <a href="#contact">Partner With Us</a>
              </Button>*/}
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-72 sm:h-96 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/hero-placeholder.png" // Updated placeholder path
                  alt="Protein structure with small molecule" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/*
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-40 md:w-56"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-flask"></i>
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold">8+</p>
                    <p className="text-slate-500 text-sm">Successful Trials</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-40 md:w-56"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7209B7] rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-microscope"></i>
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold">12M+</p>
                    <p className="text-slate-500 text-sm">Compound Database</p>
                  </div>
                </div>
              </motion.div>
              */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
