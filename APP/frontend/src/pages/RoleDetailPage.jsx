import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Phone, ArrowLeft } from 'lucide-react';
import { mockData } from '../data/mock';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';

export const RoleDetailPage = () => {
  const { slug } = useParams();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const foundRole = mockData.roles.find(r => r.slug === slug);
    setRole(foundRole);
  }, [slug]);

  const scrollToFAQ = () => {
    window.location.href = '/#faq-calendly';
  };

  // No video in hero; showing image instead

  if (!role) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <Header />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-bebas text-4xl text-workzap-black mb-6">Role Not Found</h1>
          <p className="text-gray-600 mb-8">The role you're looking for doesn't exist.</p>
          <Button onClick={() => window.location.href = '/'} className="bg-workzap-black text-white">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
        <Footer />
        <StickyCTA />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${role.title} — Virtual Assistant Role | Workzap`}</title>
        <meta name="description" content={role.fullDesc} />
        <link rel="canonical" href={`https://workzap.co/roles/${role.slug}`} />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white mb-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="font-bebas text-4xl md:text-5xl text-workzap-black mb-6">
                  {role.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {role.fullDesc}
                </p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="font-semibold text-workzap-black text-lg mb-4">Tools We Work With</h3>
                <div className="flex flex-wrap gap-3">
                  {role.tools.map((tool) => (
                    <Badge
                      key={tool}
                      className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={scrollToFAQ}
                size="lg"
                className="bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2 focus-gold btn-hover transition-smooth"
              >
                <Phone size={16} className="mr-2" />
                Get Matched with a {role.title} VA
              </Button>
            </div>

            {/* Right Column - Role Image (same as main section image) */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={role.frontImage}
                  alt={role.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-workzap-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Deliverables */}
            <div>
              <h2 className="font-bebas text-3xl text-white mb-8">What You'll Get</h2>
              <div className="space-y-4">
                {role.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle size={20} className="text-workzap-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Workflow */}
            <div>
              <h2 className="font-bebas text-3xl text-white mb-8">Sample Workflow</h2>
              <div className="space-y-6">
                {role.workflow.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-workzap-gold text-workzap-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button
              onClick={scrollToFAQ}
              size="lg"
              className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth"
            >
              <Phone size={16} className="mr-2" />
              Book Your Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials removed on role pages as requested */}

      <Footer />
      <StickyCTA />
    </div>
  );
};