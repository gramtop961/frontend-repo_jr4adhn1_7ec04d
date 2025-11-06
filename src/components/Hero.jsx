import React from 'react';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-rose-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Buy & sell from real people near you
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover local stores, home sellers, and creators—place pickup orders today.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" id="get-app">
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-orange-600 to-rose-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-orange-200">
                Get the App <ArrowRight size={16} />
              </a>
              <a href="#seller-form" className="inline-flex items-center gap-2 rounded-full border border-orange-300 text-orange-700 px-5 py-3 text-sm font-semibold hover:bg-orange-50">
                Become a Seller
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={18}/> Admin-Verified Sellers</div>
              <div className="flex items-center gap-2"><Lock className="text-green-600" size={18}/> Privacy-Safe Chat & Video</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-orange-100 bg-white">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Promo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[1,2,3].map((i) => (
                <div key={i} className="h-28 rounded-xl bg-gradient-to-br from-orange-100 to-rose-100 shadow-inner" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
