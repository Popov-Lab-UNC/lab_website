import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      // Keep min-h-screen and flex items-center for vertical centering
      // Use the original padding progression, maybe slightly moderated on lg
      className="min-h-screen flex items-center text-white pt-16 bg-gradient-to-r from-primary to-secondary"
    >
      {/* Use the standard container for consistent max-width and padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28"> {/* Adjusted lg padding slightly from 32 */}
        {/* Keep original grid structure and gap */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Text Content Column */}
          <motion.div
            className="order-2 md:order-1" // Keep original order logic
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline: Add larger text sizes for bigger screens */}
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 text-white">
              The BIND Lab:<br />Biophysics and Informatics for Drug Discovery
            </h1>
            {/* Paragraph: Adjust responsive text sizes for better scaling up */}
            {/* Original was text-2xl sm:text-xl (decreasing). Let's make it scale up modestly. */}
            <p className="text-xl sm:text-xl lg:text-2xl opacity-90 mb-8 text-white">
              Located at the University of North Carolina at Chapel Hill, our lab uses computational approaches to discover new drugs.
            </p>
            {/* Button Area: Keep original structure */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                // Use original button styles EXACTLY, add responsive text size
                className="px-6 py-6 bg-white text-primary font-medium rounded-lg shadow
                  hover:bg-white hover:text-primary/90 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 ease-in-out h-auto
                  text-base sm:text-lg" // Added responsive text size
              >
                <a href="#research">Explore Our Research</a>
              </Button>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="order-1 md:order-2" // Keep original order logic
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Image Wrapper:
                - Remove fixed heights (sm:h-96 md:h-[500px]) to allow scaling.
                - Keep w-full to fill the column width.
                - Keep relative for absolute positioning of the image if needed, or just let image flow.
            */}
            <div className="relative w-full"> {/* Removed fixed heights */}
              <img
                src="/images/3mxf_v1_cropped.png"
                alt="Protein structure with small molecule"
                // Image Styling:
                // - w-full: Make image take the full width of its container.
                // - h-auto: Let the height adjust based on the width to maintain aspect ratio.
                // - object-contain or object-cover: Choose based on desired behavior if the container forces a different aspect ratio.
                //   'object-contain' ensures the whole image is visible. 'object-cover' fills the space, potentially cropping.
                //   Given we removed fixed heights, `h-auto` is often sufficient. Let's start simple.
                className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain" // Added max-h and object-contain
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}