import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import EmailSignup from '@/components/EmailSignup';

export default function HomePage() {
  const featured = products.slice(0, 3);

  const reviews = [
    {
      name: 'Sophie R.',
      text: 'Glow Whisper is everything. I get compliments every single time I wear it. This is my signature now.',
      product: 'Glow Whisper',
    },
    {
      name: 'James M.',
      text: 'Obsidian is the most refined fragrance I have ever owned. The longevity is unreal.',
      product: 'Obsidian',
    },
    {
      name: 'Amara K.',
      text: 'Rose Noir stopped three people in their tracks at a dinner party. I will never wear anything else on an evening out.',
      product: 'Rose Noir',
    },
    {
      name: 'Luca D.',
      text: 'Uncharted is my everyday. It just works — clean, grounded, always right. And it genuinely lasts all day.',
      product: 'Uncharted',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#1A1208' }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 50%, #C9A96E 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #C9A96E 0%, transparent 50%)',
          }}
        />

        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }}
        />
        <div
          className="absolute left-0 right-0 bottom-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-8 animate-fade-in-up"
            style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.3em' }}
          >
            Luxury Fragrance
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 animate-fade-in-up delay-100"
            style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', lineHeight: 1.1, fontWeight: 400 }}
          >
            Find Your{' '}
            <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Aura</em>
          </h1>

          <p
            className="text-lg md:text-xl mb-12 max-w-xl mx-auto animate-fade-in-up delay-200"
            style={{ color: 'rgba(245,240,232,0.7)', fontFamily: 'Georgia, serif', lineHeight: 1.7, fontWeight: 400 }}
          >
            Industry leading concentration. Six fragrances built to leave a mark.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="/shop" className="btn-gold">
              Explore the Collection
            </Link>
            <Link
              href="/about"
              className="text-xs tracking-widest uppercase px-10 py-4 border transition-all duration-300"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#F5F0E8',
                borderColor: 'rgba(245,240,232,0.3)',
                letterSpacing: '0.15em',
              }}
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-px h-12"
              style={{ background: 'linear-gradient(to bottom, transparent, #C9A96E)' }}
            />
          </div>
        </div>
      </section>

      {/* Brand bar */}
      <section className="py-5" style={{ backgroundColor: '#C9A96E' }}>
        <div className="flex items-center justify-center gap-8 px-6 overflow-x-auto">
          {['Industry Leading Concentration', 'Pour Elle', 'Pour Lui', 'Free UK Delivery', '6 Signature Scents'].map(
            (item, i) => (
              <div key={i} className="flex items-center gap-8 flex-shrink-0">
                <span
                  className="text-xs tracking-widest uppercase whitespace-nowrap"
                  style={{ color: '#1A1208', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.18em' }}
                >
                  {item}
                </span>
                {i < 4 && (
                  <span style={{ color: 'rgba(26,18,8,0.3)' }}>&#8212;</span>
                )}
              </div>
            )
          )}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
            >
              The House of Nuv&eacute;
            </p>
            <h2
              className="text-4xl md:text-5xl mb-8"
              style={{ color: '#1A1208', fontFamily: 'Georgia, serif', lineHeight: 1.2, fontWeight: 400 }}
            >
              Scent is the only sense
              <br />
              <em style={{ color: '#C9A96E' }}>that never lies</em>
            </h2>
            <p
              className="text-base mb-6 leading-relaxed"
              style={{ color: 'rgba(26,18,8,0.7)', fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              At Nuv&eacute; Parfum, we built every fragrance around a single belief: that the right scent
              does not just smell beautiful — it becomes part of who you are. Your mood, your memory, your
              mark on every room you enter.
            </p>
            <p
              className="text-base mb-10 leading-relaxed"
              style={{ color: 'rgba(26,18,8,0.7)', fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Every bottle in our collection carries an industry leading concentration, crafted so that your
              fragrance moves with you from the first hour to the last.
            </p>
            <Link href="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>

          <div className="relative">
            <div
              className="aspect-[3/4] relative overflow-hidden"
              style={{ backgroundColor: '#1A1208' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 70%, rgba(201,169,110,0.25) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(201,169,110,0.15) 0%, transparent 50%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-8xl"
                    style={{ color: '#C9A96E', fontFamily: 'Georgia, serif', opacity: 0.12, fontWeight: 400 }}
                  >
                    N
                  </p>
                  <div
                    className="w-px mx-auto mt-4"
                    style={{ height: '120px', background: 'linear-gradient(to bottom, #C9A96E, transparent)' }}
                  />
                </div>
              </div>
              <div className="absolute bottom-10 left-10 right-10">
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: 'rgba(201,169,110,0.8)', fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;From the Latin for cloud — because a great fragrance is felt before it is seen.&rdquo;
                </p>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border"
              style={{ borderColor: '#C9A96E', zIndex: -1 }}
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
            >
              The Collection
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400 }}
            >
              Featured Fragrances
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/shop" className="btn-outline">
              View All Fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6" style={{ backgroundColor: '#1A1208' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
            >
              What They Say
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
            >
              Worn &amp; Loved
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="p-8 border"
                style={{ borderColor: 'rgba(201,169,110,0.2)', backgroundColor: 'rgba(201,169,110,0.04)' }}
              >
                <p
                  className="text-3xl mb-4"
                  style={{ color: '#C9A96E', fontFamily: 'Georgia, serif', lineHeight: 1, opacity: 0.4 }}
                >
                  &ldquo;
                </p>
                <p
                  className="text-base mb-8 leading-relaxed"
                  style={{ color: 'rgba(245,240,232,0.85)', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  {review.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#F5F0E8', fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      {review.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      {review.product}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5" fill="#C9A96E" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />
    </>
  );
}
