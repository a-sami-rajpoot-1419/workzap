import React from 'react';
import { Button } from './ui/button';
import { Linkedin, Facebook, Youtube, Instagram, Mail } from 'lucide-react';
import { mockData } from '../data/mock';

export const Footer = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/workzap01/', label: 'LinkedIn' },
    { icon: Facebook, href: mockData.siteConfig.socials.facebook, label: 'Facebook' },
    { icon: Youtube, href: mockData.siteConfig.socials.youtube, label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/workzapofficial_/', label: 'Instagram' }
  ];

  return (
    <footer className="bg-workzap-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Brand */}
          <div className="md:col-span-1">
            <a href="/" aria-label="Go to Workzap home" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-workzap-gold to-workzap-yellow flex items-center justify-center">
                <span className="text-workzap-black font-bold text-xl">W</span>
              </div>
              <span className="font-bebas text-2xl text-white">Workzap</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Buy back your time with trusted virtual assistants. Fast matching, backup coverage, simple monthly plans.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <ul className="space-y-3">
              <li>
                <a href="#roles" className="text-gray-400 hover:text-workzap-gold transition-colors duration-200">
                  Our Roles
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-workzap-gold transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-workzap-gold transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-workzap-gold transition-colors duration-200">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4">Legal & Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-workzap-gold transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-workzap-gold transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:hello@workzap.com" className="text-gray-400 hover:text-workzap-gold transition-colors duration-200 flex items-center space-x-2">
                  <Mail size={16} />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4">Ready to Get Started?</h4>
            <p className="text-gray-400 text-sm mb-6">
              Book a discovery call and see if Workzap is the right fit for you.
            </p>
            <Button
              onClick={scrollToFAQ}
              className="w-full bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth font-semibold"
            >
              Book a Call
            </Button>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-workzap-gold transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm text-center md:text-right">
            © 2024 Workzap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};