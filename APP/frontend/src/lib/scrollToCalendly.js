// Helper to navigate to main page and scroll to Calendly section
export function scrollToCalendly() {
  if (window.location.pathname !== '/' || !window.location.hash.includes('faq-calendly')) {
    window.location.href = '/#faq-calendly';
    return;
  }
  // If already on main page, scroll to section
  const faqSection = document.getElementById('faq-calendly');
  if (faqSection) {
    faqSection.scrollIntoView({ behavior: 'smooth' });
  }
}