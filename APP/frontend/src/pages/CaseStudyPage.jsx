import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Play, Download, Share2, ArrowLeft, Phone } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';

export const CaseStudyPage = () => {
  const { industry, slug } = useParams();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToFAQ = () => {
    window.location.href = '/#faq-calendly';
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  // Mock case study data
  const caseStudy = {
    title: "Agency Onboarding Automation",
    industry: "Advertising",
    videoSrc: "/media/industry-advertising.mp4",
    poster: "https://dummyimage.com/800x450/ffffff/0a0a0a&text=Agency+Case+Study",
    stats: [
      { label: "Time Saved", value: "60%" },
      { label: "Response Time", value: "-40%" },
      { label: "Client Satisfaction", value: "+18 pts" }
    ],
    problem: "The advertising agency was struggling with manual client onboarding processes that took weeks to complete, causing delays and client frustration.",
    solution: "We implemented automated workflows using ClickUp and Slack integrations, with dedicated VAs handling the entire onboarding sequence.",
    results: "Onboarding time reduced from 3 weeks to 5 days, client satisfaction increased dramatically, and the team could focus on strategic work.",
    tools: ["ClickUp", "Slack", "Google Workspace", "Calendly"],
  roles: ["Executive Assistant", "Project Management"],
    clientQuote: "Workzap transformed our onboarding process completely. What used to take weeks now happens seamlessly in days."
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Button
              onClick={() => window.location.href = '/industry-solutions'}
              variant="outline"
              className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white mb-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Solutions
            </Button>
          </div>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <Badge className="bg-workzap-gold text-workzap-black mb-4">
                  {caseStudy.industry}
                </Badge>
                <h1 className="font-bebas text-4xl md:text-5xl text-workzap-black mb-6">
                  {caseStudy.title}
                </h1>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {caseStudy.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-workzap-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Side Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToFAQ}
                  className="bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2"
                >
                  <Phone size={16} className="mr-2" />
                  Book a Call
                </Button>
                
                <Button
                  variant="outline"
                  className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white"
                >
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>
                
                <Button
                  variant="outline"
                  className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white"
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={caseStudy.poster}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
                
                {!isVideoPlaying && (
                  <div 
                    className="video-overlay"
                    onClick={handleVideoPlay}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors duration-300">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {/* Problem */}
            <div>
              <h2 className="font-bebas text-3xl text-workzap-black mb-6">The Problem</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-bebas text-3xl text-workzap-black mb-6">Our Solution</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {caseStudy.solution}
              </p>

              {/* Tools & Roles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-workzap-black mb-4">Tools & Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="border-workzap-gold text-workzap-black">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-workzap-black mb-4">Roles Involved</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.roles.map((role) => (
                      <Badge key={role} className="bg-workzap-gold text-workzap-black">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="font-bebas text-3xl text-workzap-black mb-6">The Results</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.results}
              </p>
            </div>

            {/* Client Quote */}
            <div className="bg-workzap-black rounded-lg p-8 text-center">
              <blockquote className="text-xl text-gray-300 italic mb-4">
                "{caseStudy.clientQuote}"
              </blockquote>
              <div className="text-workzap-gold font-semibold">
                — Agency Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bebas text-4xl text-workzap-black text-center mb-16">
            Related Case Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder related videos */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <Play size={24} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <Badge className="bg-workzap-gold text-workzap-black mb-3">
                    Industry {i}
                  </Badge>
                  <h3 className="font-semibold text-workzap-black mb-2">
                    Related Case Study {i}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Another success story from our portfolio
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={scrollToFAQ}
              size="lg"
              className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth"
            >
              <Phone size={16} className="mr-2" />
              Get Similar Results
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};