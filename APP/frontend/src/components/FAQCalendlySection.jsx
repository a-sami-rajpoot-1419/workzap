import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { mockData } from '../data/mock';

export const FAQCalendlySection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq-calendly" className="bg-workzap-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Still not sure? Let's chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - FAQ */}
          <div className="min-h-[740px] flex flex-col">
            <div className="flex-1 space-y-6">
            {mockData.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-workzap-gold focus:ring-inset"
                  aria-expanded={openFAQ === index}
                >
                  <span className="font-semibold text-workzap-black text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-workzap-gold transition-transform duration-200 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>

          {/* Right Column - Calendly */}
          <div className="bg-white rounded-lg p-6 shadow-lg min-h-[740px] flex flex-col">
            <div className="text-center mb-6">
              <h3 className="font-bebas text-2xl text-workzap-black mb-2">
                Still not sure?
              </h3>
              <p className="text-gray-600">
                Let's have a small chat and see if Workzap is the right fit for you.
              </p>
            </div>

            {/* Calendly Embed */}
            <div className="flex-1 rounded-lg overflow-hidden">
              <iframe
                src={mockData.siteConfig.calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book a Discovery Call"
                className="min-h-[600px]"
              ></iframe>
            </div>

            {/* Alternative CTA */}
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  window.open(mockData.siteConfig.calendlyUrl, '_blank');
                }}
                className="text-workzap-gold hover:text-workzap-yellow transition-colors duration-200 text-sm underline"
              >
                Open calendar in new window
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};