"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/#home" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/uploads/d8d44bc8-d6d1-4dd3-b350-eebcb0d6acba.png"
              alt="CNSS Logo"
              width={40}
              height={40}
              loading="eager"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 shrink-0"
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/#home" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/#training" className="text-foreground hover:text-primary transition-colors">Training</Link>
            <Link href="/#about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Button asChild size="sm">
              <Link href="/#contact">Get Help</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary shrink-0"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link href="/#home" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
              <Link href="/#services" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Services</Link>
              <Link href="/#training" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Training</Link>
              <Link href="/#about" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>About</Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
              <div className="pt-4 border-t border-border">
                <Button className="w-full" asChild>
                  <Link href="/#contact">Get Help</Link>
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
