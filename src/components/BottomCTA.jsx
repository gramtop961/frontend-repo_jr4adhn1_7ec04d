import { PhoneCall, Store } from 'lucide-react';

export default function BottomCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-auto max-w-2xl px-4 pb-4">
        <div className="rounded-2xl backdrop-blur bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/60 shadow-xl">
          <div className="grid grid-cols-2 gap-2 p-2">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 shadow-lg shadow-blue-600/30"
            >
              <Store className="h-5 w-5" /> Become a Seller
            </a>
            <a
              href="#"
              aria-label="Get the app on Play Store"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700"
            >
              <PhoneCall className="h-5 w-5 text-green-600" /> Get the App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
