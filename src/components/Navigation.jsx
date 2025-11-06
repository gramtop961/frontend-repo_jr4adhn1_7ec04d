import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border-b border-white/20 dark:border-slate-700/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 via-green-500 to-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">Helloo Local</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-shadow"
            >
              Become a Seller
            </a>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-3 top-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 shadow-2xl border border-slate-200/60 dark:border-slate-700/60">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-semibold text-slate-900 dark:text-white">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 via-green-500 to-blue-600 shadow-lg"
            >
              Become a Seller
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
