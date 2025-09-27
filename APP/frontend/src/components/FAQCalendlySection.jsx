import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { mockData } from '../data/mock';
import { CalendlySection } from './CalendlySection';

export const FAQCalendlySection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Calendly Section (reused component) */}
      <CalendlySection id="faq-calendly" />

      {/* FAQ Section (full width in its own section) */}
      <section id="faq" className="bg-workzap-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Got questions? We've got answers.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {mockData.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-workzap-gold focus:ring-inset"
                    aria-expanded={openFAQ === index}
                  >
                    <span className="font-semibold text-workzap-black text-lg">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-workzap-gold transition-transform duration-200 ${openFAQ === index ? 'transform rotate-180' : ''}`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};