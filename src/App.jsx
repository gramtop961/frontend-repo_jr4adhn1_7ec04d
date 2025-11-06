import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import { TwinPaths, HowItWorks, Features, FAQs, Footer } from './components/Sections';
import { SellerForm } from './components/Forms';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />
      <main>
        <Hero />
        <TwinPaths />
        <HowItWorks />
        <Features />
        <Gallery />
        <SellerForm />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}
