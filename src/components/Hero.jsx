import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSeller = () => {
    const el = document.getElementById('seller-apply');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800">
      {/* Spline scene at base layer */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay above Spline, below content. Must not block pointer events */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-orange-500/20 via-green-500/15 to-blue-600/25 pointer-events-none mix-blend-overlay" />

      {/* Content on top so text is always visible */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
            <Sparkles size={14} className="text-orange-300" /> Hyperlocal commerce, reimagined
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Buy and sell in your neighborhood — instantly
          </h1>
          <p className="mt-4 max-w-xl text-white/80 text-base sm:text-lg">
            Helloo Local connects neighborhood sellers with nearby customers through a seamless, real‑time marketplace experience.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToSeller}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600/50 focus:ring-offset-neutral-900"
            >
              Become a Seller
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.example.helloolocal"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-neutral-900 bg-white/90 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600/50 focus:ring-offset-neutral-900"
            >
              Get the App
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 5}`}
                  alt="Happy customer avatar"
                  className="h-8 w-8 rounded-full ring-2 ring-white/10 object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <p>Trusted by 2,000+ neighborhood sellers</p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative rounded-3xl bg-gradient-to-br from-orange-400/30 via-green-400/25 to-blue-500/30 p-1 shadow-2xl">
            <div className="rounded-2xl bg-neutral-950/60 border border-white/10 p-4">
              <img
                src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop"
                alt="Helloo Local app preview"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
