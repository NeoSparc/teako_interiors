import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css'
})
export class SingleViewComponent {
  product: any = {
    id: 1,
    name: 'Modern Leather Sofa',
    price: 1299.99,
    description: 'A sleek and comfortable leather sofa perfect for modern living spaces. Crafted with high-quality materials and designed for both style and comfort.',
    length: 220,
    width: 90,
    height: 85,
    availability: true,
    imageUrl: '/images/pexels-algrey-3705539.jpg'
  };

  relatedProducts: any[] = [
    {
      id: 2,
      name: 'Minimalist Armchair',
      price: 599,
      description: 'Compact armchair with clean lines',
      availability: true,
      imageUrl: '/images/pexels-algrey-3705539.jpg'
    },
    {
      id: 3,
      name: 'Wooden Coffee Table',
      price: 349.99,
      description: 'Elegant wooden coffee table',
      availability: true,
      imageUrl: '/images/pexels-algrey-3705539.jpg'
    },
    {
      id: 4,
      name: 'Modern Side Table',
      price: 199.99,
      description: 'Sleek side table for living room',
      availability: false,
      imageUrl: '/images/pexels-algrey-3705539.jpg'
    }
  ];

}
