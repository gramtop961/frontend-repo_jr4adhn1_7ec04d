import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import { TwinPaths, HowItWorks, Features, FAQs, Footer } from './components/Sections';
import { SellerForm } from './components/Forms';

export default function App() {
  const siteName = 'Helloo Local';
  const title = 'Helloo Local — Hyperlocal marketplace for instant neighborhood buying and selling';
  const description = 'Become a seller and reach nearby customers instantly. Discover local shops, fast delivery, and secure payments — all in one hyperlocal marketplace.';
  const url = typeof window !== 'undefined' ? window.location.href : 'https://helloolocal.example';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url,
    sameAs: [
      'https://www.instagram.com/',
      'https://twitter.com/'
    ],
    logo: 'https://assets.website-files.com/img/logo.png'
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
