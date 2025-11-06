import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { Features, HowItWorks, Gallery, SellerApply } from './components/Sections';
import FeatureCarousel from './components/FeatureCarousel';
import BottomCTA from './components/BottomCTA';

export default function App() {
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      const m = document.createElement('meta');
      m.setAttribute('name', 'theme-color');
      m.setAttribute('content', '#0B57D0');
      document.head.appendChild(m);
    } else {
      meta.setAttribute('content', '#0B57D0');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navigation />
      <main>
        <Hero />
        <FeatureCarousel />
        <Features />
        <HowItWorks />
        <Gallery />
        <SellerApply />
      </main>
      <footer className="py-10 border-t border-slate-200/70 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Helloo Local. All rights reserved.</p>
          <div className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
          </div>
        </div>
      </footer>
      <BottomCTA />
    </div>
  );
}
