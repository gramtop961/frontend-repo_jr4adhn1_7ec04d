import { CheckCircle2, Bike, Store, Clock, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export function TwinPaths() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-xs">
              <Sparkles size={14} /> For Sellers
            </div>
            <h3 className="mt-3 text-2xl font-bold">Launch your local store in minutes</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-400 mt-1" size={18} /> Zero setup fees, instant onboarding</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-400 mt-1" size={18} /> Real‑time orders from nearby customers</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-400 mt-1" size={18} /> Integrated payments & doorstep delivery</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 text-cyan-300 px-3 py-1 text-xs">
              <Sparkles size={14} /> For Local Discovery
            </div>
            <h3 className="mt-3 text-2xl font-bold">Find nearby shops and deals instantly</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-cyan-400 mt-1" size={18} /> Search hyperlocal inventory</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-cyan-400 mt-1" size={18} /> Fast delivery or in‑store pickup</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-cyan-400 mt-1" size={18} /> Trusted reviews from your neighborhood</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const items = [
    { icon: Store, title: 'Onboard', desc: 'Verify your shop and list products with smart templates.' },
    { icon: Zap, title: 'Get Orders', desc: 'Customers nearby discover you and order in real time.' },
    { icon: Bike, title: 'Deliver', desc: 'Use our fleet or your own staff for ultra‑fast fulfillment.' },
    { icon: Clock, title: 'Grow', desc: 'Insights, repeat orders, and promotions that work.' },
  ];
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">How it works</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Simple steps to launch and scale your local business.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white grid place-items-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    { title: 'Smart Catalog', desc: 'Bulk import, AI titles, and auto‑suggested tags.', icon: Sparkles },
    { title: 'Secure Payments', desc: 'Multiple modes with instant settlement.', icon: ShieldCheck },
    { title: 'Delivery Network', desc: 'Integrated riders with live tracking.', icon: Bike },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center text-white mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQs() {
  const faqs = [
    { q: 'Who can sell on Helloo Local?', a: 'Any verified neighborhood business—grocers, pharmacies, bakeries, services, and more.' },
    { q: 'Is there a setup fee?', a: 'No setup fees. We charge a small transaction fee per order.' },
    { q: 'Do you provide delivery?', a: 'Yes, use our delivery network or your own staff.' },
  ];
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">FAQs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 p-6">
              <summary className="cursor-pointer font-medium text-slate-900 dark:text-white">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Helloo Local. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm text-white/70">
          <a href="#" className="hover:text-white">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Terms</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
