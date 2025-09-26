import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're on the home page, scroll directly
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToFAQ = () => {
    scrollToSection('faq-calendly');
  };

  const navItems = [
  { label: 'Roles', href: '#roles' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Careers', href: '/careers' },
  { label: 'EoR', href: '/eor' },
  { label: 'FAQ', href: '#faq-calendly' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'header-scrolled' : 'h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" aria-label="Go to Workzap home">
            <img
              src="/logo-black.png?v=2"
              alt="Workzap Logo"
              className={`${isScrolled ? 'h-20' : 'h-24'} w-auto object-contain transition-all duration-300`}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-workzap-black hover:text-workzap-gold transition-colors duration-200 font-medium"
              onClick={(e) => {
                e.preventDefault();
                if (item.href.startsWith('#')) {
                  const sectionId = item.href.substring(1); // Remove the '#'
                  scrollToSection(sectionId);
                } else {
                  navigate(item.href);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Button
          onClick={scrollToFAQ}
          className="hidden md:flex bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2 focus-gold btn-hover transition-smooth"
        >
          Book a Call
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-workzap-black hover:text-workzap-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-workzap-black hover:text-workzap-gold transition-colors duration-200 font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href.startsWith('#')) {
                    const sectionId = item.href.substring(1); // Remove the '#'
                    scrollToSection(sectionId);
                  } else {
                    navigate(item.href);
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={scrollToFAQ}
              className="w-full bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2 focus-gold btn-hover transition-smooth mt-4"
            >
              Book a Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};