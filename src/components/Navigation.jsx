import { useState } from 'react';
import { Rocket, Store, Download } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const scrollToSeller = () => {
    const el = document.getElementById('seller-apply');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-amber-500 to-lime-500 shadow-md grid place-items-center text-white">
              <Store size={18} />
            </div>
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">Helloo Local</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollToSeller}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-amber-400 to-lime-400 shadow-sm hover:shadow transition-shadow"
              aria-label="Become a Seller"
            >
              <Rocket size={16} /> Become a Seller
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.example.helloolocal"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-fuchsia-800 bg-fuchsia-50 hover:bg-fuchsia-100 border border-fuchsia-200 dark:text-white dark:bg-fuchsia-600/20 dark:hover:bg-fuchsia-600/30 dark:border-fuchsia-500/30"
              aria-label="Get the App"
            >
              <Download size={16} /> Get the App
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <button
              onClick={() => { setOpen(false); scrollToSeller(); }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-amber-400 to-lime-400"
            >
              <Rocket size={16} /> Become a Seller
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.example.helloolocal"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-fuchsia-800 bg-fuchsia-50 border border-fuchsia-200 dark:text-white dark:bg-fuchsia-600/20 dark:border-fuchsia-500/30"
            >
              <Download size={16} /> Get the App
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
