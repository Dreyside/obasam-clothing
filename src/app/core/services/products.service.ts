import { Injectable, computed, signal } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  badge?: 'New' | 'Trending' | 'Sale';
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly productsSignal = signal<Product[]>([
    {
      id: 'watch-classic',
      name: 'Classic Waist Watch',
      description: 'Minimal silver mens waist watch everyday wear.',
      price: 120,
      imageUrl: '/images/waist-watches-ai.png',
      category: 'Accessories',
      badge: 'New',
    },
    {
      id: 'sunglasses-midnight',
      name: 'Midnight Sunglasses',
      description: 'Dark framed sunglasses, perfect for US summer streets.',
      price: 65,
      imageUrl: '/images/sunglasses-midnight-ai.png',
      category: 'Accessories',
      badge: 'Trending',
    },
    {
      id: 'suit-navy',
      name: 'Navy Slim Suit',
      description:
        'Two‑piece navy suit generated from a smart campus outfit prompt.',
      price: 260,
      imageUrl: '/images/navy-suit.png',
      category: 'Suits',
      badge: 'Sale',
    },
    {
      id: 'club-jersey',
      name: 'Manchester United Jersey',
      description: 'Manchester United jersey for the ultimate fan.',
      price: 89,
      imageUrl: '/images/man-united-jersey.png',
      category: 'Jerseys',
    },
    {
      id: 'complete-suit',
      name: 'Complete Suit',
      description: 'Complete suit for the ultimate professional.',
      price: 89,
      imageUrl: '/images/men-suit-2.png',
      category: 'Suits',
    },
    {
      id: 'jersey-club',
      name: 'Club Night Jersey',
      description: 'Bold graphic jersey designed for game nights and clubs.',
      price: 79,
      imageUrl: '/images/jersey-club.png',
      category: 'Jerseys',
      badge: 'Trending',
    },
    {
      id: 'jeans-relaxed',
      name: 'Relaxed Fit Jeans',
      description: 'Mid‑wash jeans with a relaxed US streetwear silhouette.',
      price: 89,
      imageUrl: '/images/blur-jean.png',
      category: 'Jeans',
    },
    {
      id: 'pullover-hoodie',
      name: 'Pullover Hoodie',
      description: 'Moody pullover hoodie for your everyday wear.',
      price: 42,
      imageUrl: '/images/pullover-moody-ad.png',
      category: 'Hoodies',
    },
  ]);

  readonly products = this.productsSignal.asReadonly();

  readonly featuredProducts = computed(() =>
    this.products().filter((p) => p.badge === 'New' || p.badge === 'Trending'),
  );
}
