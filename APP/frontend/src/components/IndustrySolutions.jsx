import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, Clock, ArrowRight, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

export const IndustrySolutions = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-calendly');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoPlay = (videoIndex) => {
    setPlayingVideo(videoIndex);
    // In a real implementation, you would control the video element
  };

  return (
    <section className="bg-workzap-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              Solutions by Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              See how businesses like yours save time and scale operations with our specialized VA support.
            </p>
          </div>
          
          <Button
            onClick={scrollToFAQ}
            className="hidden md:flex bg-workzap-gold text-workzap-black hover:bg-workzap-yellow btn-hover transition-smooth"
          >
            <Phone size={16} className="mr-2" />
            Book a Call
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mockData.industryVideos.slice(0, Math.max(0, mockData.industryVideos.length - 2)).map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-100">
                {video.embedUrl ? (
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Industry Tag */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-workzap-gold text-workzap-black font-medium">
                    {video.industry}
                  </Badge>
                </div>

                {/* Duration removed by request */}

                {/* Play Overlay */}
                {playingVideo !== index && !video.imageOnly && !video.embedUrl && (
                  <div 
                    className="video-overlay cursor-pointer"
                    onClick={() => handleVideoPlay(index)}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors duration-300">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-workzap-black text-lg mb-2 leading-tight">
                  {video.title}
                </h3>
                
                <p className="text-workzap-gold font-medium text-sm mb-4">
                  {video.outcome}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {video.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="border-gray-300 text-gray-600 text-xs"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button
                    onClick={() => {
                      const slug = video.title.toLowerCase().replace(/\s+/g, '-');
                      window.location.href = `/industry-solutions/${video.industry.toLowerCase()}/${slug}`;
                    }}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white btn-hover transition-smooth"
                  >
                    Learn More
                  </Button>
                  
                  <Button
                    onClick={scrollToFAQ}
                    size="sm"
                    className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow btn-hover transition-smooth"
                  >
                    <Phone size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button
            onClick={() => {
              // Navigate to industry solutions page (placeholder)
              window.location.href = '/industry-solutions';
            }}
            variant="outline"
            size="lg"
            className="border-2 border-workzap-gold text-workzap-gold hover:bg-workzap-gold hover:text-workzap-black btn-hover transition-smooth"
          >
            View All Solutions
            <ArrowRight size={20} className="ml-2" />
          </Button>
          
          <Button
            onClick={scrollToFAQ}
            size="lg"
            className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow btn-hover transition-smooth"
          >
            <Phone size={16} className="mr-2" />
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};