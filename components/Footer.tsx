import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1208', color: '#F5F0E8' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="text-2xl tracking-widest uppercase mb-4"
              style={{ color: '#F5F0E8', letterSpacing: '0.25em', fontFamily: 'Georgia, serif' }}
            >
              Nuv<span style={{ color: '#C9A96E' }}>é</span> Parfum
            </p>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'Arial, Helvetica, sans-serif', maxWidth: '280px' }}
            >
              Find Your Aura. Luxury fragrances crafted with industry leading concentration for those who leave a mark.
            </p>
            <p
              className="text-xs tracking-widest"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
            >
              Free UK delivery on all orders
            </p>
          </div>

          {/* Collections */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.18em' }}
            >
              Collections
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/shop', label: 'All Fragrances' },
                { href: '/shop?collection=pour-elle', label: 'Pour Elle' },
                { href: '/shop?collection=pour-lui', label: 'Pour Lui' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[#C9A96E]"
                    style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: '#C9A96E', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.18em' }}
            >
              Information
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/contact', label: 'Shipping & Returns' },
                { href: '/contact', label: 'Privacy Policy' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[#C9A96E]"
                    style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 lg:px-8 py-5"
        style={{ borderColor: 'rgba(201,169,110,0.15)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            &copy; {new Date().getFullYear()} Nuv&eacute; Parfum. All rights reserved.
          </p>
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: 'rgba(201,169,110,0.5)', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.15em' }}
          >
            Find Your Aura
          </p>
        </div>
      </div>
    </footer>
  );
}
