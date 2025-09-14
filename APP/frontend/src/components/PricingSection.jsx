import React from 'react';
import { Button } from './ui/button';
import { Check, Star, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

export const PricingSection = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLabel = (index) => {
    const labels = ["Best for Solo Founders", "Most Popular", "Scaling Teams"];
    return labels[index];
  };

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-workzap-black mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Scale up or down anytime with no long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockData.pricing.map((plan, index) => (
            <div
              key={plan.plan}
              className={`relative bg-workzap-black border-2 border-workzap-gold shadow-gold hover:shadow-gold-hover transition-all duration-300 rounded-lg overflow-hidden ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-workzap-gold text-workzap-black text-center py-2 font-semibold text-sm">
                  <Star size={16} className="inline mr-1" />
                  {getLabel(index)}
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  {!plan.popular && (
                    <div className="text-workzap-gold text-sm font-medium mb-2">
                      {getLabel(index)}
                    </div>
                  )}
                  
                  <h3 className="font-bebas text-3xl text-white mb-2">
                    {plan.plan}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-workzap-gold">
                      {plan.price}
                    </span>
                    <span className="text-gray-300 ml-2">per month</span>
                  </div>
                  
                  <div className="text-workzap-yellow font-medium text-lg mb-2">
                    {plan.hours}
                  </div>
                  
                  <p className="text-gray-400 text-sm">
                    {plan.desc}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check size={20} className="text-workzap-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={scrollToFAQ}
                  className={`w-full btn-hover transition-smooth ${
                    plan.popular
                      ? 'bg-workzap-gold text-workzap-black hover:bg-workzap-yellow'
                      : 'bg-white text-workzap-black hover:bg-gray-100 border-2 border-workzap-gold'
                  }`}
                >
                  <Phone size={16} className="mr-2" />
                  Book a Call
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Microcopy */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Pause or scale anytime. Backup VA included in all plans.
          </p>
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={scrollToFAQ}
            size="lg"
            className="bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2 focus-gold btn-hover transition-smooth"
          >
            Start Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};