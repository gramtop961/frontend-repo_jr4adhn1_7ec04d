import React from 'react';
import { Store, Users, HelpCircle, Sparkles, CreditCard, MessageCircle, Phone, Download } from 'lucide-react';

const Navigation = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-orange-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-md grid place-items-center text-white font-bold">H</div>
          <span className="font-semibold text-lg">Helloo <span className="text-orange-600">Local</span></span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <li><button onClick={() => scrollToId('customers')} className="hover:text-orange-600 transition">Customers</button></li>
          <li><button onClick={() => scrollToId('sellers')} className="hover:text-orange-600 transition">Sellers</button></li>
          <li><button onClick={() => scrollToId('how')} className="hover:text-orange-600 transition">How It Works</button></li>
          <li><button onClick={() => scrollToId('features')} className="hover:text-orange-600 transition">Features</button></li>
          <li><button onClick={() => scrollToId('pricing')} className="hover:text-orange-600 transition">Pricing</button></li>
          <li><button onClick={() => scrollToId('faqs')} className="hover:text-orange-600 transition">FAQs</button></li>
          <li><button onClick={() => scrollToId('contact')} className="hover:text-orange-600 transition">Contact</button></li>
        </ul>
        <div className="flex items-center gap-2">
          <a href="#seller-form" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-orange-600 to-rose-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-orange-200 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <Store size={16} /> Become a Seller
          </a>
          <a href="#get-app" className="inline-flex items-center gap-2 rounded-full border border-orange-300 text-orange-700 px-4 py-2 text-sm font-medium hover:bg-orange-50">
            <Download size={16} /> Get the App
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
