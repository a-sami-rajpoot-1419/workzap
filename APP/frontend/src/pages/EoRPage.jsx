// No import of scrollToCalendly
import { Header } from '../components/Header';
import { Helmet } from 'react-helmet-async';
import { Footer } from '../components/Footer';
import { CalendlySection } from '../components/CalendlySection';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Phone, ArrowLeft, Umbrella, Gem, UserPlus, LifeBuoy, FileCheck, HeartPulse } from 'lucide-react';

const EoRPage = () => {
  const scrollToFAQ = () => {
    // If already on home page, smooth scroll; otherwise, navigate to home with hash
    if (window.location.pathname === '/') {
      const faqSection = document.getElementById('faq-calendly');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.location.href = '/#faq-calendly';
  };
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Employer of Record (EoR) — Workzap</title>
        <meta name="description" content="Workzap EoR handles legal employment, payroll, taxes, and benefits for global hires. Hire compliantly without setting up entities." />
        <link rel="canonical" href="https://workzap.co/eor" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Employer of Record (EoR) — Workzap" />
        <meta property="og:description" content="Hire globally with confidence. Workzap EoR manages compliance, payroll, and benefits." />
        <meta property="og:url" content="https://workzap.co/eor" />
        <meta property="og:image" content="https://workzap.co/Workzap-logo-white.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Employer of Record (EoR) — Workzap" />
        <meta name="twitter:description" content="Hire globally with confidence. EoR managed by Workzap." />
        <meta name="twitter:image" content="https://workzap.co/Workzap-logo-white.png" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:col-span-2">
            <Button
              onClick={() => (window.location.href = '/')}
              variant="outline"
              className="border-workzap-black text-workzap-black hover:bg-workzap-black hover:text-white mb-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </div>
          <div className="space-y-6">
            <Badge className="bg-workzap-gold text-workzap-black mb-4">Workzap EoR Service</Badge>
            <h1 className="font-bebas text-4xl md:text-5xl text-workzap-black mb-6">
              Workzap’s EoR Services: Built-In Employer of Record for Every Hire
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-workzap-black font-semibold">EXCELLENT</span>
              {/* Star rating placeholder */}
              <span className="text-workzap-gold text-xl">★★★★★</span>
              <span className="text-workzap-black font-medium">520 reviews</span>
              <span className="text-workzap-black font-medium">Trustindex</span>
            </div>
            <Button onClick={scrollToFAQ} className="bg-workzap-black text-white border-2 border-workzap-gold hover:bg-workzap-black-2 w-fit">
              Book A Discovery Call
            </Button>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-workzap-black font-medium">Pay $0 until you hire</span>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center aspect-video">
            {/* EoR main image - full image (no crop) */}
            <img src="/eor1.jpg" alt="eor pic" className="w-full h-full object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center aspect-video mb-6 lg:mb-0">
            <img src="/eor-3.jpg" alt="Ensure compliance" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-bebas text-3xl md:text-4xl text-workzap-black mb-6">Ensure Compliance with Every Hire</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Workzap’s Employer of Record (EOR) service takes care of all the details, ensuring compliance with contracts, minimum wage, terminations, and local laws wherever you hire. Our continuous HR compliance management minimizes risk better than any other provider, adapting seamlessly as your business grows and evolves.
            </p>
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bebas text-4xl text-workzap-black text-center mb-16">What We Cover for Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-workzap-black rounded-lg p-8 text-white text-center">
              <div className="mb-4 text-2xl flex justify-center"><Umbrella /></div>
              <h3 className="font-bebas text-xl mb-2">Legal employment & labor law compliance</h3>
              <p>We ensure your business adheres to local employment regulations with zero legal hassle.</p>
            </div>
            <div className="bg-workzap-black rounded-lg p-8 text-white text-center">
              <div className="mb-4 text-2xl flex justify-center"><Gem /></div>
              <h3 className="font-bebas text-xl mb-2">Payroll & tax management</h3>
              <p>Accurate, timely payroll processing and tax filings handled end-to-end on your behalf.</p>
            </div>
            <div className="bg-workzap-black rounded-lg p-8 text-white text-center">
              <div className="mb-4 text-2xl flex justify-center"><FileCheck /></div>
              <h3 className="font-bebas text-xl mb-2">Locally compliant contracts</h3>
              <p>We draft and manage contracts that meet local laws and protect your business interests.</p>
            </div>
            <div className="bg-workzap-black rounded-lg p-8 text-white text-center">
              <div className="mb-4 text-2xl flex justify-center"><HeartPulse /></div>
              <h3 className="font-bebas text-xl mb-2">Health & statutory benefits</h3>
              <p>Provide employee benefits, including self and parental health insurance, sick leaves and more.</p>
            </div>
            <div className="bg-workzap-black rounded-lg p-8 text-white text-center">
              <div className="mb-4 text-2xl flex justify-center"><UserPlus /></div>
              <h3 className="font-bebas text-xl mb-2">Seamless onboarding & offboarding</h3>
              <p>From the first day to the last, we manage smooth employee transitions globally.</p>
            </div>
            <div className="bg-workzap-black rounded-lg p-8 text-white text-center">
              <div className="mb-4 text-2xl flex justify-center"><LifeBuoy /></div>
              <h3 className="font-bebas text-xl mb-2">Ongoing HR support</h3>
              <p>Your team gets continuous HR assistance for queries, policies, and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="order-1 md:order-1 rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-square">
            <img src="/287_1.jpg" alt="Legal compliance" className="w-full h-full object-cover" loading="lazy" />
          </div>
          {/* Image 2 */}
          <div className="order-3 md:order-2 rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-square">
            <img src="/287_2.jpg" alt="Tax compliance" className="w-full h-full object-cover" loading="lazy" />
          </div>
          {/* Image 3 */}
          <div className="order-5 md:order-3 rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-square">
            <img src="/287_3.jpg" alt="Benefits disbursement" className="w-full h-full object-cover" loading="lazy" />
          </div>

          {/* Text 1 */}
          <div className="order-2 md:order-4">
            <h3 className="font-bebas text-xl text-workzap-black mb-2">Legal Compliance</h3>
            <p className="text-gray-700">Workzap ensures your hires are fully compliant with local labor laws and international regulations. We provide tailored contracts that safeguard both your company and employees while minimizing legal and financial risks.</p>
          </div>
          {/* Text 2 */}
          <div className="order-4 md:order-5">
            <h3 className="font-bebas text-xl text-workzap-black mb-2">Tax Compliance</h3>
            <p className="text-gray-700">Workzap manages accurate tax withholdings, ensuring full compliance with tax laws. As the employer, we handle all payroll taxes, filings, and timely payments, relieving you from the financial complexities of international employment.</p>
          </div>
          {/* Text 3 */}
          <div className="order-6 md:order-6">
            <h3 className="font-bebas text-xl text-workzap-black mb-2">Benefits Disbursement</h3>
            <p className="text-gray-700">Workzap administers comprehensive benefits, including health insurance for both employees and their parents, along with leave policies. Employees also receive bonuses and recurring bonuses, enhancing their overall compensation package.</p>
          </div>
        </div>
      </section>

      {/* Ultimate Employee Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bebas text-3xl md:text-4xl text-workzap-black mb-6">The Ultimate Employee Experience</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Many EOR services rely on third-party vendors for hiring, payroll, and HR, resulting in a fragmented experience. At Workzap, we manage everything through our fully owned entities, with dedicated Client Success Managers overseeing both clients and associates. This ensures a seamless, unified experience and a direct point of contact throughout.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center aspect-video">
            <img src="/eor4.jpg" alt="Ultimate employee experience" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Employee Globe Section */}
      <section className="py-20 bg-workzap-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center aspect-video mb-6 lg:mb-0">
            <img src="/eor-2.jpg" alt="Hire, pay and manage in Pakistan" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-bebas text-3xl md:text-4xl text-white mb-6">Easily Hire, Pay, and Manage Employees in Pakistan with Workzap.</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hiring employees in Pakistan typically involves setting up a local office, registering a subsidiary, and opening a local bank account. Plus, navigating regional payroll, tax, benefits, and HR laws can be complex and time-consuming.
              <br /><br />
              Workzap streamlines this process, enabling you to hire, onboard, and manage employees in Pakistan quickly and compliantly. We take care of everything from payroll and tax management to benefits administration, so you can focus on growing your business without the administrative burden.
            </p>
            <Button onClick={scrollToFAQ} className="bg-workzap-gold text-workzap-black hover:bg-workzap-yellow focus-gold btn-hover transition-smooth mt-6">
              Book A Discovery Call
            </Button>
          </div>
        </div>
      </section>

  {/* Calendly section before footer */}
  <CalendlySection id="faq-calendly" />
  <Footer />
    </div>
  );
};

export default EoRPage;
