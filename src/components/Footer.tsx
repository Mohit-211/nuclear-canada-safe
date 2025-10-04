import { Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="text-lg font-bold">Canadian Nuclear Safety Services Inc.</h3>
              <p className="text-sm opacity-90">Radiation Safety and Nuclear Regulatory Specialists</p>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Professional consulting and training company specializing in health physics, 
              radiation safety, regulatory compliance, and CNSC liaison services. Our staff 
              includes former CNSC inspectors, health physicists, and licensing specialists.
            </p>
            <p className="text-xs opacity-75">
              Done Right for You.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#services" className="hover:text-primary transition-colors">Auditing & Inspection</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Emergency Response</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Safety Programs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Professional Training</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Waste Disposal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Emergency & General</div>
                  <div className="opacity-90">705-991-2234 or 1-800-371-6853</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="opacity-90">info@nuclearsafety.ca</div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="opacity-90">www.nuclearsafety.ca</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <div>
              © {new Date().getFullYear()} Canadian Nuclear Safety Services Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/terms-privacy" className="hover:text-primary transition-colors">Terms &amp; Privacy</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="text-xs opacity-75 mt-4 text-center md:text-left">
            Professional radiation safety consulting across Industrial, Medical, Academic, and Government sectors in Canada.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;