'use client';

export default function AnnouncementBar() {
  return (
    <div
      className="w-full text-center py-2.5 px-4"
      style={{ backgroundColor: '#1A1208', color: '#C9A96E' }}
    >
      <p
        className="text-xs tracking-widest uppercase"
        style={{ fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.18em' }}
      >
        Free UK delivery on all orders
      </p>
    </div>
  );
}
