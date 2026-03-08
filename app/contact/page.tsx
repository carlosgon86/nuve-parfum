'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: '#1A1208',
    backgroundColor: '#fff',
    borderColor: 'rgba(26,18,8,0.2)',
    outline: 'none',
    width: '100%',
    padding: '1rem 1.25rem',
    border: '1px solid rgba(26,18,8,0.2)',
    fontSize: '0.875rem',
    transition: 'border-color 0.2s',
  };

  return (
    <>
      {/* Header */}
      <section
        className="py-28 px-6 text-center relative overflow-hidden"
        style={{ backgroundColor: '#1A1208' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 80%, #C9A96E 0%, transparent 55%)',
          }}
        />
        <div className="relative z-10">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.25em' }}
          >
            Get in Touch
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
          >
            Contact Us
          </h1>
          <p
            className="text-base mt-6 max-w-md mx-auto leading-relaxed"
            style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Questions about your order, our fragrances, or anything else — we are here.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Info column */}
          <div className="lg:col-span-2">
            <p
              className="text-xs tracking-widest uppercase mb-8"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
            >
              How to Reach Us
            </p>

            <div className="space-y-10">
              {[
                {
                  title: 'Email',
                  detail: 'hello@nuveparfum.com',
                  sub: 'We respond within 24 hours',
                },
                {
                  title: 'Shipping',
                  detail: 'Free UK Delivery',
                  sub: 'On all orders, dispatched within 1–2 working days',
                },
                {
                  title: 'Returns',
                  detail: '30-Day Returns',
                  sub: 'Not in love with your fragrance? We will sort it.',
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-6 h-px mb-4" style={{ backgroundColor: '#C9A96E' }} />
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-base font-medium mb-1"
                    style={{ color: '#1A1208', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {item.detail}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: 'rgba(26,18,8,0.55)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ quick links */}
            <div className="mt-14">
              <p
                className="text-xs tracking-widest uppercase mb-6"
                style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
              >
                Quick Answers
              </p>
              {[
                'How long do your fragrances last?',
                'Can I return an opened bottle?',
                'Do you ship internationally?',
                'What is your concentration?',
              ].map((q, i) => (
                <div
                  key={i}
                  className="py-4 border-b flex items-center justify-between group cursor-default"
                  style={{ borderColor: 'rgba(26,18,8,0.1)' }}
                >
                  <p
                    className="text-sm"
                    style={{ color: 'rgba(26,18,8,0.7)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {q}
                  </p>
                  <span style={{ color: '#C9A96E' }}>+</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="h-full flex items-center justify-center text-center p-16 border"
                style={{ borderColor: 'rgba(201,169,110,0.3)', minHeight: '400px' }}
              >
                <div>
                  <div
                    className="w-px h-16 mx-auto mb-8"
                    style={{ background: 'linear-gradient(to bottom, #C9A96E, transparent)' }}
                  />
                  <p
                    className="text-3xl mb-4"
                    style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400 }}
                  >
                    Thank you
                  </p>
                  <p
                    className="text-base"
                    style={{ color: 'rgba(26,18,8,0.6)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    Your message has been received. We will be in touch within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
                  >
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Enquiry</option>
                    <option value="product">Product Question</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    rows={7}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 text-xs tracking-widest uppercase transition-all duration-300"
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    backgroundColor: '#1A1208',
                    color: '#F5F0E8',
                    letterSpacing: '0.2em',
                    border: '1px solid #1A1208',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C9A96E';
                    (e.currentTarget as HTMLButtonElement).style.color = '#1A1208';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#C9A96E';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1A1208';
                    (e.currentTarget as HTMLButtonElement).style.color = '#F5F0E8';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#1A1208';
                  }}
                >
                  Send Message
                </button>

                <p
                  className="text-xs text-center"
                  style={{ color: 'rgba(26,18,8,0.4)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  We respond to all messages within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="py-12 px-6" style={{ backgroundColor: '#1A1208' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: 'rgba(201,169,110,0.5)', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
          >
            Nuv&eacute; Parfum &mdash; Find Your Aura &mdash; Free UK Delivery on All Orders
          </p>
        </div>
      </section>
    </>
  );
}
