import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Nuv\u00e9 Parfum',
  description: 'The story behind Nuv\u00e9 Parfum. Luxury fragrances crafted with industry leading concentration.',
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Concentration',
      body: 'Every Nuv\u00e9 fragrance carries an industry leading concentration. We built our formulas to last — not to hint, but to hold.',
    },
    {
      title: 'Intention',
      body: 'We do not make fragrances for every occasion. We make fragrances for moments that matter — the ones that get remembered.',
    },
    {
      title: 'Identity',
      body: 'Scent is the most personal thing you can wear. Our collection gives you the language; you write the sentence.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 px-6 overflow-hidden"
        style={{ backgroundColor: '#1A1208' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 30% 60%, #C9A96E 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, #C9A96E 0%, transparent 45%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.25em' }}
          >
            Our Story
          </p>
          <h1
            className="text-5xl md:text-6xl mb-8"
            style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400, lineHeight: 1.15 }}
          >
            Built for those who
            <br />
            <em style={{ color: '#C9A96E' }}>refuse to go unnoticed</em>
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'Arial, Helvetica, sans-serif', maxWidth: '480px', margin: '0 auto' }}
          >
            Nuv&eacute; Parfum was built around a single obsession: creating fragrances with the
            power to define a moment, anchor a memory, and become part of who you are.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div
              className="aspect-[4/5] relative overflow-hidden"
              style={{ backgroundColor: '#1A1208' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 60% 40%, rgba(201,169,110,0.2) 0%, transparent 60%)',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <p
                  className="text-xs tracking-widest uppercase mb-6"
                  style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
                >
                  The Name
                </p>
                <p
                  className="text-6xl mb-6"
                  style={{ color: '#C9A96E', fontFamily: 'Georgia, serif', fontWeight: 400, opacity: 0.3 }}
                >
                  Nuv&eacute;
                </p>
                <div className="w-8 h-px my-6" style={{ backgroundColor: 'rgba(201,169,110,0.4)' }} />
                <p
                  className="text-base italic leading-relaxed"
                  style={{ color: 'rgba(245,240,232,0.65)', fontFamily: 'Georgia, serif' }}
                >
                  From the Latin for cloud. Because the most powerful things are those you cannot touch — only feel.
                </p>
              </div>
            </div>
            <div
              className="absolute -bottom-5 -left-5 w-full h-full border pointer-events-none"
              style={{ borderColor: 'rgba(201,169,110,0.25)', zIndex: -1 }}
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
            >
              The Beginning
            </p>
            <h2
              className="text-4xl md:text-5xl mb-8"
              style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400, lineHeight: 1.2 }}
            >
              A fusion that exists
              <br />
              <em style={{ color: '#C9A96E' }}>nowhere else</em>
            </h2>
            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: 'rgba(26,18,8,0.7)', fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              <p>
                The best fragrances in the world already exist. You know the ones. The problem is — so does
                everyone else.
              </p>
              <p>
                Nuv&eacute; was built on a different idea. Take two iconic scent worlds. Fuse them with
                intention and precision. Create something that has never existed before and exists nowhere else.
              </p>
              <p>
                Every creation in our collection is the result of that process — two worlds colliding to become
                one new thing. Not an imitation. Not a tribute. A genuine fusion with its own identity, its own
                character, and its own way of moving through the world.
              </p>
              <p>
                Because the most powerful scent you can wear is one that belongs entirely to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6" style={{ backgroundColor: '#1A1208' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
            >
              What We Stand For
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
            >
              The Nuv&eacute; principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(201,169,110,0.12)' }}>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-12 text-center"
                style={{ backgroundColor: '#1A1208' }}
              >
                <div
                  className="w-px h-12 mx-auto mb-8"
                  style={{ background: 'linear-gradient(to bottom, #C9A96E, transparent)' }}
                />
                <h3
                  className="text-2xl mb-6"
                  style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Overview */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
            >
              The Collections
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400 }}
            >
              Two worlds. One standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: 'Pour Elle',
                subtitle: 'For her',
                description:
                  'Three fragrances that move between whisper and declaration. Pour Elle was built for the woman who understands that softness and strength are not opposites — they are the same weapon, worn differently.',
                href: '/shop?collection=pour-elle',
                accent: '#D4A0A8',
              },
              {
                title: 'Pour Lui',
                subtitle: 'For him',
                description:
                  'Three fragrances built around presence — not performance. Pour Lui is for the man who has stopped needing to announce himself, and starts simply being someone worth noticing.',
                href: '/shop?collection=pour-lui',
                accent: '#5A8A9F',
              },
            ].map((col) => (
              <div
                key={col.title}
                className="relative overflow-hidden p-12"
                style={{ backgroundColor: '#1A1208', minHeight: '320px' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 75% 20%, ${col.accent}18 0%, transparent 55%)`,
                  }}
                />
                <div className="relative z-10">
                  <p
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
                  >
                    {col.subtitle}
                  </p>
                  <h3
                    className="text-3xl mb-6"
                    style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
                  >
                    {col.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-10 max-w-sm"
                    style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {col.description}
                  </p>
                  <Link href={col.href} className="btn-gold" style={{ padding: '0.7rem 1.8rem' }}>
                    Explore {col.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: '#C9A96E' }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: 'rgba(26,18,8,0.6)', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.25em' }}
        >
          Find Your Aura
        </p>
        <h2
          className="text-4xl md:text-5xl mb-8"
          style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400 }}
        >
          Your signature is waiting
        </h2>
        <Link
          href="/shop"
          className="inline-block text-xs tracking-widest uppercase px-12 py-5 border-2 transition-all duration-300 hover:bg-[#1A1208] hover:text-[#C9A96E] hover:border-[#1A1208]"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#1A1208',
            borderColor: '#1A1208',
            letterSpacing: '0.2em',
            fontWeight: 600,
          }}
        >
          Shop the Collection
        </Link>
      </section>
    </>
  );
}
