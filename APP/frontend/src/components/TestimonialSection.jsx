import React from 'react';
import { Button } from './ui/button';
import { Star, Phone } from 'lucide-react';
import { mockData } from '../data/mock';
export const TestimonialsSection = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
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

              {/* Media: First and second testimonials render YouTube embeds; third renders a static image */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                {index === 0 ? (
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
                ) : index === 1 ? (
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/IevG2BtePD4"
                      title="Workzap Testimonial - Dr. Jessica Warnecke"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={testimonial.poster}
                      alt={`${testimonial.name} from ${testimonial.company}`}
                      className="w-full h-full object-cover"
                    />
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