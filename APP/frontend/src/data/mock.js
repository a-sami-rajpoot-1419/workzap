export const mockData = {
  roles: [
    {
  slug: "executive-assistant",
  title: "Executive Assistant",
  frontImage: "https://dummyimage.com/640x400/ffffff/0a0a0a&text=Executive+Assistant",
  desc: "Delegate executive assistant tasks to professionals who work seamlessly with your tools and timezone.",
      tags: ["G Suite", "Slack", "ClickUp"],
  fullDesc: "Transform your operational efficiency with dedicated executive assistant support. Our VAs handle calendar management, email organization, travel coordination, and administrative workflows so you can focus on strategic decisions.",
      deliverables: [
        "Calendar management and scheduling",
        "Email organization and responses", 
        "Travel booking and coordination",
        "Document preparation and filing",
        "Meeting preparation and follow-ups"
      ],
      tools: ["Google Workspace", "Slack", "ClickUp", "Calendly", "Zoom"],
      workflow: [
        "Initial consultation and setup",
        "Tool integration and access",
        "Daily task prioritization",
        "Weekly progress reviews",
        "Continuous optimization"
      ]
    },
    {
  slug: "marketing-expert",
  title: "Marketing Expert",
  frontImage: "https://dummyimage.com/640x400/ffffff/0a0a0a&text=Marketing+Expert",
      desc: "Content, scheduling, reporting, and asset coordination across your channels.",
      tags: ["Canva", "Meta", "Buffer"],
      fullDesc: "Scale your marketing efforts with dedicated social media and content professionals. From strategy to execution, we handle your entire marketing workflow.",
      deliverables: [
        "Social media content creation",
        "Post scheduling and management",
        "Campaign performance tracking",
        "Brand asset development",
        "Marketing analytics reporting"
      ],
      tools: ["Canva", "Meta Business", "Buffer", "Hootsuite", "Google Analytics"],
      workflow: [
        "Brand voice and strategy alignment",
        "Content calendar development",
        "Asset creation and approval",
        "Publishing and engagement",
        "Performance analysis and optimization"
      ]
    },
    {
      slug: "customer-support",
      title: "Customer Support",
      frontImage: "https://dummyimage.com/640x400/ffffff/0a0a0a&text=Customer+Support",
      desc: "Omnichannel responses, SLAs, and ticket triage with empathy and precision.",
      tags: ["Gorgias", "Zendesk", "HubSpot"],
      fullDesc: "Deliver exceptional customer experiences with 24/7 support coverage. Our team ensures rapid response times and consistent quality across all channels.",
      deliverables: [
        "24/7 ticket response management",
        "Live chat and email support",
        "Customer satisfaction tracking",
        "Knowledge base maintenance",
        "Escalation handling protocols"
      ],
      tools: ["Gorgias", "Zendesk", "HubSpot", "Intercom", "Slack"],
      workflow: [
        "Support system integration",
        "Response template creation",
        "Team training and onboarding",
        "Quality assurance monitoring",
        "Continuous improvement cycles"
      ]
    },
    {
  slug: "automation-ai-expert",
  title: "Automation & AI Expert",
  frontImage: "https://dummyimage.com/640x400/ffffff/0a0a0a&text=Automation+%26+AI+Expert",
      desc: "Automate repetitive tasks, streamline workflows, and boost productivity with AI-powered solutions.",
      tags: ["Zapier", "Make", "OpenAI"],
      fullDesc: "Empower your business with virtual assistants skilled in AI and automation. Our VAs set up, manage, and optimize automations to save you time and reduce manual work.",
      deliverables: [
        "Workflow automation setup",
        "AI-powered data entry and reporting",
        "Integration of business tools",
        "Routine task automation",
        "Process optimization and monitoring"
      ],
      tools: ["Zapier", "Make", "OpenAI", "Google Apps Script", "IFTTT"],
      workflow: [
        "Automation needs assessment",
        "Tool selection and integration",
        "Automation build and testing",
        "Monitoring and optimization",
        "Ongoing support and updates"
      ]
    },
    {
  slug: "psychologist",
  title: "Psychologist",
  frontImage: "https://dummyimage.com/640x400/ffffff/0a0a0a&text=Psychologist",
  desc: "Professional mental health support, counseling, and therapy for individuals and teams.",
      tags: ["QuickBooks", "Xero", "Sheets"],
  fullDesc: "Empower your team and clients with access to certified psychologists. Our professionals provide confidential counseling, stress management, and mental wellness programs tailored to your needs.",
      deliverables: [
        "Individual and group counseling",
        "Stress and anxiety management",
        "Mental wellness workshops",
        "Confidential therapy sessions",
        "Crisis intervention support"
      ],
  tools: ["Zoom", "Google Meet", "TherapyNotes", "SimplePractice", "Calendly"],
      workflow: [
        "Initial assessment and intake",
        "Session scheduling and reminders",
        "Personalized therapy plans",
        "Progress tracking and feedback",
        "Ongoing support and follow-up"
      ]
    },
    {
  slug: "content-graphic-associate",
  title: "Content & Graphic Associate",
  frontImage: "https://dummyimage.com/640x400/ffffff/0a0a0a&text=Content+%26+Graphic+Associate",
      desc: "Production design, brand upkeep, and asset management.",
      tags: ["Canva", "Figma", "Adobe"],
      fullDesc: "Elevate your brand with professional design and creative services. From marketing materials to brand guidelines, we ensure consistent visual excellence.",
      deliverables: [
        "Marketing collateral design",
        "Social media graphics",
        "Brand guideline maintenance",
        "Website design support",
        "Print and digital asset creation"
      ],
      tools: ["Canva", "Figma", "Adobe Creative Suite", "Sketch", "InVision"],
      workflow: [
        "Brand analysis and style guide review",
        "Creative brief development",
        "Design concept creation",
        "Feedback incorporation and revisions",
        "Final asset delivery and organization"
      ]
    }
  ],
  
  pricing: [
    {
      plan: "Entrepreneur",
      price: "$299",
      hours: "12 hrs/mo",
      desc: "Best for solo founders",
      features: [
        "Dedicated VA match",
        "12 hours monthly",
        "Basic tool integrations",
        "Email support",
        "Pause anytime"
      ]
    },
    {
      plan: "Startup",
      price: "$599",
      hours: "24 hrs/mo", 
      desc: "Most popular for growing teams",
      features: [
        "Dedicated VA + backup",
        "24 hours monthly",
        "Advanced integrations",
        "Priority support",
        "Weekly check-ins"
      ],
      popular: true
    },
    {
      plan: "Team",
      price: "$1,199",
      hours: "50 hrs/mo",
      desc: "Scale operations without overhead",
      features: [
        "Multiple VA specialists",
        "50 hours monthly",
        "Custom workflows",
        "Dedicated success manager",
        "24/7 priority support"
      ]
    }
  ],

  industryVideos: [
    {
      industry: "Advertising",
      title: "Agency Onboarding Automation",
      outcome: "Cut onboarding time by 60%",
      poster: "https://dummyimage.com/640x360/ffffff/0a0a0a&text=Advertising",
      src: "/media/industry-advertising.mp4",
  roles: ["marketing-expert"],
      tools: ["Slack", "ClickUp"],
      duration: "02:14"
    },
    {
      industry: "SaaS", 
      title: "Inbox to Under 20/Day",
      outcome: "-40% response time",
      poster: "https://dummyimage.com/640x360/000000/ffd700&text=SaaS",
      src: "/media/industry-saas.mp4",
  roles: ["executive-assistant"],
      tools: ["Gmail", "Superhuman"],
      duration: "01:31"
    },
    {
      industry: "Real Estate",
      title: "24/7 CX Coverage", 
      outcome: "CSAT +18 pts",
      poster: "https://dummyimage.com/640x360/f5c542/000000&text=Real+Estate",
      src: "/media/industry-realestate.mp4",
      roles: ["customer-support"],
      tools: ["Gorgias", "HubSpot"],
      duration: "02:58"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      company: "TechStart Inc",
      rating: 5,
      quote: "Workzap transformed our operations. My VA handles everything from scheduling to project coordination, giving me back 15 hours per week.",
  videoSrc: "/Steen Rasmussen Testimonial_2.mp4",
      poster: "https://dummyimage.com/640x360/f5c542/000000&text=Sarah+Chen+Testimonial"
    },
    {
      id: 2, 
      name: "Marcus Rodriguez",
      company: "GrowthCo",
      rating: 5,
      quote: "The backup VA system is genius. Never missed a beat even when our primary VA was unavailable. Seamless handoffs every time.",
      videoSrc: "/media/testimonial-marcus.mp4",
      poster: "https://dummyimage.com/640x360/ffffff/0a0a0a&text=Marcus+Rodriguez+Testimonial"
    },
    {
      id: 3,
      name: "Emily Watson",
      company: "Creative Agency",
      rating: 5,
      quote: "From customer support to social media management, our Workzap team feels like an extension of our own. Quality is consistently excellent.",
      videoSrc: "/media/testimonial-emily.mp4", 
      poster: "https://dummyimage.com/640x360/000000/ffd700&text=Emily+Watson+Testimonial"
    }
  ],

  faqs: [
    {
      question: "How quickly can I get matched with a VA?",
      answer: "Most clients are matched within 24-48 hours. We carefully select VAs based on your specific needs, tools, and industry requirements to ensure the best fit from day one."
    },
    {
      question: "What happens if my VA isn't available?",
      answer: "Every plan includes a backup VA who's already familiar with your workflows. Seamless handoffs ensure your operations never skip a beat, even during vacations or unexpected absences."
    },
    {
      question: "Can I pause or change my plan anytime?",
      answer: "Absolutely. Scale up, down, or pause your plan with just 24 hours notice. No long-term contracts or cancellation fees. We grow with your business needs."
    },
    {
      question: "How do you ensure data security?",
      answer: "All VAs undergo thorough background checks and sign comprehensive NDAs. We use enterprise-grade security protocols and can work within your existing security frameworks."
    },
    {
      question: "What tools do your VAs work with?",
      answer: "Our VAs are trained on 200+ popular business tools including Google Workspace, Slack, ClickUp, HubSpot, Shopify, and many more. Custom tool training is available for specialized software."
    }
  ],

  siteConfig: {
    calendlyUrl: "https://calendly.com/us-steen/30min",
    socials: {
      linkedin: "https://linkedin.com/company/workzap",
      twitter: "https://twitter.com/workzap", 
      youtube: "https://youtube.com/@workzap",
      instagram: "https://instagram.com/workzap"
    },
    founderVideo: {
      src: "/media/founder-intro.mp4",
      poster: "https://dummyimage.com/800x450/0a0a0a/ffd700&text=Founder+Intro+Video"
    }
  }
};