import React, { useState } from 'react';
import { Button } from './ui/button';
import { Play, Star, Phone } from 'lucide-react';
import { mockData } from '../data/mock';
export const TestimonialsSection = () => {
  const [playingVideos, setPlayingVideos] = useState(new Set());

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoPlay = (testimonialId) => {
    const newPlayingVideos = new Set(playingVideos);
    newPlayingVideos.add(testimonialId);
    setPlayingVideos(newPlayingVideos);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-workzap-gold fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-workzap-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from founders and teams who've transformed their operations with Workzap.
          </p>
        </div>

        <div className="space-y-16">
          {mockData.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Review Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                {/* Name */}
                <div>
                  <h3 className="font-semibold text-xl text-workzap-black">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* CTA */}
                <Button
                  onClick={scrollToFAQ}
                  className="bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2 focus-gold btn-hover transition-smooth"
                >
                  <Phone size={16} className="mr-2" />
                  Book a Call
                </Button>
              </div>

              {/* Video: Replace placeholder with Steen Rasmussen Testimonial.mp4 for first testimonial only */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                {index === 0 ? (
                  <video
                    controls
                    className="aspect-video w-full h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100 object-cover"
                    style={{ objectFit: 'cover' }}
                  >
                    <source src={testimonial.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ display: 'none' }}>
                    <img
                      src={testimonial.poster}
                      alt={`${testimonial.name} testimonial video`}
                      className="w-full h-full object-cover"
                    />
                    {!playingVideos.has(testimonial.id) && (
                      <div 
                        className="video-overlay"
                        onClick={() => handleVideoPlay(testimonial.id)}
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors duration-300">
                          <Play size={32} className="text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={scrollToFAQ}
            size="lg"
            className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth"
          >
            Join Our Happy Clients
          </Button>
        </div>
      </div>
    </section>
  );
};