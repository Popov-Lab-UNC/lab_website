import { footerLinks, socialLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import if needed for icons
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-5xl mx-auto">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-['Space_Grotesk'] font-bold text-xl">BIND</span>
              </div>
              <span className="font-['Space_Grotesk'] font-semibold text-2xl text-white">The BIND Lab</span>
            </div>
            <p className="mb-6 text-lg">
              Shaping the future of biophysics and informatics for drug discovery.
            </p>
            <div className="flex space-x-4">
              {socialLinks.filter(link => link.platform !== 'linkedin').map((link) => (
                <a 
                  key={link.platform}
                  href={link.url} 
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${link.platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform === 'github' && <FontAwesomeIcon icon={faGithub} className="text-2xl" />}
                  {link.platform === 'university' && <i className="fas fa-university text-lg"></i>}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors text-lg"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors text-lg"
                    aria-label={`Visit ${link.label}`}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*
          <div>
            <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-white mb-4">Newsletter</h3>
            <p className="mb-4">
              Stay updated with our latest research breakthroughs and opportunities.
            </p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-[#0062CC] text-white"
                />
                <Button 
                  type="submit"
                  className="px-4 py-2 bg-[#0062CC] text-white rounded-r-lg hover:bg-[#0062CC]/90 transition-colors"
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </form>
            <p className="text-sm">
              By subscribing, you agree to our <a href="#" className="text-[#0062CC] hover:underline">Privacy Policy</a>.
            </p>
          </div>
          */}
        </div>
        
        <p className="text-base text-center mt-12">© {new Date().getFullYear()} The BIND Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}
