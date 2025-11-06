import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { TwinPaths, HowItWorks, Features, Pricing, FAQs, Footer } from './components/Sections';
import { SellerForm, CustomerCapture } from './components/Forms';

const App = () => {
  React.useEffect(() => {
    // Basic SEO and Open Graph
    document.title = 'Helloo Local — Buy & Sell Nearby | Hyperlocal Marketplace';
    const metaDesc = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    metaDesc.setAttribute('content','Discover local stores and start selling nearby. Pickup-only simplicity, privacy-safe chat, verified sellers.');

    const ogTitle = document.querySelector('meta[property="og:title"]') || (() => { const m = document.createElement('meta'); m.setAttribute('property','og:title'); document.head.appendChild(m); return m; })();
    ogTitle.setAttribute('content','Helloo Local — Hyperlocal Marketplace');
    const ogDesc = document.querySelector('meta[property="og:description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('property','og:description'); document.head.appendChild(m); return m; })();
    ogDesc.setAttribute('content','Buy & sell from real people near you.');
    const ogImage = document.querySelector('meta[property="og:image"]') || (() => { const m = document.createElement('meta'); m.setAttribute('property','og:image'); document.head.appendChild(m); return m; })();
    ogImage.setAttribute('content','/og-image.png');

    // JSON-LD Structured Data (LocalBusiness)
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Helloo Local',
      image: '/og-image.png',
      url: window.location.origin,
      description: 'Hyperlocal marketplace to buy & sell from nearby people and stores. Pickup-first, privacy-safe chat & video.',
      address: { '@type': 'PostalAddress', addressLocality: 'Your City' },
      areaServed: 'Local',
      sameAs: ['https://apps.apple.com', 'https://play.google.com'],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    // Analytics hook placeholder
    window.__analytics = window.__analytics || { track: () => {} };

    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <main>
        <Hero />
        <TwinPaths />
        <HowItWorks />
        <Features />
        <CustomerCapture />
        <Pricing />
        <SellerForm />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
