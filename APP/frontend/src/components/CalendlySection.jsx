import React from 'react';
import { mockData } from '../data/mock';

// Reusable Calendly booking section used across pages
export const CalendlySection = ({ id = 'faq-calendly' }) => {
  return (
    <section id={id} className="bg-workzap-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-lg p-6 shadow-lg min-h-[740px] flex flex-col">
          {/* Branding */}
          <div className="flex items-center justify-center mb-4">
            <a href="/" aria-label="Go to Workzap home" className="inline-flex items-center">
              <img
                src="/Workzap-logo-white.png"
                alt="Workzap"
                className="h-6 w-auto object-contain"
              />
            </a>
          </div>
          <div className="text-center mb-6">
            <h3 className="font-bebas text-2xl text-workzap-black mb-2">Still not sure?</h3>
            <p className="text-gray-600">Let's have a small chat and see if Workzap is the right fit for you.</p>
          </div>

          <div className="flex-1 rounded-lg overflow-hidden">
            <iframe
              src={mockData.siteConfig.calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a Discovery Call"
              className="min-h-[600px]"
              allow="payment"
              allowPaymentRequest
            ></iframe>
          </div>

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
    </section>
  );
};

export default CalendlySection;
