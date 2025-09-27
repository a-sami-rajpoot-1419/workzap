import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Play, Clock, Filter, Search, Phone, ArrowLeft } from 'lucide-react';
import { mockData } from '../data/mock';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';

export const IndustrySolutionsPage = () => {
  // Only keep the same solutions as homepage (exclude the last two)
  const initialVideos = mockData.industryVideos.slice(0, Math.max(0, mockData.industryVideos.length - 2));
  const [filteredVideos, setFilteredVideos] = useState(initialVideos);
  const [activeFilters, setActiveFilters] = useState({
    industry: 'all',
    role: 'all',
    search: ''
  });
  const [playingVideo, setPlayingVideo] = useState(null);
  // Expansion disabled
  const [expandedSlug, setExpandedSlug] = useState(null);

  const getSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

  // Auto-expand if highlight query is present
  useEffect(() => {
    // Remove highlight expansion behavior
  }, []);

  const industries = ['All', ...Array.from(new Set(initialVideos.map(v => v.industry)))];
  const roles = ['All', 'Executive Assistant', 'Marketing Expert', 'Customer Support', 'Automation & AI Expert', 'Psychologist', 'Content & Graphic Associate'];

  // scrollToFAQ already defined above in this file

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...activeFilters, [filterType]: value };
    setActiveFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters) => {
  let filtered = [...initialVideos];

    if (filters.industry !== 'all') {
      filtered = filtered.filter(video => 
        video.industry.toLowerCase() === filters.industry.toLowerCase()
      );
    }

    if (filters.search) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        video.industry.toLowerCase().includes(filters.search.toLowerCase()) ||
        video.outcome.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredVideos(filtered);
  };

  const resetFilters = () => {
    setActiveFilters({ industry: 'all', role: 'all', search: '' });
  setFilteredVideos(initialVideos);
  };

  const handleVideoPlay = (videoIndex) => {
    setPlayingVideo(videoIndex);
  };

  const scrollToFAQ = () => {
    window.location.href = '/#faq-calendly';
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Industry Solutions & Case Studies — Workzap</title>
        <meta name="description" content="Explore Workzap's real case studies by industry. See outcomes, tools, and workflows delivered by specialized virtual assistants." />
        <link rel="canonical" href="https://workzap.co/industry-solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industry Solutions & Case Studies — Workzap" />
        <meta property="og:description" content="Explore real case studies by industry. Outcomes, tools, and workflows delivered by Workzap VAs." />
        <meta property="og:url" content="https://workzap.co/industry-solutions" />
        <meta property="og:image" content="https://workzap.co/Workzap-logo-white.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industry Solutions — Workzap" />
        <meta name="twitter:description" content="Explore real case studies by industry delivered by Workzap VAs." />
        <meta name="twitter:image" content="https://workzap.co/Workzap-logo-white.png" />
      </Helmet>
      <Header />
      
      {/* Hero Bar */}
      <section className="pt-32 pb-12 bg-workzap-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="border-workzap-gold text-workzap-gold hover:bg-workzap-gold hover:text-workzap-black mb-6"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
              <h1 className="font-bebas text-4xl md:text-5xl text-white mb-4">
                Solutions by Industry
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Explore real case studies and see how businesses like yours transform operations with specialized VA support.
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
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 bg-white border-b border-gray-200 py-4 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {/* Industry Filter */}
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => handleFilterChange('industry', industry.toLowerCase())}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilters.industry === industry.toLowerCase()
                        ? 'bg-workzap-gold text-workzap-black'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 items-center">
              {/* Search */}
              <div className="relative">
                <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Search videos..."
                  value={activeFilters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="pl-10 w-64"
                />
              </div>

              {/* Results Count */}
              <span className="text-sm text-gray-600 whitespace-nowrap">
                {filteredVideos.length} results
              </span>

              {/* Reset */}
              <Button
                onClick={resetFilters}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => {
              const slug = getSlug(video.title);
              const isExpanded = false; // expansion disabled
              return (
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
                      onClick={() => {
                        // expansion disabled on listing
                      }}
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
                        // Navigate to the same case study page as View Case
                        window.location.href = `/industry-solutions/${video.industry.toLowerCase()}/${video.title.toLowerCase().replace(/\s+/g, '-')}`;
                      }}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white btn-hover transition-smooth"
                    >
                      Learn More
                    </Button>
                    
                    <Button
                      onClick={() => {
                        // Navigate to case study detail
                        window.location.href = `/industry-solutions/${video.industry.toLowerCase()}/${video.title.toLowerCase().replace(/\s+/g, '-')}`;
                      }}
                      size="sm"
                      className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow btn-hover transition-smooth"
                    >
                      View Case
                    </Button>
                    
                    <Button
                      onClick={scrollToFAQ}
                      size="sm"
                      className="bg-workzap-black text-white hover:bg-workzap-black-2"
                    >
                      <Phone size={14} />
                    </Button>
                  </div>
                </div>

                {/* Expanded details removed by request */}
              </div>
            );})}
          </div>

          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="font-semibold text-workzap-black text-xl mb-2">No videos found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <Button onClick={resetFilters} className="bg-workzap-gold text-workzap-black">
                Reset Filters
              </Button>
            </div>
          )}

          {/* Load More (Placeholder) */}
          {filteredVideos.length > 0 && (
            <div className="text-center mt-16">
              <Button
                variant="outline"
                size="lg"
                className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white"
              >
                Load More Videos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-workzap-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bebas text-4xl text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how we can create similar results for your industry and role.
          </p>
          <Button
            onClick={scrollToFAQ}
            size="lg"
            className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth"
          >
            <Phone size={16} className="mr-2" />
            Book Your Discovery Call
          </Button>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};