import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { scrollToCalendly } from '../lib/scrollToCalendly';
import { Badge } from '../components/ui/badge';
import { Play, Download, Share2, ArrowLeft, Phone } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';
import { mockData } from '../data/mock';

export const CaseStudyPage = () => {
  const { industry, slug } = useParams();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToFAQ = () => {
    window.location.href = '/#faq-calendly';
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleDownloadPDF = () => {
    // Minimal, no-deps approach: let users print to PDF
    try {
      window.print();
    } catch (e) {
      console.error('Print failed', e);
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    const title = `${baseVideo?.title || 'Case Study'} — ${baseVideo?.industry || 'Workzap'}`;
    if (navigator.share) {
      navigator.share({ title, url }).catch(() => {
        // Silently ignore if user cancels share sheet
      });
      return;
    }
    // Fallback: copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(() => {
          // Use a simple alert to acknowledge without adding new UI deps
          alert('Link copied to clipboard');
        })
        .catch(() => {
          alert(`Share this link:\n${url}`);
        });
    } else {
      alert(`Share this link:\n${url}`);
    }
  };

  // Derive case study details from mock data for consistency
  const baseVideo = useMemo(() => {
    const videos = mockData.industryVideos || [];
    const match = videos.find(v =>
      v.industry.toLowerCase() === (industry || '').toLowerCase() &&
      v.title.toLowerCase().replace(/\s+/g, '-') === (slug || '')
    );
    return match || videos[0];
  }, [industry, slug]);

  const caseStudy = useMemo(() => {
    const common = {
      title: baseVideo?.title || 'Case Study',
      industry: baseVideo?.industry || 'Industry',
      videoSrc: baseVideo?.src || '',
      poster: baseVideo?.poster || '',
      embedUrl: baseVideo?.embedUrl || '',
      // ensure tags/tools stay consistent with cards by default
      tools: baseVideo?.tools || []
    };

    if (baseVideo?.title === 'ReceiptSync: Email to Sheets') {
      // Business-focused details for ReceiptSync automation
      return {
        ...common,
        stats: [
          { label: 'Manual Entry', value: '0 hours' },
          { label: 'Process', value: '100% digital' },
          { label: 'Visibility', value: 'Real-time' }
        ],
        problem:
          'Expense tracking breaks down when receipts live in inboxes. Teams waste time hunting emails, typing line items, and reconciling totals—resulting in delays, errors, and poor spend visibility.',
        solution:
          'ReceiptSync connects your inbox to AI-powered text extraction, automatically pulls receipts/invoices, parses fields (Vendor, Invoice #, Date, Payment Method, Tax, Total, Items), and writes clean rows into Google Sheets. The result is a real-time, searchable expense tracker—no manual typing, no copy–paste. Workflows include smart filtering, error handling, and clear field mapping so the system stays reliable as formats vary.',
        results:
          'Admin time drops, errors go down, and finance gains instant visibility. The process is fully digital and future‑proof—different receipt formats still map cleanly to the sheet. Teams move from inbox chaos to a structured source of truth for spend.',
        tools: common.tools.length ? common.tools : ['Zapier', 'AI Text Extraction', 'Gmail', 'Outlook', 'Google Sheets', 'CloudConvert'],
        roles: ['Automation & AI Expert', 'Finance Ops'],
        clientQuote:
          'Every receipt now becomes a structured row in Sheets—no chasing attachments, no typing. It just works.'
      };
    }

    if (baseVideo?.title === 'SheetGrace: Receipts to Tax Automation') {
      return {
        ...common,
        stats: [
          { label: 'Data Entry Errors', value: 'Near 0%' },
          { label: 'Manual Steps', value: 'Reduced 90%' },
          { label: 'Time to Record', value: 'Seconds' }
        ],
        problem:
          'Receipts, bookkeeping, and tax prep are fragmented. Teams juggle PDFs, photos, emails, and spreadsheets—leading to messy records, rework, and compliance risk.',
        solution:
          'SheetGrace is a CustomGPT-powered assistant that turns receipts into clean, structured records. Users upload a receipt (PDF/image/doc); it extracts merchant, dates, items, totals, taxes, and more. If something is unclear, it asks for confirmation. With one click, it pushes the data to Google Sheets via Make.com and connects downstream to tax filing—creating a smooth receipts → sheets → returns workflow.',
        results:
          'Bookkeeping gets faster and cleaner. Teams gain reliable, searchable records with minimal input, and compliance steps become routine instead of a scramble.',
        tools: common.tools.length ? common.tools : ['OpenAI', 'CustomGPT', 'Make.com', 'Google Sheets', 'No-Code', 'TaxTech'],
        roles: ['Automation & AI Expert', 'Finance Ops'],
        clientQuote:
          'From uploads to tax-ready records in one guided flow. It removed the friction from our bookkeeping.'
      };
    }

    if (baseVideo?.title === 'Injury Claim Automation') {
      return {
        ...common,
        stats: [
          { label: 'Research Time', value: '-70%' },
          { label: 'Team Throughput', value: '+2.5x' },
          { label: 'Error Rate', value: '-60%' }
        ],
        problem:
          'Claims teams spend hours googling, copy-pasting, and reconciling information from multiple sources—creating inconsistent outputs and delayed decisions.',
        solution:
          'A one-click pipeline that searches the web for relevant injury claim information, extracts key details, and aggregates results directly into Google Sheets—standardized and ready to use.',
        results:
          'Typical outcomes: 50–80% time saved on research, fewer manual errors, and faster client responses. Teams get a reliable, repeatable way to collect and share claim insights.',
        tools: common.tools.length ? common.tools : ['Google Sheets', 'Search Automation', 'Data Aggregation'],
        roles: ['Automation & AI Expert'],
        clientQuote:
          'We went from hours of manual research to a single click. The quality went up and the busywork disappeared.'
      };
    }

    if (baseVideo?.title === 'Data Collection & Scraping') {
      // Business-focused narrative tailored to this solution
      return {
        ...common,
        stats: [
          { label: 'Research Time', value: '-80%' },
          { label: 'Context Switching', value: '-90%' },
          { label: 'Setup Time', value: '1 click' }
        ],
        problem:
          'Teams lose hours to Googling, copy‑pasting, and note‑taking across dozens of tabs just to answer routine research questions.',
        solution:
          'A one‑click research assistant: type a query, it finds trusted sources, extracts the key facts, and presents everything in a clean view that flows straight into Google Sheets—no complex setup, no 50 tabs, no manual copy‑paste.',
        results:
          'Faster research cycles, cleaner handoffs, and consistent outputs. Workflows become repeatable and auditable, saving hours of repetitive searching while improving decision speed.',
        tools: common.tools.length ? common.tools : ['Google Sheets', 'Web Research Automation', 'Results Dashboard'],
        roles: ['Automation & AI Expert', 'Research Ops'],
        clientQuote:
          'It turned a painful, manual process into a one‑click task. We spend our time on decisions, not collecting links and snippets.'
      };
    }

    // Default fallback for other case studies
    return {
      ...common,
      stats: [
        { label: 'Time Saved', value: '60%' },
        { label: 'Response Time', value: '-40%' },
        { label: 'Client Satisfaction', value: '+18 pts' }
      ],
      problem: 'The client struggled with manual processes causing delays and frustration.',
      solution: 'We implemented automated workflows with dedicated VAs handling the operational sequence.',
      results: 'Time to completion reduced significantly, satisfaction increased, and the team focused on strategic work.',
      tools: common.tools.length ? common.tools : ['ClickUp', 'Slack', 'Google Workspace', 'Calendly'],
      roles: ['Executive Assistant', 'Project Management'],
      clientQuote: 'Workzap transformed our process completely. What used to take weeks now happens seamlessly in days.'
    };
  }, [baseVideo]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${caseStudy.title} — ${caseStudy.industry} Case Study | Workzap`}</title>
        <meta name="description" content={`See how Workzap delivered results in ${caseStudy.industry}: ${caseStudy.results}`} />
        <link rel="canonical" href={`https://workzap.co/industry-solutions/${(caseStudy.industry || '').toLowerCase()}/${(caseStudy.title || '').toLowerCase().replace(/\s+/g, '-')}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${caseStudy.title} — ${caseStudy.industry} Case Study | Workzap`} />
        <meta property="og:description" content={`See how Workzap delivered results in ${caseStudy.industry}.`} />
        <meta property="og:url" content={`https://workzap.co/industry-solutions/${(caseStudy.industry || '').toLowerCase()}/${(caseStudy.title || '').toLowerCase().replace(/\s+/g, '-')}`} />
        <meta property="og:image" content={`${(caseStudy.poster ? 'https://workzap.co' + caseStudy.poster : 'https://workzap.co/Workzap-logo-white.png')}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${caseStudy.title} — ${caseStudy.industry} Case Study | Workzap`} />
        <meta name="twitter:description" content={`See how Workzap delivered results in ${caseStudy.industry}.`} />
        <meta name="twitter:image" content={`${(caseStudy.poster ? 'https://workzap.co' + caseStudy.poster : 'https://workzap.co/Workzap-logo-white.png')}`} />
      </Helmet>
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
                  onClick={() => window.location.href = '/#faq-calendly'}
                  className="bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2"
                >
                  <Phone size={16} className="mr-2" />
                  Book a Call
                </Button>
                
                <Button
                  variant="outline"
                  className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white"
                  onClick={handleDownloadPDF}
                >
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>
                
                <Button
                  variant="outline"
                  className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white"
                  onClick={handleShare}
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {caseStudy.embedUrl ? (
                  <iframe
                    src={caseStudy.embedUrl}
                    title={caseStudy.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : isVideoPlaying && caseStudy.videoSrc && !baseVideo?.imageOnly ? (
                  <video
                    src={caseStudy.videoSrc}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={caseStudy.poster}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Play overlay: only when there's no iframe and not image-only */}
                {!caseStudy.embedUrl && !isVideoPlaying && !baseVideo?.imageOnly && (
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

      {/* Related Videos (hidden for now) */}
      <section className="py-20 bg-white hidden">
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
                  onClick={scrollToCalendly}
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