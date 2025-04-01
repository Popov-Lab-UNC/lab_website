import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo, interestAreas, socialLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUniversity, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      toast({
        title: "Please fill out all required fields",
        description: "All fields except organization are required.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.consent) {
      toast({
        title: "Please agree to the Privacy Policy",
        description: "You must agree to our Privacy Policy to submit the form.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Send the inquiry to the backend
      const response = await apiRequest("POST", "/api/inquiries", formData);
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your inquiry has been submitted. We'll get back to you soon.",
          variant: "default"
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          organization: "",
          interest: "",
          message: "",
          consent: false
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-secondary/50 to-primary/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-700 mb-6">
                Partner With Us on the Future of Medicine
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Whether you're looking to join our team or collaborate on research, <br></br> we're excited to connect with fellow innovators.
              </p>
          
              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-semibold text-slate-700 mb-1">Meet With Us</h3>
                    <p className="text-slate-700">
                      {contactInfo.address.split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-semibold text-slate-700 mb-1">Email Us</h3>
                    <p className="text-slate-700">
                      <a href={`mailto:${contactInfo.email.general}`} className="transition-colors">{contactInfo.email.general}</a>
                    </p>
                  </div>
                </div>
                
                {/*}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7209B7]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-phone-alt text-[#7209B7]"></i>
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-semibold text-slate-800 mb-1">Call Us</h3>
                    <p className="text-slate-600">
                      {contactInfo.phone}<br />
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>*/}
              </div>
              
              <div className="flex space-x-5">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 hover:bg-primary hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-600"
                    aria-label={`Follow us on ${link.platform}`}
                  >
                    {link.icon === 'linkedin-in' && <FontAwesomeIcon icon={faLinkedinIn} />}
                    {link.icon === 'github' && <FontAwesomeIcon icon={faGithub} />}
                    {link.icon === 'university' && <FontAwesomeIcon icon={faUniversity} />} 
                    {/* Ensure correct icons are defined in constants.ts */}
                    {/* Example using FontAwesomeIcon: */}
                    {/* <FontAwesomeIcon icon={link.icon === 'linkedin-in' ? faLinkedinIn : link.icon === 'github' ? faGithub : faUniversity} /> */}
                    {/* Needs proper mapping based on `constants.ts` icon values */}
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-50 rounded-2xl p-8 shadow-sm">
                <h3 className="font-['Space_Grotesk'] font-bold text-2xl text-slate-800 mb-6">Get in Touch</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-1">Your Name</Label>
                        <Input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-1">Email Address</Label>
                        <Input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="jane.doe@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="organization" className="text-sm font-medium text-slate-700 mb-1">Organization</Label>
                      <Input 
                        type="text" 
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Company or Institution"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="interest" className="text-sm font-medium text-slate-700 mb-1">Interest Area</Label>
                      <Select onValueChange={handleSelectChange} value={formData.interest}>
                      <SelectTrigger className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {interestAreas.map((interest) => (
                            <SelectItem key={interest.value} value={interest.value}>
                              {interest.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-1">Your Message</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="consent" 
                        checked={formData.consent}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="consent" className="text-sm text-slate-600">
                        I agree to the processing of my data according to the <a href="#" className="text-[#0062CC] hover:underline">Privacy Policy</a>.
                      </Label> {/* Replace # with actual link */}
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:shadow-lg transition-all h-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
