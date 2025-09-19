import React from 'react';
import { Button } from '../components/ui/button';
import { scrollToCalendly } from '../lib/scrollToCalendly';

export const PricingPage = () => (
  <section className="bg-white py-20 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className="font-bebas text-5xl text-workzap-black mb-4">WorkZap Pricing & Plans</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Finally, a Virtual Assistant you trust to represent you and your business.<br />
          WorkZap gives you highly-trained, reliable VAs who scale with you. Whether you’re a solo founder, a fast-growing startup, or an established business, our pricing is simple, flexible, and built to deliver ROI from day one.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-workzap-black rounded-lg p-8 text-white border-2 border-workzap-gold shadow-gold">
          <h2 className="font-bebas text-3xl mb-4 text-workzap-gold">Why WorkZap’s Pricing Works for You</h2>
          <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
            <li>Transparent hourly rates – no hidden fees.</li>
            <li>Start risk-free – only pay when you hire.</li>
            <li>Scale up or down anytime – add or reduce hours as your workload changes.</li>
            <li>Backup VA guarantee – your business never skips a beat.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold">
          <h2 className="font-bebas text-3xl mb-4 text-workzap-black">Lock Your Rate Today</h2>
          <p className="text-lg text-gray-700 mb-2">Start this week at <span className="font-bold text-workzap-gold">$16/hr</span>. Next week, new clients pay <span className="font-bold text-workzap-gold">$18/hr</span>. Act fast to secure the best rate.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold">
          <h2 className="font-bebas text-2xl mb-2 text-workzap-black">Subscription Plans</h2>
          <div className="mb-6">
            <h3 className="font-bebas text-xl text-workzap-black mb-1">Full-Time Assistant</h3>
            <ul className="list-disc list-inside text-gray-700 text-base mb-2">
              <li>40 hrs/week of dedicated support</li>
              <li>$16 per hour (≈ $2,560/mo)</li>
              <li>Perfect for founders, executives, and busy teams who need consistent coverage.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bebas text-xl text-workzap-black mb-1">Part-Time Assistant</h3>
            <ul className="list-disc list-inside text-gray-700 text-base mb-2">
              <li>20 hrs/week of dedicated support</li>
              <li>$18 per hour (≈ $1,440/mo)</li>
              <li>Great for startups, agencies, or solopreneurs who want reliable support without the full-time spend.</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold">
          <h2 className="font-bebas text-2xl mb-2 text-workzap-black">Scale Up with Add-Ons</h2>
          <ul className="list-disc list-inside text-gray-700 text-base mb-2">
            <li>Specialized VA Skills: Add Marketing, Psychologist, Content & Graphic Associate, or Customer Support (+$2/hr).</li>
            <li>Priority Coverage: Weekend + after-hours support (+$199/mo).</li>
            <li>System Setup Package: Done-for-you setup of ClickUp, HubSpot, or GHL (+$499 one-time).</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold">
          <h2 className="font-bebas text-2xl mb-2 text-workzap-black">Not Ready Yet?</h2>
          <ul className="list-disc list-inside text-gray-700 text-base mb-2">
            <li>Project Pack: 20 hours, flat $399. No ongoing contract.</li>
            <li>Shared Assistant: Just 10 hrs/week at $20/hr. Designed for solo founders testing the waters.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold">
          <h2 className="font-bebas text-2xl mb-2 text-workzap-black">Stay for the Long Run</h2>
          <ul className="list-disc list-inside text-gray-700 text-base mb-2">
            <li>Annual Commit & Save: Pay 12 months upfront, get 2 months free + rate lock.</li>
            <li>Backup VA Guarantee: Stay 6+ months, we’ll train a backup VA at no cost so you’re never left hanging.</li>
            <li>Direct Placement Option: Convert your VA into a direct employee for a one-time placement fee.</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12">
        <h2 className="font-bebas text-2xl mb-4 text-workzap-black">Next Step: Speak with a Matchmaker</h2>
        <p className="text-lg text-gray-700 mb-6">WorkZap isn’t about filling seats—we’re about finding your perfect match. Book a 15-minute consult, and we’ll introduce you to your next VA.</p>
        <Button
          onClick={scrollToCalendly}
          size="lg"
          className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow border-2 border-workzap-gold btn-hover transition-smooth"
        >
          Book Your Free Consultation
        </Button>
      </div>
    </div>
  </section>
);
