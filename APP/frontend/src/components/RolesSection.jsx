import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

export const RolesSection = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleCard = (roleSlug) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(roleSlug)) {
      newFlippedCards.delete(roleSlug);
    } else {
      newFlippedCards.add(roleSlug);
    }
    setFlippedCards(newFlippedCards);
  };

  const handleKeyPress = (event, roleSlug) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(roleSlug);
    } else if (event.key === 'Escape') {
      const newFlippedCards = new Set(flippedCards);
      newFlippedCards.delete(roleSlug);
      setFlippedCards(newFlippedCards);
    }
  };

  return (
    <section id="roles" className="bg-workzap-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
            Roles We Cover
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From admin tasks to creative projects, our VAs are trained in the skills that matter to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.roles.map((role) => (
            <div
              key={role.slug}
              className={`flip-card h-80 cursor-pointer ${
                flippedCards.has(role.slug) ? 'flipped' : ''
              }`}
              onClick={() => toggleCard(role.slug)}
              onKeyDown={(e) => handleKeyPress(e, role.slug)}
              tabIndex={0}
              role="button"
              aria-expanded={flippedCards.has(role.slug)}
              aria-label={`${role.title} role card. Press Enter to flip.`}
            >
              <div className="flip-card-inner h-full">
                {/* Front of Card */}
                <div className="flip-card-front bg-white border-2 border-workzap-gold shadow-gold hover:shadow-gold-hover transition-shadow duration-300">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 relative overflow-hidden">
                      <img
                        src={role.frontImage}
                        alt={role.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="font-bebas text-2xl text-workzap-black text-center">
                        {role.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back bg-white border-2 border-workzap-gold shadow-gold p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-bebas text-2xl text-workzap-black text-center">
                      {role.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {role.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-workzap-gold text-workzap-black text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToFAQ();
                      }}
                      className="w-full bg-workzap-black text-white hover:bg-workzap-black-2 btn-hover transition-smooth"
                    >
                      <Phone size={16} className="mr-2" />
                      Book a Call
                    </Button>
                    
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Navigate to role detail page (placeholder)
                        window.location.href = `/roles/${role.slug}`;
                      }}
                      variant="outline"
                      className="w-full border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white btn-hover transition-smooth"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={scrollToFAQ}
            size="lg"
            className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth"
          >
            Book a Call to Get Matched
          </Button>
        </div>
      </div>
    </section>
  );
};