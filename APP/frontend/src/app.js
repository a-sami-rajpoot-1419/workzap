import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
import { Hero } from "./components/Hero";
import { RolesSection } from "./components/RolesSection";
import { PricingSection } from "./components/PricingSection";
import { IndustrySolutions } from "./components/IndustrySolutions";
import { TestimonialsSection } from "./components/TestimonialSection";
import { FAQCalendlySection } from "./components/FAQCalendlySection";

// Pages
import { RoleDetailPage } from "./pages/RoleDetailPage";
import { IndustrySolutionsPage } from "./pages/IndustrySolutionsPage";
import { CareersPage } from "./pages/CareersPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { PricingPage } from "./pages/PricingPage";

const Home = () => {
  React.useEffect(() => {
    // Handle scrolling to sections when navigating with hash
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the '#'
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Handle initial load with hash
    handleHashScroll();

    // Handle navigation changes with hash
    const handleHashChange = () => {
      handleHashScroll();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <RolesSection />
        <PricingSection />
        <IndustrySolutions />
        <TestimonialsSection />
        <FAQCalendlySection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

// Simple placeholder pages
const Privacy = () => (
  <div className="min-h-screen bg-white pt-32 pb-20">
    <Header />
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="font-bebas text-4xl text-workzap-black mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-gray-700">
        <p>
          This privacy policy explains how Workzap collects, uses, and protects your personal information 
          when you use our virtual assistant services.
        </p>
        <h2 className="font-semibold text-xl text-workzap-black">Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, 
          request services, or contact us for support.
        </p>
        <h2 className="font-semibold text-xl text-workzap-black">How We Use Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, 
          process transactions, and communicate with you.
        </p>
        <h2 className="font-semibold text-xl text-workzap-black">Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information against 
          unauthorized access, alteration, disclosure, or destruction.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

const Terms = () => (
  <div className="min-h-screen bg-white pt-32 pb-20">
    <Header />
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="font-bebas text-4xl text-workzap-black mb-6">Terms of Service</h1>
      <div className="space-y-6 text-gray-700">
        <p>
          These terms of service govern your use of Workzap's virtual assistant services and platform.
        </p>
        <h2 className="font-semibold text-xl text-workzap-black">Service Description</h2>
        <p>
          Workzap provides virtual assistant services to help businesses and individuals with 
          administrative, creative, and operational tasks.
        </p>
        <h2 className="font-semibold text-xl text-workzap-black">User Responsibilities</h2>
        <p>
          You are responsible for providing accurate information, maintaining the confidentiality 
          of your account, and using our services in accordance with applicable laws.
        </p>
        <h2 className="font-semibold text-xl text-workzap-black">Payment Terms</h2>
        <p>
          Payment for services is due according to the plan you select. We offer monthly 
          billing with the option to pause or cancel at any time.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roles/:slug" element={<RoleDetailPage />} />
          <Route path="/industry-solutions" element={<IndustrySolutionsPage />} />
          <Route path="/industry-solutions/:industry/:slug" element={<CaseStudyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/eor" element={require('./pages/EoRPage.jsx').default()} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;