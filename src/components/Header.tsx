import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/#home" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/d8d44bc8-d6d1-4dd3-b350-eebcb0d6acba.png" 
              alt="CNSS Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base lg:text-lg font-bold text-foreground leading-tight truncate">
                Canadian Nuclear Safety Services
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight hidden sm:block">
                Radiation Safety and Nuclear Regulatory Specialists
              </p>
              <p className="text-[10px] text-muted-foreground leading-tight sm:hidden">
                Radiation Safety Specialists
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="/#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="/#training" className="text-foreground hover:text-primary transition-colors">Training</a>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Button asChild size="sm">
              <a href="/#contact">Get Help</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary flex-shrink-0"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/#home" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Home</a>
              <a href="/#services" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Services</a>
              <a href="/#training" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Training</a>
              <a href="/#about" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
              <a href="/#contact" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
              <div className="pt-4 border-t border-border">
                <Button className="w-full" asChild>
                  <a href="/#contact">Get Help</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;