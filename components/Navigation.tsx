'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(245,240,232,0.97)' : '#F5F0E8',
        borderBottom: '1px solid rgba(201,169,110,0.2)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            className="text-xl tracking-widest uppercase"
            style={{ color: '#1A1208', letterSpacing: '0.25em', fontFamily: 'Georgia, serif' }}
          >
            Nuv<span style={{ color: '#C9A96E' }}>é</span> Parfum
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link text-xs tracking-widest uppercase"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  color: pathname === link.href ? '#C9A96E' : '#1A1208',
                  fontWeight: pathname === link.href ? '600' : '400',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/shop" className="btn-gold text-xs" style={{ padding: '0.6rem 1.5rem' }}>
            Shop Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: '#1A1208',
              transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: '#1A1208',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: '#1A1208',
              transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          backgroundColor: '#F5F0E8',
          borderTop: menuOpen ? '1px solid rgba(201,169,110,0.2)' : 'none',
        }}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  color: pathname === link.href ? '#C9A96E' : '#1A1208',
                  fontWeight: pathname === link.href ? '600' : '400',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link href="/shop" className="btn-gold text-xs" style={{ padding: '0.6rem 1.5rem' }}>
              Shop Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
