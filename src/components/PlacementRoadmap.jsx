import { Map, Pin, Target, Megaphone } from 'lucide-react';

export default function PlacementRoadmap() {
  const steps = [
    {
      title: 'Homepage Placement',
      desc: 'Prime banners with orange-first contrast for new launches and seasonal promos.',
    },
    {
      title: 'Search & Category Ads',
      desc: 'Contextual cards inside results with clear pricing and trust badges.',
    },
    {
      title: 'Store Spotlight',
      desc: 'Featured modules on city pages highlighting top-rated local sellers.',
    },
    {
      title: 'Re-engagement',
      desc: 'Push and in-app messages to revive interest with limited-time offers.',
    },
  ];

  return (
    <section id="placements" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300 px-3 py-1 text-xs font-semibold">
            <Map className="h-4 w-4" /> Placement Roadmap
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Where your brand shows up</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">A clear plan for visibility across the app — designed to convert with high contrast and clarity.</p>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-orange-200/60 dark:border-orange-500/20 bg-white dark:bg-slate-900 p-5">
              <span className="absolute -top-3 left-5 inline-flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-bold bg-orange-600 shadow">
                {i + 1}
              </span>
              <div className="flex items-start gap-3">
                <Pin className="h-5 w-5 text-orange-600" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <Megaphone className="h-4 w-4 text-orange-600" /> Custom placements available for festivals and city-specific campaigns.
        </div>
      </div>
    </section>
  );
}
