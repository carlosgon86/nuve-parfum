'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
        >
          Join the House
        </p>
        <h2
          className="text-4xl md:text-5xl mb-6"
          style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400 }}
        >
          Your aura starts here
        </h2>
        <p
          className="text-base mb-10 leading-relaxed"
          style={{ color: 'rgba(26,18,8,0.6)', fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          Be first to discover new fragrances, exclusive offers, and the world of Nuv&eacute; Parfum.
        </p>

        {submitted ? (
          <div
            className="py-6 px-8 border inline-block"
            style={{ borderColor: '#C9A96E' }}
          >
            <p
              className="text-base"
              style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              Thank you. Welcome to the House of Nuv&eacute;.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-4 text-sm border transition-colors duration-200"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#1A1208',
                backgroundColor: '#fff',
                borderColor: 'rgba(26,18,8,0.2)',
                outline: 'none',
              }}
            />
            <button type="submit" className="btn-gold" style={{ whiteSpace: 'nowrap' }}>
              Subscribe
            </button>
          </form>
        )}

        <p
          className="text-xs mt-4"
          style={{ color: 'rgba(26,18,8,0.4)', fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
