import { CheckCircle2, XCircle, Rocket, Shield, Sparkles } from 'lucide-react';

export default function Comparison() {
  const rows = [
    {
      feature: 'Truly Local Sellers',
      ours: true,
      others: 'Aggregator focus',
    },
    {
      feature: 'Faster Mobile Experience',
      ours: true,
      others: 'Heavy, laggy pages',
    },
    {
      feature: 'Transparent Pricing',
      ours: true,
      others: 'Hidden fees',
    },
    {
      feature: 'Direct Chat with Store',
      ours: true,
      others: 'Ticket systems',
    },
    {
      feature: 'Festival-ready Themes',
      ours: true,
      others: 'Generic look & feel',
    },
  ];

  return (
    <section id="comparison" className="py-16 sm:py-20 bg-gradient-to-b from-white to-orange-50/50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300 px-3 py-1 text-xs font-semibold">
            <Rocket className="h-4 w-4" /> Why Helloo Local
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Better for buyers. Better for sellers.
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            We focus on real neighborhood stores, blazing performance, and clear pricing — so both sides win.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-orange-200/60 dark:border-orange-500/20 bg-white dark:bg-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-orange-200/60 dark:border-orange-500/20">
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Feature</div>
            </div>
            <div className="p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-orange-200/60 dark:border-orange-500/20">
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Helloo Local</div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Others</div>
            </div>
          </div>

          {rows.map((r) => (
            <div key={r.feature} className="grid grid-cols-1 sm:grid-cols-3 border-t border-orange-200/60 dark:border-orange-500/20">
              <div className="p-4 sm:p-5 text-slate-900 dark:text-white font-medium">{r.feature}</div>
              <div className="p-4 sm:p-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300 px-3 py-1 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Included
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 text-sm font-semibold">
                  <XCircle className="h-4 w-4 text-slate-400" /> {r.others}
                </span>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 sm:p-5 border-t border-orange-200/60 dark:border-orange-500/20 bg-gradient-to-r from-orange-50 to-white dark:from-orange-500/10 dark:to-slate-900">
            <div className="inline-flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200">
              <Shield className="h-4 w-4 text-orange-600" /> Fair, safe, and fast by design.
            </div>
            <a href="#apply" className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-colors">
              Become a Seller
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
