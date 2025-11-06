import React, { useState } from 'react';
import { MapPin, ShieldCheck, Image as ImageIcon, Navigation as NavIcon, MessageCircle, ToggleLeft, CheckCircle2, Check, BarChart3, Lock, Rocket, DollarSign } from 'lucide-react';

export const TwinPaths = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8" id="customers">
      <div className="rounded-2xl p-6 bg-white border border-orange-100 shadow-sm">
        <h3 className="text-xl font-semibold">Find local stores on the map</h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li className="flex items-center gap-2"><MapPin size={18} className="text-orange-600"/> GPS map</li>
          <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-orange-600"/> verified sellers</li>
          <li className="flex items-center gap-2"><ImageIcon size={18} className="text-orange-600"/> product photos & videos</li>
          <li className="flex items-center gap-2"><NavIcon size={18} className="text-orange-600"/> pickup orders</li>
          <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-orange-600"/> OTP login</li>
          <li className="flex items-center gap-2"><MessageCircle size={18} className="text-orange-600"/> private chat/video</li>
        </ul>
        <a href="#get-app" className="mt-6 inline-block rounded-full bg-orange-600 text-white px-4 py-2 text-sm font-medium">Download App</a>
      </div>
      <div className="rounded-2xl p-6 bg-white border border-orange-100 shadow-sm" id="sellers">
        <h3 className="text-xl font-semibold">Start selling in minutes</h3>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-orange-600"/> Admin verification</li>
          <li className="flex items-center gap-2"><ImageIcon size={18} className="text-orange-600"/> add products from phone</li>
          <li className="flex items-center gap-2"><ToggleLeft size={18} className="text-orange-600"/> toggle availability</li>
          <li className="flex items-center gap-2"><Check size={18} className="text-orange-600"/> order tabs (Confirmed / Ready)</li>
          <li className="flex items-center gap-2"><BarChart3 size={18} className="text-orange-600"/> earnings & reports</li>
        </ul>
        <a href="#seller-form" className="mt-6 inline-block rounded-full border border-orange-300 text-orange-700 px-4 py-2 text-sm font-medium">Become a Seller</a>
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how" className="bg-gradient-to-b from-white to-orange-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-orange-700">Customers</h3>
            <ol className="mt-4 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-orange-600 text-white grid place-items-center text-sm">1</span> Open map → nearby sellers</li>
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-orange-600 text-white grid place-items-center text-sm">2</span> View products (images + video)</li>
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-orange-600 text-white grid place-items-center text-sm">3</span> Place pickup order → get notified when Ready for Pickup</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-orange-700">Sellers</h3>
            <ol className="mt-4 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-orange-600 text-white grid place-items-center text-sm">1</span> Apply → Admin verifies → credentials issued</li>
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-orange-600 text-white grid place-items-center text-sm">2</span> Add products (photos/video), set price, toggle live</li>
              <li className="flex gap-3"><span className="h-7 w-7 rounded-full bg-orange-600 text-white grid place-items-center text-sm">3</span> Manage orders (Pending/Confirmed/Ready), get paid, view reports</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  const items = [
    { icon: ToggleLeft, title: 'Real-time Availability Toggle', desc: 'Instantly reflects in the customer app.' },
    { icon: Lock, title: 'Privacy-First Chat & Video', desc: 'Talk without sharing phone numbers.' },
    { icon: Check, title: 'OTP Email Login', desc: 'Simple, fast, secure access.' },
    { icon: BarChart3, title: 'Seller Dashboard', desc: 'Sales, counts, revenue, withdrawals.' },
    { icon: MapPin, title: 'Map-First Discovery', desc: 'See what’s around you instantly.' },
    { icon: Rocket, title: 'Pickup-Only Simplicity', desc: 'Fast local commerce—no couriers needed.' },
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold">Feature highlights</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-orange-100 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-rose-500 text-white grid place-items-center">
              <Icon size={18} />
            </div>
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-gradient-to-b from-orange-50/60 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white border border-orange-100 shadow-sm">
            <h3 className="text-lg font-semibold">Free (starter)</h3>
            <ul className="mt-3 text-gray-700 space-y-2 text-sm">
              <li>List products</li>
              <li>Map visibility</li>
              <li>Pickup orders</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-white border border-orange-100 shadow-sm">
            <h3 className="text-lg font-semibold">Pro (optional)</h3>
            <ul className="mt-3 text-gray-700 space-y-2 text-sm">
              <li>Featured placement</li>
              <li>Basic analytics</li>
            </ul>
          </div>
        </div>
        <a href="#seller-form" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-orange-600 to-rose-500 text-white px-5 py-3 text-sm font-semibold shadow-lg"><DollarSign size={16}/> Apply Now</a>
      </div>
    </section>
  );
};

export const FAQs = () => {
  const faqs = [
    { q: 'Is delivery supported?', a: 'We’re pickup-first. Delivery pilots coming soon.' },
    { q: 'How do I get verified?', a: 'Apply, upload details; admin approves.' },
    { q: 'Do I need to share my number?', a: 'No—use in-app chat/video.' },
    { q: 'How does payment work?', a: 'Local pickup; sellers track earnings in dashboard.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold">FAQs</h2>
      <div className="mt-6 divide-y divide-orange-100 rounded-2xl border border-orange-100 bg-white">
        {faqs.map((f, i) => (
          <div key={i} className="p-5">
            <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="font-medium">{f.q}</span>
              <span className="text-orange-600">{open === i ? '-' : '+'}</span>
            </button>
            {open === i && <p className="mt-2 text-gray-600 text-sm">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-orange-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-white grid place-items-center font-bold">H</div>
            <span className="font-semibold">Helloo Local</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">hello@helloolocal.app</p>
        </div>
        <div className="text-sm text-gray-700 grid grid-cols-2 gap-2">
          <a href="#" className="hover:text-orange-600">Privacy Policy</a>
          <a href="#" className="hover:text-orange-600">Terms</a>
          <a href="#contact" className="hover:text-orange-600">Contact</a>
          <a href="#" className="hover:text-orange-600">Press</a>
        </div>
        <div className="text-sm text-gray-600 md:text-right">© {new Date().getFullYear()} Helloo Local. All rights reserved.</div>
      </div>
    </footer>
  );
};
