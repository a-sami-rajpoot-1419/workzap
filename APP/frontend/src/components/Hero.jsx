import React from 'react';
import { Button } from './ui/button';
import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';
import { mockData } from '../data/mock';

export const Hero = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saadhabib/' },
    { icon: Facebook, href: mockData.siteConfig.socials.facebook },
    { icon: Youtube, href: mockData.siteConfig.socials.youtube },
    { icon: Instagram, href: 'https://www.instagram.com/workzapofficial_/' }
  ];

  return (
    <section className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-workzap-black leading-tight">
                Buy Back Your Time with Trusted Virtual Assistants
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Get matched with pre-vetted VAs in 24 hours. Every plan includes backup coverage so your operations never skip a beat.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-workzap-black">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-workzap-gold rounded-full"></div>
                  <span className="font-medium">Fast matching</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-workzap-gold rounded-full"></div>
                  <span className="font-medium">Backup VA</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-workzap-gold rounded-full"></div>
                  <span className="font-medium">Simple monthly plans</span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToFAQ}
                size="lg"
                className="bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2 focus-gold btn-hover transition-smooth"
              >
                Book a Call
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/hero.jpg"
                alt="Hero image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Founder Social Links - Separate Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm mb-4">Follow our founder:</p>
          <div className="flex justify-center space-x-6">
            {socialIcons.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-workzap-gold transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};