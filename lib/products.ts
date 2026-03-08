export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: 'pour-elle' | 'pour-lui';
  collectionLabel: string;
  category: string;
  tagline: string;
  description: string;
  story: string;
  notes: string[];
  prices: {
    '50ml': number;
    '100ml': number;
  };
  gradient: string;
  accentColor: string;
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'glow-whisper',
    name: 'Glow Whisper',
    collection: 'pour-elle',
    collectionLabel: 'Pour Elle',
    category: 'Daily Signature',
    tagline: 'The whisper that hits loud',
    description:
      'Glow Whisper opens with a burst of fresh citrus — bright, effervescent, alive. Within moments, tuberose unfurls beneath the surface, impossibly soft yet impossible to ignore. The dry down settles into warm white musk that clings to skin long after the first impression is made. This is the scent for every day you want to mean something.',
    story:
      'Crafted for those who move through life quietly, yet leave every room brighter. Glow Whisper carries an industry leading concentration that ensures your signature follows you through even the longest days.',
    notes: ['Fresh Citrus', 'Tuberose', 'White Musk', 'Solar Amber'],
    prices: { '50ml': 39.99, '100ml': 54.99 },
    gradient: 'from-amber-50 to-yellow-100',
    accentColor: '#E8C97A',
  },
  {
    id: '2',
    slug: 'velvet-bloom',
    name: 'Velvet Bloom',
    collection: 'pour-elle',
    collectionLabel: 'Pour Elle',
    category: 'Statement',
    tagline: 'Soft enough to draw you in. Strong enough to stay.',
    description:
      'Velvet Bloom arrives on the skin with an immediate bloom of peony — fresh-cut, dewy, feminine without apology. Rhubarb weaves underneath, adding a sharp, unexpected edge that keeps it from ever becoming predictable. What stays is a warmth that is entirely your own.',
    story:
      'A fragrance that contradicts itself beautifully. Soft at first touch, tenacious at its core. Velvet Bloom carries an industry leading concentration designed to make a statement that lasts.',
    notes: ['Peony', 'Rhubarb', 'Rose Water', 'Cashmere Wood'],
    prices: { '50ml': 39.99, '100ml': 54.99 },
    gradient: 'from-rose-50 to-pink-100',
    accentColor: '#D4A0A8',
  },
  {
    id: '3',
    slug: 'rose-noir',
    name: 'Rose Noir',
    collection: 'pour-elle',
    collectionLabel: 'Pour Elle',
    category: 'Evening Weapon',
    tagline: 'Every rose has a dark side. Wear it.',
    description:
      'Rose Noir is not a gentle rose. It is an intense Turkish rose dragged through deep patchouli and anchored by rich benzoin — resinous, smoky, unapologetically bold. This is the fragrance that walks into a room and makes everyone turn before you say a word.',
    story:
      'Built for the nights that matter. Rose Noir carries an industry leading concentration, making it the choice of those who understand that the most powerful statement is the one that lingers.',
    notes: ['Turkish Rose', 'Dark Patchouli', 'Rich Benzoin', 'Black Oud'],
    prices: { '50ml': 39.99, '100ml': 54.99 },
    gradient: 'from-rose-900/20 to-stone-800/20',
    accentColor: '#8B3A4A',
  },
  {
    id: '4',
    slug: 'uncharted',
    name: 'Uncharted',
    collection: 'pour-lui',
    collectionLabel: 'Pour Lui',
    category: 'Daily Signature',
    tagline: 'No map. No rules. Just presence.',
    description:
      'Uncharted opens with a freshness that feels like open air — clean, grounded, impossible to pin down. Raw oud emerges from underneath, earthy and masculine without being heavy. Cool aquatic woods carry it through to a dry down that is quietly powerful: the kind of presence that does not demand attention because it simply commands it.',
    story:
      'For those who move on instinct. Uncharted carries an industry leading concentration, built to travel with you from morning through to wherever the day ends.',
    notes: ['Raw Oud', 'Aquatic Accord', 'Cool Woods', 'Sea Salt'],
    prices: { '50ml': 39.99, '100ml': 54.99 },
    gradient: 'from-blue-50 to-teal-100',
    accentColor: '#5A8A9F',
  },
  {
    id: '5',
    slug: 'peak-hour',
    name: 'Peak Hour',
    collection: 'pour-lui',
    collectionLabel: 'Pour Lui',
    category: 'Statement',
    tagline: 'The moment every room remembers you.',
    description:
      'Peak Hour opens bright and arresting — citrus and crisp spice that announces itself without hesitation. As it settles, a warm, smoky base takes hold, grounding the energy into something deeper, more assured. The contrast is the point. Bold on arrival. Unforgettable as it lingers.',
    story:
      'Some fragrances are remembered. Peak Hour is one of them. With an industry leading concentration, it is engineered for the moments where making an impression is not optional.',
    notes: ['Citrus Burst', 'Cardamom', 'Smoky Amber', 'Sandalwood'],
    prices: { '50ml': 39.99, '100ml': 54.99 },
    gradient: 'from-orange-50 to-amber-100',
    accentColor: '#C47A3A',
  },
  {
    id: '6',
    slug: 'obsidian',
    name: 'Obsidian',
    collection: 'pour-lui',
    collectionLabel: 'Pour Lui',
    category: 'Evening Weapon',
    tagline: 'For those who do not chase.',
    description:
      'Obsidian opens with dry rosewood — dark, refined, unhurried. Deep iris adds a cool, powdery elegance before spiced vetiver roots the whole composition to earth. This is not a fragrance that announces itself. It is felt, not heard. Discovered, not shown.',
    story:
      'The confidence of someone who has nothing to prove. Obsidian carries an industry leading concentration built for longevity — because the best things are always worth staying for.',
    notes: ['Dry Rosewood', 'Deep Iris', 'Spiced Vetiver', 'Dark Musk'],
    prices: { '50ml': 39.99, '100ml': 54.99 },
    gradient: 'from-gray-800/10 to-stone-700/20',
    accentColor: '#4A4A5A',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: 'pour-elle' | 'pour-lui'): Product[] {
  return products.filter((p) => p.collection === collection);
}
