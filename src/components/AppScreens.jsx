import { Smartphone, AppWindow, Image, BadgeCheck } from 'lucide-react';

export default function AppScreens() {
  const screens = [
    {
      title: 'Buyer App',
      desc: 'Clean, thumb-friendly browsing with quick filters and one-tap checkout.',
      highlights: ['Home feed', 'Store profile', 'Product details'],
    },
    {
      title: 'Seller App',
      desc: 'Simple tools for order tracking, catalog updates, and chat with customers.',
      highlights: ['Orders', 'Catalog', 'Chat'],
    },
  ];

  return (
    <section id="apps" className="py-16 sm:py-20 bg-gradient-to-b from-white to-orange-50/40 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300 px-3 py-1 text-xs font-semibold">
              <AppWindow className="h-4 w-4" /> App Screens
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              See how it looks in the app
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              A clear preview of the buyer and seller experiences. Optimized for readability with an orange-first theme.
            </p>
          </div>
          <a href="#apply" className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-colors">
            Become a Seller
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {screens.map((s) => (
            <div key={s.title} className="rounded-2xl border border-orange-200/60 dark:border-orange-500/20 bg-white dark:bg-slate-900 p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-orange-600" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {s.highlights.map((h) => (
                  <div key={h} className="aspect-[9/16] rounded-xl border border-orange-200/60 dark:border-orange-500/20 bg-gradient-to-tr from-orange-50 to-white dark:from-orange-500/10 dark:to-slate-900 relative overflow-hidden">
                    <div className="absolute inset-0 p-2 flex flex-col">
                      <div className="h-8 rounded-md bg-orange-200/50 dark:bg-orange-500/20" />
                      <div className="mt-2 h-3 w-3/5 rounded bg-orange-200/50 dark:bg-orange-500/20" />
                      <div className="mt-1 h-3 w-2/5 rounded bg-orange-200/40 dark:bg-orange-500/10" />
                      <div className="mt-auto grid grid-cols-3 gap-1">
                        <div className="h-8 rounded-md bg-orange-200/40 dark:bg-orange-500/10" />
                        <div className="h-8 rounded-md bg-orange-200/40 dark:bg-orange-500/10" />
                        <div className="h-8 rounded-md bg-orange-200/40 dark:bg-orange-500/10" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-[10px] font-medium text-orange-800/80 dark:text-orange-300/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded px-2 py-1 border border-orange-200/60 dark:border-orange-500/20">
                      {h}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <BadgeCheck className="h-4 w-4 text-orange-600" /> Strategic placements: clean title area, clear CTAs, legible labels.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
