import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full grid place-items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80 dark:from-slate-950/80 dark:via-slate-950/40 dark:to-slate-950/80" />

      <div className="relative z-20 text-center px-6 sm:px-8 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-white/40 dark:border-slate-700">
          <Star className="h-3.5 w-3.5 text-orange-500" />
          <span className="text-slate-700 dark:text-slate-200">Festive Local: Saffron • Green • Royal Blue</span>
        </div>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 bg-clip-text text-transparent">
          Discover and Support Local Gems
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">
          A premium marketplace that connects you with authentic local sellers. Beautifully crafted, lightning fast, and mobile-first.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-shadow"
          >
            Become a Seller
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-white/50 dark:border-slate-700"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-slate-950/40 dark:to-slate-950" />
    </section>
  );
}
