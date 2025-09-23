import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Play, MapPin, Clock, Users, TrendingUp, ArrowLeft, ExternalLink } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';

export const CareersPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const APPLICATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdrcym_ByL0ZIxkeFXr4YjJIvErN42MuzFKHaXjl8FkjPQR4Q/viewform?usp=header';

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  // Smooth scroll to Open Positions section
  const scrollToOpenPositions = () => {
    const el = document.getElementById('open-positions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openRoles = [
    {
      id: 1,
      title: 'Senior Executive Assistant',
      department: 'Virtual Assistant',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Support C-level executives with complex administrative tasks, calendar management, and project coordination.',
      requirements: [
        '3+ years executive assistant experience',
        'Proficiency in Google Workspace and Slack',
        'Excellent written and verbal communication',
        'Experience with project management tools'
      ],
      benefits: [
        'Competitive salary',
        'Flexible working hours',
        'Professional development opportunities',
        'Work with global clients'
      ]
    },
    {
      id: 2,
      title: 'Customer Support Specialist',
      department: 'Virtual Assistant',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Provide exceptional customer support across multiple channels with focus on SLA compliance and customer satisfaction.',
      requirements: [
        '2+ years customer support experience',
        'Experience with Zendesk or similar platforms',
        'Strong problem-solving skills',
        'Excellent English communication'
      ],
      benefits: [
        'Performance-based bonuses',
        'Career advancement path',
        'Training and certification programs',
        'International client exposure'
      ]
    },
    {
      id: 3,
  title: 'Marketing Expert VA',
      department: 'Virtual Assistant',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Manage social media accounts, create content, and execute marketing campaigns for growing businesses.',
      requirements: [
        '2+ years social media marketing experience',
        'Proficiency in Canva, Buffer, and analytics tools',
        'Creative content creation skills',
        'Understanding of social media trends'
      ],
      benefits: [
        'Creative freedom',
        'Access to premium tools',
        'Skills development programs',
        'Portfolio building opportunities'
      ]
    }
  ];

  const whyWorkzap = [
    {
      icon: <Users size={24} className="text-workzap-gold" />,
      title: 'Global Community',
      description: 'Join a network of top-tier VAs working with clients worldwide'
    },
    {
      icon: <TrendingUp size={24} className="text-workzap-gold" />,
      title: 'Career Growth',
      description: 'Clear advancement paths with mentorship and skill development'
    },
    {
      icon: <Clock size={24} className="text-workzap-gold" />,
      title: 'Flexible Schedule',
      description: 'Work when it suits you best while maintaining client excellence'
    }
  ];

  const candidateFAQs = [
    {
      question: 'What is the application process?',
      answer: 'Our process includes application review, skills assessment, interview rounds, and background check. We typically complete this within 2-3 weeks.'
    },
    {
      question: 'Do you provide training?',
      answer: 'Yes! We offer comprehensive onboarding, tool-specific training, and ongoing professional development to ensure your success.'
    },
    {
      question: 'How are client matches made?',
      answer: 'We carefully match VAs with clients based on skills, experience, time zones, and personality fit to ensure long-term success.'
    },
    {
      question: 'What support do VAs receive?',
      answer: 'Every VA has access to a dedicated success manager, peer community, and escalation support for challenging situations.'
    }
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-workzap-black mb-6">
                  Join Workzap's Premium VA Network
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Work with ambitious founders and growing companies. Get matched with clients who value your expertise and invest in your growth.
                </p>
              </div>

              <Button
                size="lg"
                onClick={scrollToOpenPositions}
                className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth"
              >
                Apply Now
              </Button>
            </div>

            {/* Day in the Life Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://dummyimage.com/800x450/0a0a0a/ffd700&text=Day+in+the+Life+VA+Video"
                  alt="Day in the Life of a Workzap VA"
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
              <p className="text-center text-gray-600 mt-4">Day in the Life: Workzap VA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Workzap */}
      <section className="py-20 bg-workzap-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bebas text-4xl text-white text-center mb-16">
            Why Choose Workzap?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyWorkzap.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-workzap-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="bg-workzap-black-2 rounded-lg p-8 text-center">
            <blockquote className="text-xl text-gray-300 italic mb-6">
              "Working with Workzap changed my career. The clients are professional, the support is incredible, and I'm growing skills I never thought possible."
            </blockquote>
            <div className="text-workzap-gold font-semibold">
              Sarah M., Executive Assistant
            </div>
          </div>
        </div>
      </section>

  {/* Open Roles */}
  <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bebas text-4xl text-workzap-black text-center mb-16">
            Open Positions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openRoles.map((role) => (
              <Card key={role.id} className="border-2 border-gray-200 hover:border-workzap-gold transition-colors duration-300 cursor-pointer" onClick={() => setSelectedRole(role)}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-workzap-gold text-workzap-gold">
                      {role.department}
                    </Badge>
                    <Badge variant="secondary" className="bg-workzap-gold text-workzap-black">
                      {role.type}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-xl text-workzap-black mb-3">
                    {role.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} />
                      <span>{role.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{role.experience} experience</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-workzap-black text-white hover:bg-workzap-black-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRole(role);
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Role Detail Modal/Section */}
          {selectedRole && (
            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bebas text-3xl text-workzap-black mb-2">
                    {selectedRole.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{selectedRole.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{selectedRole.type}</span>
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedRole(null)}
                  size="sm"
                >
                  Close
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-workzap-black mb-4">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedRole.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-workzap-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-workzap-black mb-4">Benefits</h4>
                  <ul className="space-y-2">
                    {selectedRole.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-workzap-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  onClick={() => window.open(APPLICATION_FORM_URL, '_blank', 'noopener,noreferrer')}
                  className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Apply for This Role
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-workzap-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-bebas text-4xl text-white text-center mb-16">
            Candidate FAQ
          </h2>
          
          <div className="space-y-6">
            {candidateFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-workzap-black text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() => window.open(APPLICATION_FORM_URL, '_blank', 'noopener,noreferrer')}
              className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth"
            >
              <ExternalLink size={16} className="mr-2" />
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};