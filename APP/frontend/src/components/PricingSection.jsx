import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { mockData } from '../data/mock';

export const PricingSection = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pricing tiles as per image

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-workzap-black mb-6">100% Contingent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">You only pay when you hire</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Full Time Subscription */}
          <div className="relative bg-workzap-black border-2 border-workzap-gold shadow-gold hover:shadow-gold-hover transition-all duration-300 rounded-lg overflow-hidden">
            <div className="p-8 pt-8">
              <div className="text-center mb-8">
                <div className="text-workzap-gold text-sm font-medium mb-2">Subscription</div>
                <h3 className="font-bebas text-3xl text-white mb-2">Full Time</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-workzap-gold">$16</span>
                  <span className="text-gray-300 ml-2">per hour</span>
                </div>
                <div className="text-workzap-yellow font-medium text-lg mb-2">Starting at</div>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Dedicated full-time VA (≈160 hrs/month)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Managed payroll, taxes, and EoR compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Senior talent matching and quick onboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Time tracking and monthly performance reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Free replacement guarantee</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Part Time Subscription */}
          <div className="relative bg-workzap-black border-2 border-workzap-gold shadow-gold hover:shadow-gold-hover transition-all duration-300 rounded-lg overflow-hidden transform scale-105">
            <div className="p-8 pt-8">
              <div className="text-center mb-8">
                <div className="text-workzap-gold text-sm font-medium mb-2">Subscription</div>
                <h3 className="font-bebas text-3xl text-white mb-2">Part Time</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-workzap-gold">$18</span>
                  <span className="text-gray-300 ml-2">per hour</span>
                </div>
                <div className="text-workzap-yellow font-medium text-lg mb-2">Starting at</div>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Part-time VA (≈80 hrs/month)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Managed payroll, taxes, and EoR compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Senior talent matching and quick onboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Flexible schedules across time zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Free replacement guarantee</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Direct Placements - Consultation */}
          <div className="relative bg-workzap-black border-2 border-workzap-gold shadow-gold hover:shadow-gold-hover transition-all duration-300 rounded-lg overflow-hidden">
            <div className="p-8 pt-8">
              <div className="text-center mb-8">
                <div className="text-workzap-gold text-sm font-medium mb-2">Direct Placements</div>
                <h3 className="font-bebas text-3xl text-white mb-2">Consultation</h3>
                <div className="mb-4">
                  <span className="text-gray-300 ml-2">Speak to an Expert and Get the Pricing!</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>One-time placement fee</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Targeted sourcing and deep vetting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Contract drafting and onboarding support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>90-day replacement guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-workzap-gold mt-0.5" />
                  <span>Pay only when you hire</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Explore Pricing CTA under tiles */}
        <div className="mt-12 text-center">
          <Button asChild className="inline-flex items-center justify-center gap-2 btn-hover transition-smooth bg-workzap-gold text-workzap-black hover:bg-workzap-yellow">
            <a href="/pricing">Explore Pricing</a>
          </Button>
        </div>
      </div>
    </section>
  );
};