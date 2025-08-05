import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-text-hero">Client Health Tracker</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-medical hover:text-primary transition-colors">
              Features
            </a>
            <a href="#templates" className="text-text-medical hover:text-primary transition-colors">
              Templates
            </a>
            <a href="#testimonials" className="text-text-medical hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-text-medical hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-text-medical">
              Log In
            </Button>
            <Button variant="cta" size="lg">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-text-hero" />
            ) : (
              <Menu className="w-6 h-6 text-text-hero" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-text-medical hover:text-primary transition-colors">
                Features
              </a>
              <a href="#templates" className="text-text-medical hover:text-primary transition-colors">
                Templates
              </a>
              <a href="#testimonials" className="text-text-medical hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-text-medical hover:text-primary transition-colors">
                Pricing
              </a>
            </nav>
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="ghost" className="text-text-medical">
                Log In
              </Button>
              <Button variant="cta" size="lg">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;