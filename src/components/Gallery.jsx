import { motion } from 'framer-motion';

const screens = [
  'https://images.unsplash.com/photo-1541150443594-859ccb50f5f6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550867428-2d51a8779241?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601034913831-d24e511c11c9?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">Experience the app</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Drag to explore interfaces crafted for speed and clarity.</p>
          </div>
        </div>
        <div className="mt-8 overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
            className="flex gap-4 cursor-grab active:cursor-grabbing"
          >
            {screens.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`App screen ${i + 1}`}
                loading="lazy"
                className="h-80 w-56 sm:h-96 sm:w-64 object-cover rounded-3xl shadow-xl select-none border border-neutral-200 dark:border-white/10"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
