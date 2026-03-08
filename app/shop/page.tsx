'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

type Filter = 'all' | 'pour-elle' | 'pour-lui';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCollection = searchParams.get('collection') as Filter | null;
  const [filter, setFilter] = useState<Filter>(initialCollection || 'all');

  const filtered =
    filter === 'all'
      ? products
      : products.filter((p) => p.collection === filter);

  const tabs: { value: Filter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'pour-elle', label: 'Pour Elle' },
    { value: 'pour-lui', label: 'Pour Lui' },
  ];

  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: '#1A1208' }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.25em' }}
        >
          Nuv&eacute; Parfum
        </p>
        <h1
          className="text-5xl md:text-6xl"
          style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
        >
          The Collection
        </h1>
        <p
          className="text-base mt-6 max-w-lg mx-auto leading-relaxed"
          style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          Six fragrances. Industry leading concentration.
          Built for those who leave a lasting impression.
        </p>
      </section>

      {/* Filter Tabs */}
      <div
        className="sticky top-16 z-40 border-b"
        style={{ backgroundColor: '#F5F0E8', borderColor: 'rgba(26,18,8,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className="relative px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  letterSpacing: '0.15em',
                  color: filter === tab.value ? '#C9A96E' : 'rgba(26,18,8,0.5)',
                  borderBottom: filter === tab.value ? '2px solid #C9A96E' : '2px solid transparent',
                  fontWeight: filter === tab.value ? '600' : '400',
                  marginBottom: '-1px',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs mb-10"
            style={{ color: 'rgba(26,18,8,0.4)', fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            {filtered.length} {filtered.length === 1 ? 'fragrance' : 'fragrances'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Category callouts */}
      <section className="py-16 px-6" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pour Elle */}
          <div
            className="relative overflow-hidden p-10"
            style={{ backgroundColor: '#1A1208', minHeight: '280px' }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 80% 20%, rgba(212,160,168,0.15) 0%, transparent 60%)',
              }}
            />
            <div className="relative z-10">
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
              >
                Collection
              </p>
              <h3
                className="text-3xl mb-4"
                style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
              >
                Pour Elle
              </h3>
              <p
                className="text-sm mb-8 leading-relaxed max-w-xs"
                style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Three fragrances for the woman who does not need to announce herself — she is already the room.
              </p>
              <button
                onClick={() => setFilter('pour-elle')}
                className="btn-gold"
                style={{ padding: '0.7rem 1.8rem' }}
              >
                Shop Pour Elle
              </button>
            </div>
          </div>

          {/* Pour Lui */}
          <div
            className="relative overflow-hidden p-10"
            style={{ backgroundColor: '#2A1E0E', minHeight: '280px' }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 20% 80%, rgba(90,138,159,0.1) 0%, transparent 60%)',
              }}
            />
            <div className="relative z-10">
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
              >
                Collection
              </p>
              <h3
                className="text-3xl mb-4"
                style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
              >
                Pour Lui
              </h3>
              <p
                className="text-sm mb-8 leading-relaxed max-w-xs"
                style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Three fragrances for the man who has stopped trying to impress and simply exists — powerfully.
              </p>
              <button
                onClick={() => setFilter('pour-lui')}
                className="btn-gold"
                style={{ padding: '0.7rem 1.8rem' }}
              >
                Shop Pour Lui
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh', backgroundColor: '#F5F0E8' }} />}>
      <ShopContent />
    </Suspense>
  );
}
