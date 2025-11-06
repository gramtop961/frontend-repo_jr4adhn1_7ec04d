import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Lock, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/40 to-white" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-orange-700 ring-1 ring-orange-200 text-xs font-medium">
            <Download size={14}/> iOS & Android
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Buy & sell from real people near you
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Discover local stores, home sellers, and creators—place pickup orders today.
          </p>
          <div className="mt-6 flex flex-wrap gap-3" id="get-app">
            <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-orange-600 to-rose-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-orange-200">
              Get the App <ArrowRight size={16} />
            </a>
            <a href="#seller-form" className="inline-flex items-center gap-2 rounded-full border border-orange-300 text-orange-700 px-5 py-3 text-sm font-semibold bg-white/70 backdrop-blur hover:bg-white">
              Become a Seller
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={18}/> Admin-Verified Sellers</div>
            <div className="flex items-center gap-2"><Lock className="text-green-600" size={18}/> Privacy-Safe Chat & Video</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
