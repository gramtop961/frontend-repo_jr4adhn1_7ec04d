import { useState } from 'react';

export function SellerForm() {
  const [form, setForm] = useState({ name: '', phone: '', shop: '', city: ''});
  const [status, setStatus] = useState({ state: 'idle', message: ''});

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.shop || !form.city) {
      setStatus({ state: 'error', message: 'Please fill all required fields.'});
      return;
    }
    try {
      setStatus({ state: 'loading', message: ''});
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/seller/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus({ state: 'success', message: 'Thank you! We will reach out shortly.'});
      setForm({ name: '', phone: '', shop: '', city: ''});
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.'});
    }
  };

  return (
    <section id="seller-apply" className="py-20 bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-800 p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Become a Seller</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Join the hyperlocal marketplace and start getting orders today.</p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="+91 98765 43210"
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">Shop Name</label>
              <input
                name="shop"
                value={form.shop}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Sunrise Grocers"
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">City</label>
              <input
                name="city"
                value={form.city}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Bengaluru"
                required
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4 mt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-amber-400 to-lime-400 shadow-lg"
                disabled={status.state === 'loading'}
              >
                {status.state === 'loading' ? 'Submitting...' : 'Apply Now'}
              </button>
              {status.state !== 'idle' && (
                <p className={
                  status.state === 'success' ? 'text-lime-600 dark:text-lime-400 text-sm' : 'text-rose-600 dark:text-rose-400 text-sm'
                }>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
