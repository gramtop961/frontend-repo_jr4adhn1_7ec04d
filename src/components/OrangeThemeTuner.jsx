import Spline from '@splinetool/react-spline';
import { Sun, Contrast } from 'lucide-react';

export default function OrangeThemeTuner() {
  return (
    <section className="relative w-full min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Readability-first overlays. Note pointer-events-none so Spline remains interactive. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 dark:from-slate-950/90 dark:via-slate-950/70 dark:to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300 px-3 py-1 text-xs font-semibold">
          <Sun className="h-4 w-4" /> Orange-first theme
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
          High contrast. Warm energy. Better readability.
        </h2>
        <p className="mt-2 text-base sm:text-lg text-slate-700 dark:text-slate-300">
          We tuned overlays and contrast so text stays crisp over the 3D hero — especially on mobile and bright screens.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <Contrast className="h-4 w-4 text-orange-600" /> Elevated contrast and thicker font weights for key headings.
        </div>
      </div>
    </section>
  );
}
