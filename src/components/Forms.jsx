import React, { useState } from 'react';

const Input = ({ label, ...props }) => (
  <label className="block">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <input {...props} className="mt-1 w-full rounded-xl border border-orange-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
  </label>
);

const TextArea = ({ label, ...props }) => (
  <label className="block">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <textarea {...props} className="mt-1 w-full rounded-xl border border-orange-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" />
  </label>
);

export const SellerForm = () => {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrors({});

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const req = ['brand', 'seller', 'email', 'city'];
    const errs = {};
    req.forEach((k) => { if (!data[k]) errs[k] = 'Required'; });
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/seller/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="seller-form" className="bg-gradient-to-b from-white to-orange-50/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">Apply to become a seller</h2>
        <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4 rounded-2xl p-6 bg-white border border-orange-100 shadow-sm">
          <Input name="brand" label="Store/Brand Name" placeholder="Eg. Sunny Grocers" />
          <Input name="seller" label="Seller Name" placeholder="Your full name" />
          <Input name="email" type="email" label="Email" placeholder="you@example.com" />
          <Input name="phone" label="Phone (optional)" placeholder="" />
          <Input name="address" label="Address" placeholder="Street address" />
          <Input name="city" label="City" placeholder="Your city" />
          <Input name="zip" label="ZIP" placeholder="Postal code" />
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Business Type</span>
            <select name="type" className="mt-1 w-full rounded-xl border border-orange-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="Retail">Retail</option>
              <option value="Home Seller">Home Seller</option>
              <option value="Creator">Creator</option>
            </select>
          </label>
          <TextArea name="desc" label="Short Description" rows={3} placeholder="What do you sell?" />
          <Input name="links" label="Links (optional)" placeholder="Website/Instagram/etc" />
          <label className="flex items-center gap-2 md:col-span-2">
            <input type="checkbox" name="confirm" className="rounded border-orange-300 text-orange-600 focus:ring-orange-500" required />
            <span className="text-sm text-gray-700">I confirm the info is accurate</span>
          </label>
          <div className="md:col-span-2">
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-orange-600 to-rose-500 text-white px-5 py-3 text-sm font-semibold shadow-lg disabled:opacity-60">
              {loading ? 'Submitting…' : 'Submit application'}
            </button>
            {status === 'success' && <span className="ml-3 text-green-700 text-sm">Thanks! We’ll verify and email your login credentials.</span>}
            {status === 'error' && <span className="ml-3 text-rose-600 text-sm">Something went wrong. Please try again.</span>}
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {['brand','seller','email','city'].map((k) => errors[k] && (
              <div key={k} className="text-rose-600 text-xs">{k} is required</div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export const CustomerCapture = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/customer/early', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-2xl p-6 bg-white border border-orange-100 shadow-sm">
        <h3 className="text-xl font-semibold">Get early access & local deals</h3>
        <form onSubmit={onSubmit} className="mt-4 grid md:grid-cols-3 gap-4">
          <Input name="name" label="Name" placeholder="Your name" />
          <Input name="email" type="email" label="Email" placeholder="you@example.com" />
          <Input name="city" label="City" placeholder="Your city" />
          <div className="md:col-span-3">
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-full bg-orange-600 text-white px-5 py-3 text-sm font-semibold disabled:opacity-60">{loading ? 'Submitting…' : 'You’re in!'}</button>
            {status === 'success' && <span className="ml-3 text-green-700 text-sm">You’re in! Check your inbox.</span>}
            {status === 'error' && <span className="ml-3 text-rose-600 text-sm">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  );
};
