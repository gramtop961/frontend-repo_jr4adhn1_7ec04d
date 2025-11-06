import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const imagesCustomer = [
  '/screens/customer-map.jpg',
  '/screens/customer-store.jpg',
  '/screens/customer-gallery.jpg',
  '/screens/customer-order.jpg',
];

const imagesSeller = [
  '/screens/seller-orders.jpg',
  '/screens/seller-add.jpg',
  '/screens/seller-toggle.jpg',
  '/screens/seller-reports.jpg',
];

const Placeholder = ({ label }) => (
  <div className="relative aspect-[9/19] w-48 sm:w-56 md:w-64 rounded-2xl bg-gradient-to-br from-orange-100 via-rose-100 to-white shadow-lg ring-1 ring-orange-200 overflow-hidden">
    <div className="absolute inset-0 grid place-items-center text-xs sm:text-sm font-medium text-gray-600">
      {label}
    </div>
  </div>
);

const Card = ({ src, alt, fallback }) => {
  if (!src) return <Placeholder label={fallback || 'App Screen'} />;
  return (
    <div className="relative aspect-[9/19] w-48 sm:w-56 md:w-64 rounded-2xl overflow-hidden shadow-xl ring-1 ring-orange-200 bg-white">
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
};

const DragCarousel = ({ title, subtitle, items }) => {
  const constraintsRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = constraintsRef.current;
    if (el) {
      const update = () => setWidth(el.scrollWidth - el.offsetWidth);
      update();
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }
  }, []);

  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-white/70 backdrop-blur border border-orange-100 shadow-sm">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-5 overflow-hidden">
        <motion.div ref={constraintsRef} className="cursor-grab active:cursor-grabbing">
          <motion.div drag="x" dragConstraints={{ left: -width, right: 0 }} className="flex gap-4">
            {items.map((it, idx) => (
              <Card key={idx} src={it.src} alt={it.alt} fallback={it.fallback} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const Gallery = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold">App Screens & Video Gallery</h2>
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <DragCarousel
          title="Customer App"
          subtitle="Map, store pages, product galleries, and order flow"
          items={imagesCustomer.map((src, i) => ({ src, alt: `Customer screen ${i+1}`, fallback: 'Customer Screen' }))}
        />
        <DragCarousel
          title="Seller App"
          subtitle="Orders, add product, toggle availability, and reports"
          items={imagesSeller.map((src, i) => ({ src, alt: `Seller screen ${i+1}`, fallback: 'Seller Screen' }))}
        />
      </div>
      <div className="mt-8 rounded-3xl overflow-hidden ring-1 ring-orange-100 bg-white shadow-sm">
        <div className="aspect-video relative">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Helloo Local Explainer"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
