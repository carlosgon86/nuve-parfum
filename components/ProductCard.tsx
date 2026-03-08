import Link from 'next/link';
import { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative overflow-hidden" style={{ backgroundColor: '#1A1208', aspectRatio: '3/4' }}>
        {/* Background gradient */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(ellipse at 40% 60%, ${product.accentColor}22 0%, transparent 65%), radial-gradient(ellipse at 70% 30%, ${product.accentColor}11 0%, transparent 50%)`,
          }}
        />

        {/* Collection label */}
        <div className="absolute top-6 left-6">
          <span
            className="text-xs tracking-widest uppercase px-3 py-1 border"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              color: '#C9A96E',
              borderColor: 'rgba(201,169,110,0.3)',
              letterSpacing: '0.15em',
              fontSize: '0.65rem',
            }}
          >
            {product.collectionLabel}
          </span>
        </div>

        {/* Category */}
        <div className="absolute top-6 right-6">
          <span
            className="text-xs"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: 'rgba(201,169,110,0.5)', fontSize: '0.65rem' }}
          >
            {product.category}
          </span>
        </div>

        {/* Center - decorative N */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
            style={{
              color: product.accentColor,
              fontFamily: 'Georgia, serif',
              fontSize: '10rem',
              fontWeight: 400,
              opacity: 0.07,
              lineHeight: 1,
            }}
          >
            N
          </p>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.95) 0%, transparent 100%)' }}
          />

          <div className="relative z-10">
            <p
              className="text-2xl mb-1"
              style={{ color: '#F5F0E8', fontFamily: 'Georgia, serif', fontWeight: 400 }}
            >
              {product.name}
            </p>
            <p
              className="text-xs italic mb-4"
              style={{ color: '#C9A96E', fontFamily: 'Georgia, serif' }}
            >
              {product.tagline}
            </p>

            {/* Notes — visible on hover */}
            <div className="flex flex-wrap gap-1.5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {product.notes.slice(0, 3).map((note) => (
                <span
                  key={note}
                  className="text-xs px-2 py-0.5 border"
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: 'rgba(245,240,232,0.6)',
                    borderColor: 'rgba(245,240,232,0.15)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {note}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <p
                className="text-sm"
                style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                From £{product.prices['50ml'].toFixed(2)}
              </p>
              <span
                className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
              >
                View &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
