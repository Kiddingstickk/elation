import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from "@/assets/elation_auto_repair_logo.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const handleScroll = () => {
      if (hero) {
        const triggerPoint = hero.offsetHeight * 0.8;
        setIsScrolled(window.scrollY > triggerPoint);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#work', label: 'Our Work' },
    { href: '#about', label: 'About' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  if (!isScrolled) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-md transition-opacity duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src= {logo} // Update with your actual path
              alt="Elation Auto Repair Logo"
              className="w-14 h-auto object-contain"
            />
          </a>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+15551234567"
              className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium"> +1 (410) 617 8059</span>
            </a>

            <Button className="hidden md:flex btn-primary px-6 py-5 font-display text-lg">
              Book Service
            </Button>

            <button
              className="p-2 text-foreground hover:text-primary transition-colors border border-border rounded hover:border-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 bg-secondary/95 border-b border-border shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors uppercase tracking-wider py-3 px-4 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-border">
            <a
              href="tel:+1 (410) 617 8059"
              className="flex items-center gap-2 text-foreground mb-4 md:hidden px-4"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">+1 (410) 617 8059</span>
            </a>
            <Button
              className="btn-primary w-full py-5 font-display text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Service
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;