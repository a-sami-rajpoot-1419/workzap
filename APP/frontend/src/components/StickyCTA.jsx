import React from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

export const StickyCTA = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={scrollToFAQ}
        size="lg"
        className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow shadow-lg hover:shadow-xl transition-all duration-300 btn-hover group"
      >
        <Phone size={20} className="mr-2 group-hover:animate-pulse" />
        <span className="hidden sm:inline">Book a Call</span>
        <span className="sm:hidden">Call</span>
      </Button>
    </div>
  );
};