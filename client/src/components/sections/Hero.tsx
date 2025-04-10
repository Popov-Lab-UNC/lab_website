import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center text-white pt-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-center">
          <motion.div
            className="order-2 md:order-1" // Text content in the first (larger) column on md+
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-white">
              The BIND Lab:<br></br>Biophysics and Informatics for Drug Discovery
            </h1>
            <p className="text-2xl sm:text-xl opacity-90 mb-8 text-white">
              Located at the University of North Carolina at Chapel Hill, our lab uses computational approaches to discover new drugs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="px-6 py-6 bg-white text-primary font-medium rounded-lg shadow
                  hover:bg-white hover:text-primary/90 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 ease-in-out h-auto"
              >
                <a href="#research">Explore Our Research</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-full sm:h-96 md:h-[500px] overflow-hidden">
                <img
                  src="/images/3mxf_v1_cropped.png"
                  alt="Protein structure with small molecule"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}