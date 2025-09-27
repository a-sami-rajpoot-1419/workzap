import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const scrollToFAQ = () => {
  if (window.location.pathname === '/') {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }
  window.location.href = '/#faq-calendly';
};

export const PricingPage = () => (
  <div className="min-h-screen bg-white">
    <Helmet>
      <title>Pricing & Plans — Workzap Virtual Assistants</title>
      <meta name="description" content="Simple, flexible pricing for premium virtual assistants. Lock your rate, scale up or down, and pay $0 until you hire." />
      <meta name="keywords" content="virtual assistant pricing, VA hourly rates, remote assistant cost, dedicated assistant, part-time virtual assistant, startup virtual assistant, offshore VA, WorkZap pricing, hire virtual assistant, flexible VA plans" />
      <link rel="canonical" href="https://workzap.co/pricing" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pricing & Plans — Workzap Virtual Assistants" />
      <meta property="og:description" content="Simple, flexible pricing for premium virtual assistants. Lock your rate, scale up or down." />
      <meta property="og:url" content="https://workzap.co/pricing" />
      <meta property="og:image" content="https://workzap.co/Workzap-logo-white.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pricing & Plans — Workzap" />
      <meta name="twitter:description" content="Simple, flexible pricing for premium virtual assistants." />
      <meta name="twitter:image" content="https://workzap.co/Workzap-logo-white.png" />
    </Helmet>
    <Header />
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
            className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
      <div className="text-center mb-12">
        <h1 className="font-bebas text-5xl text-workzap-black mb-4">WorkZap Pricing & Plans</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Finally, a Virtual Assistant you trust to represent you and your business.<br />
          WorkZap gives you highly-trained, reliable VAs who scale with you. Whether you’re a solo founder, a fast-growing startup, or an established business, our pricing is simple, flexible, and built to deliver ROI from day one.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-10 mb-16">
          <div className="bg-workzap-black rounded-lg p-8 text-white border-2 border-workzap-gold shadow-gold h-full flex flex-col gap-4">
            <h2 className="font-bebas text-2xl text-workzap-gold">Why WorkZap’s Pricing Works for You</h2>
            <ul className="list-disc list-inside text-base text-gray-200 space-y-1 leading-relaxed">
              <li>Transparent hourly rates — no hidden fees.</li>
              <li>Risk‑free start — only pay when you hire.</li>
              <li>Scale anytime with a backup VA guarantee.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold h-full flex flex-col gap-4">
            <h2 className="font-bebas text-2xl text-workzap-black">Lock Your Rate Today</h2>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-1 leading-relaxed">
              <li>Start this week at <span className="font-bold text-workzap-gold">$16/hr</span>.</li>
              <li>Next week, new clients pay <span className="font-bold text-workzap-gold">$18/hr</span>.</li>
              <li>Secure your best rate now — limited time.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-10 mb-16">
          <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold h-full flex flex-col gap-4">
            <h2 className="font-bebas text-2xl text-workzap-black">Subscription Plans</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1 leading-relaxed">
              <li>Full‑Time: 40 hrs/week at $16/hr (≈ $2,560/mo).</li>
              <li>Part‑Time: 20 hrs/week at $18/hr (≈ $1,440/mo).</li>
              <li>Best for founders and teams needing dedicated, reliable support.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold h-full flex flex-col gap-4">
            <h2 className="font-bebas text-2xl text-workzap-black">Scale Up with Add-Ons</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1 leading-relaxed">
              <li>Specialized skills: Marketing, Content/Design, Customer Support (+$2/hr).</li>
              <li>Priority coverage: Weekends + after‑hours (+$199/mo).</li>
              <li>System setup: ClickUp, HubSpot, or GHL (+$499 one‑time).</li>
          </ul>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-10 mb-16">
          <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold h-full flex flex-col gap-4">
            <h2 className="font-bebas text-2xl text-workzap-black">Not Ready Yet?</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1 leading-relaxed">
              <li>Project Pack: 20 hours for $399 flat.</li>
              <li>Shared Assistant: 10 hrs/week at $20/hr.</li>
              <li>No commitment — start small, scale as needed.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 border-2 border-workzap-gold shadow-gold h-full flex flex-col gap-4">
            <h2 className="font-bebas text-2xl text-workzap-black">Stay for the Long Run</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1 leading-relaxed">
              <li>Annual Commit & Save: Pay 12 months, get 2 free + rate lock.</li>
              <li>Backup VA included after 6+ months.</li>
              <li>Direct placement available (one‑time fee).</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12">
        <h2 className="font-bebas text-2xl mb-4 text-workzap-black">Next Step: Speak with a Matchmaker</h2>
        <p className="text-lg text-gray-700 mb-6">WorkZap isn’t about filling seats—we’re about finding your perfect match. Book a 15-minute consult, and we’ll introduce you to your next VA.</p>
        <Button
          onClick={scrollToFAQ}
          size="lg"
          className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow border-2 border-workzap-gold btn-hover transition-smooth"
        >
          Book Your Free Consultation
        </Button>
      </div>
      </div>
    </section>
    <Footer />
  </div>
);
