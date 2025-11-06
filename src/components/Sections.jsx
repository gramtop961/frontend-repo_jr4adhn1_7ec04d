import { Shield, Rocket, Sparkles, Store, Smartphone, Gauge } from 'lucide-react';

export function Features() {
  const items = [
    {
      icon: <Store className="h-5 w-5 text-orange-500" />,
      title: 'Local-first Marketplace',
      desc: 'Curated stores from your neighborhood with trusted reviews.',
    },
    {
      icon: <Smartphone className="h-5 w-5 text-green-500" />,
      title: 'Mobile-native Experience',
      desc: 'Optimized for thumbs with buttery-smooth interactions.',
    },
    {
      icon: <Gauge className="h-5 w-5 text-blue-600" />,
      title: 'Blazing Performance',
      desc: 'Instant navigation, tiny bundles, and smart caching.',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Why people love Helloo Local</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-50 via-green-50 to-blue-50 dark:from-orange-500/10 dark:via-green-500/10 dark:to-blue-500/10 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                <Sparkles className="h-4 w-4 text-orange-500" /> Feature
              </div>
              <div className="mt-4 flex items-start gap-3">
                {it.icon}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{it.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      title: 'Discover',
      desc: 'Browse vibrant storefronts around you and follow your favorites.',
    },
    {
      title: 'Connect',
      desc: 'Chat, request, and build relationships with real local sellers.',
    },
    {
      title: 'Delight',
      desc: 'Fast delivery, authentic products, and joyful service.',
    },
  ];

  return (
    <section id="how" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">How it works</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-slate-200/70 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
              <span className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-bold bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 shadow-md">
                {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">A glimpse of the vibe</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-tr from-orange-100 via-green-100 to-blue-100 dark:from-orange-500/10 dark:via-green-500/10 dark:to-blue-500/10 border border-slate-200/70 dark:border-slate-800" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SellerApply() {
  return (
    <section id="apply" className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Become a Seller</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Tell us a bit about your store and we’ll reach out.</p>
          <form className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your name</label>
              <input id="name" type="text" required className="h-11 w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500/60" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="store" className="text-sm font-medium text-slate-700 dark:text-slate-300">Store name</label>
              <input id="store" type="text" required className="h-11 w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500/60" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input id="email" type="email" required className="h-11 w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500/60" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-shadow">
              Send application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
