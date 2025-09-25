import React, { useState, useEffect } from 'react';
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

            {/* Right Column - Video (YouTube embed, same as main page) */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/da29yg0xNW4"
                  title="Workzap Testimonial"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
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

      {/* Related Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bebas text-4xl text-workzap-black text-center mb-16">
            What Clients Say About Our {role.title} VAs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Take the first testimonial as an example */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl text-workzap-black">
                  {mockData.testimonials[0].name}
                </h3>
                <p className="text-gray-600">{mockData.testimonials[0].company}</p>
              </div>

              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <CheckCircle
                    key={i}
                    size={16}
                    className="text-workzap-gold"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                "{mockData.testimonials[0].quote}"
              </blockquote>

              <Button
                onClick={scrollToFAQ}
                className="bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2"
              >
                <Phone size={16} className="mr-2" />
                Book a Call
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                {/* Use video element for Steen Rasmussen testimonial - consistent with main page */}
                <video
                  controls
                  className="aspect-video w-full h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100 object-cover"
                  style={{ objectFit: 'cover' }}
                >
                  <source src={mockData.testimonials[0].videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};