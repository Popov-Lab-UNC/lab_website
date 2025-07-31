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
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";

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
  const [privacyOpen, setPrivacyOpen] = useState(false);

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
    <section id="contact" className="py-24 bg-gradient-to-r from-secondary/30 to-primary/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-6">
                Partner With Us on the Future of Medicine
              </h2>
              <p className="text-xl text-slate-800 mb-8">
                Whether you're looking to join our team or collaborate on research, <br></br> we're excited to connect with fellow innovators.
              </p>
          
              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-slate-700 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-semibold text-slate-800 mb-1 text-lg">Meet With Us</h3>
                    <p className="text-slate-800 text-lg">
                      {contactInfo.address.split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} className="text-slate-700 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-semibold text-slate-800 mb-1 text-lg">Email Us</h3>
                    <p className="text-slate-800 text-lg">
                      <a href={`mailto:${contactInfo.email.general}`} className="transition-colors hover:text-primary">{contactInfo.email.general}</a>
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
                {socialLinks.filter(link => link.platform !== 'linkedin').map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 hover:bg-primary hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-600"
                    aria-label={`Follow us on ${link.platform}`}
                  >
                    {link.icon === 'github' && <FontAwesomeIcon icon={faGithub} className="text-lg" />}
                    {link.icon === 'university' && <FontAwesomeIcon icon={faUniversity} className="text-lg" />} 
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
                        <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-1">Your Name *</Label>
                        <Input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="Jane Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-1">Email Address *</Label>
                        <Input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="jane.doe@example.com"
                          required
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
                      <Label htmlFor="interest" className="text-sm font-medium text-slate-700 mb-1">Interest Area *</Label>
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
                      <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-1">Your Message *</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Tell us about your project or inquiry..."
                        required
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="consent" 
                        checked={formData.consent}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="consent" className="text-sm text-slate-600">
                        I agree to the processing of my data according to the {" "}
                        <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
                          <DialogTrigger asChild>
                            <a href="#" className="text-primary hover:text-primary/80 hover:underline" onClick={e => { e.preventDefault(); setPrivacyOpen(true); }}>Privacy Policy</a>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogTitle>Privacy Policy</DialogTitle>
                            <DialogDescription asChild>
                              <div className="space-y-4 text-left max-h-[60vh] overflow-y-auto">
                                <p><strong>Effective Date:</strong> June 4, 2025</p>
                                <p>
                                  We value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you contact us through this form.
                                </p>
                                <h4 className="font-semibold">1. Information We Collect</h4>
                                <ul className="list-disc ml-6">
                                  <li><strong>Personal Information:</strong> Name, email address, organization, and any other information you provide in your message.</li>
                                  <li><strong>Usage Data:</strong> We may collect non-identifying information about how you interact with our website.</li>
                                </ul>
                                <h4 className="font-semibold">2. How We Use Your Information</h4>
                                <ul className="list-disc ml-6">
                                  <li>To respond to your inquiries or requests.</li>
                                  <li>To improve our website and services.</li>
                                  <li>To comply with legal obligations.</li>
                                </ul>
                                <h4 className="font-semibold">3. Data Sharing</h4>
                                <p>We do not sell or rent your personal information. We may share your data with trusted service providers who assist us in operating our website, as required by law, or to protect our rights.</p>
                                <h4 className="font-semibold">4. Data Security</h4>
                                <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
                                <h4 className="font-semibold">5. Your Rights</h4>
                                <p>You may request to access, correct, or delete your personal information by contacting us.</p>
                                <h4 className="font-semibold">6. Changes to This Policy</h4>
                                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
                                <h4 className="font-semibold">7. Contact</h4>
                                <p>If you have any questions about this Privacy Policy, please contact us using the information provided on this website.</p>
                              </div>
                            </DialogDescription>
                          </DialogContent>
                        </Dialog>
                        .
                      </Label>
                    </div>
                    
                    <div className="text-sm text-slate-500 mb-4">
                      * denotes required fields
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg hover:shadow-lg transition-all h-auto"
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
