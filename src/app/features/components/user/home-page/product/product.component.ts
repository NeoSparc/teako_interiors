import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  products: any = [
    {
      name: 'Modern Wooden Door',
      image: '/images/pexels-dilrubasaricimen-7486484.jpg',
      price: 1299,
      description: 'Elegant solid wood door with contemporary design and premium finish.'
    },
    {
      name: 'Luxury Sofa Set',
      image: '/images/pexels-heyho-6980714.jpg',
      price: 2499,
      description: 'Premium 3-seater sofa with plush cushions and wooden accents.'
    },
    {
      name: 'Designer Wardrobe',
      image: '/images/pexels-anastasia-shuraeva-5705490.jpg',
      price: 1899,
      description: 'Spacious wardrobe with modern sliding doors and organized storage.'
    }
  ];

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(img.alt)}`;
  }

}
