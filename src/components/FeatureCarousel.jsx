import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Gauge, Smartphone, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    icon: <Store className="h-6 w-6 text-orange-500" />,
    title: 'Local-first Marketplace',
    desc: 'Discover trusted neighborhood sellers with authentic products.'
  },
  {
    icon: <Smartphone className="h-6 w-6 text-green-500" />,
    title: 'Mobile-native UX',
    desc: 'Thumb-friendly controls, smooth gestures, and instant feedback.'
  },
  {
    icon: <Gauge className="h-6 w-6 text-blue-600" />,
    title: 'Lightning Performance',
    desc: 'Smart caching, tiny bundles, and buttery animations.'
  }
];

export default function FeatureCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const threshold = 40; // swipe threshold in px

  const go = (dir) => {
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    if (startX.current === null) return;
    const delta = e.touches[0].clientX - startX.current;
    if (Math.abs(delta) > threshold) {
      go(delta < 0 ? 1 : -1);
      startX.current = e.touches[0].clientX; // reset for continuous swipe
    }
  };
  const onTouchEnd = () => {
    startX.current = null;
  };

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-10 sm:py-14" aria-label="Feature highlights carousel">
      <div className="mx-auto max-w-md px-6">
        <div
          className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-5 shadow-md"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-tr from-orange-50 via-green-50 to-blue-50 dark:from-orange-500/10 dark:via-green-500/10 dark:to-blue-500/10">
                {slides[index].icon}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{slides[index].title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{slides[index].desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button aria-label="Previous" onClick={() => go(-1)} className="rounded-full p-2 bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button aria-label="Next" onClick={() => go(1)} className="rounded-full p-2 bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            {slides.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-gradient-to-r from-orange-500 via-green-500 to-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-700'}`} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
