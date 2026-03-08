'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product, products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml'>('50ml');
  const [added, setAdded] = useState(false);

  const related = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 2);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="px-6 py-4 border-b"
        style={{ backgroundColor: '#F5F0E8', borderColor: 'rgba(26,18,8,0.1)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link
            href="/"
            className="text-xs"
            style={{ color: 'rgba(26,18,8,0.4)', fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Home
          </Link>
          <span style={{ color: 'rgba(26,18,8,0.3)' }}>/</span>
          <Link
            href="/shop"
            className="text-xs"
            style={{ color: 'rgba(26,18,8,0.4)', fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Shop
          </Link>
          <span style={{ color: 'rgba(26,18,8,0.3)' }}>/</span>
          <span
            className="text-xs"
            style={{ color: '#1A1208', fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <section className="px-6 py-16" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Visual */}
          <div className="relative">
            <div
              className="aspect-square relative overflow-hidden"
              style={{ backgroundColor: '#1A1208' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 35% 65%, ${product.accentColor}30 0%, transparent 65%), radial-gradient(ellipse at 75% 25%, ${product.accentColor}18 0%, transparent 55%)`,
                }}
              />
              {/* Large decorative letter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  style={{
                    color: product.accentColor,
                    fontFamily: 'Georgia, serif',
                    fontSize: '20rem',
                    fontWeight: 400,
                    opacity: 0.06,
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {product.name.charAt(0)}
                </p>
              </div>

              {/* Collection badge */}
              <div className="absolute top-8 left-8">
                <span
                  className="text-xs px-4 py-1.5 border tracking-widest uppercase"
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: '#C9A96E',
                    borderColor: 'rgba(201,169,110,0.35)',
                    letterSpacing: '0.15em',
                    fontSize: '0.65rem',
                  }}
                >
                  {product.collectionLabel}
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-8 right-8">
                <span
                  className="text-xs px-3 py-1"
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: 'rgba(245,240,232,0.4)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {product.category}
                </span>
              </div>

              {/* Bottom quote */}
              <div className="absolute bottom-8 left-8 right-8">
                <div
                  className="w-8 h-px mb-4"
                  style={{ backgroundColor: '#C9A96E' }}
                />
                <p
                  className="text-base italic"
                  style={{ color: 'rgba(245,240,232,0.7)', fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;{product.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Accent border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border pointer-events-none"
              style={{ borderColor: 'rgba(201,169,110,0.3)', zIndex: -1 }}
            />
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            {/* Name */}
            <h1
              className="text-4xl md:text-5xl mb-3"
              style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400 }}
            >
              {product.name}
            </h1>

            {/* Tagline */}
            <p
              className="text-lg mb-8 italic"
              style={{ color: '#C9A96E', fontFamily: 'Georgia, serif' }}
            >
              {product.tagline}
            </p>

            {/* Divider */}
            <div className="w-12 h-px mb-8" style={{ backgroundColor: '#C9A96E' }} />

            {/* Description */}
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'rgba(26,18,8,0.75)', fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {product.description}
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: 'rgba(26,18,8,0.6)', fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {product.story}
            </p>

            {/* Key Notes */}
            <div className="mb-10">
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
              >
                Key Notes
              </p>
              <div className="flex flex-wrap gap-3">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="px-4 py-2 border text-xs tracking-wide uppercase"
                    style={{
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      color: '#1A1208',
                      borderColor: 'rgba(26,18,8,0.2)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
              >
                Select Size
              </p>
              <div className="flex gap-4">
                {(['50ml', '100ml'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="flex-1 py-4 border text-sm transition-all duration-200"
                    style={{
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      backgroundColor: selectedSize === size ? '#1A1208' : 'transparent',
                      color: selectedSize === size ? '#C9A96E' : '#1A1208',
                      borderColor: selectedSize === size ? '#1A1208' : 'rgba(26,18,8,0.2)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <span className="block font-medium">{size}</span>
                    <span
                      className="block text-xs mt-0.5"
                      style={{ opacity: 0.7 }}
                    >
                      £{product.prices[size].toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price display */}
            <div className="flex items-baseline gap-3 mb-8">
              <p
                className="text-3xl"
                style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400 }}
              >
                £{product.prices[selectedSize].toFixed(2)}
              </p>
              <p
                className="text-sm"
                style={{ color: 'rgba(26,18,8,0.4)', fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {selectedSize}
              </p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-5 text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                backgroundColor: added ? '#C9A96E' : '#1A1208',
                color: added ? '#1A1208' : '#F5F0E8',
                letterSpacing: '0.18em',
                border: '1px solid #1A1208',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div
              className="mt-6 pt-6 border-t grid grid-cols-3 gap-4"
              style={{ borderColor: 'rgba(26,18,8,0.1)' }}
            >
              {[
                { label: 'Free UK Delivery', sub: 'On all orders' },
                { label: 'Industry Leading', sub: 'Concentration' },
                { label: 'Easy Returns', sub: 'Within 30 days' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p
                    className="text-xs font-semibold mb-0.5"
                    style={{ color: '#1A1208', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'rgba(26,18,8,0.45)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fragrance Journey */}
      <section className="py-20 px-6" style={{ backgroundColor: '#1A1208' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
            >
              The Scent Journey
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
            >
              How {product.name} unfolds
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(201,169,110,0.15)' }}>
            {[
              { stage: 'Top Notes', timing: 'First 30 minutes', notes: product.notes.slice(0, 1) },
              { stage: 'Heart Notes', timing: '30 min — 3 hours', notes: product.notes.slice(1, 3) },
              { stage: 'Base Notes', timing: '3 hours onward', notes: product.notes.slice(3) },
            ].map((phase, i) => (
              <div
                key={i}
                className="p-10 text-center"
                style={{ backgroundColor: '#1A1208' }}
              >
                <div
                  className="w-px h-10 mx-auto mb-6"
                  style={{ background: 'linear-gradient(to bottom, #C9A96E, transparent)' }}
                />
                <p
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
                >
                  {phase.stage}
                </p>
                <p
                  className="text-xs mb-6"
                  style={{ color: 'rgba(245,240,232,0.35)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {phase.timing}
                </p>
                {phase.notes.map((note) => (
                  <p
                    key={note}
                    className="text-lg"
                    style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
                  >
                    {note}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-20 px-6" style={{ backgroundColor: '#F5F0E8' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.2em' }}
              >
                Also in {product.collectionLabel}
              </p>
              <h2
                className="text-3xl"
                style={{ color: '#1A1208', fontFamily: 'Georgia, serif', fontWeight: 400 }}
              >
                You might also love
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
