import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-showing',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './products-showing.component.html',
  styleUrl: './products-showing.component.css'
})
export class ProductsShowingComponent {
  constructor(private router:Router){}
   products: any[] = [
    {
      id: 1,
      name: 'Modern Wooden Door',
      category: 'Doors',
      price: 1299,
      image: '/assets/images/door-1.jpg',
      description: 'Elegant solid wood door with modern design patterns and premium finish.'
    },
    {
      id: 2,
      name: 'Contemporary Sofa',
      category: 'Sofas',
      price: 2499,
      image: '/assets/images/sofa-1.jpg',
      description: 'Luxurious 3-seater sofa with premium fabric and wooden accents.'
    },
    {
      id: 3,
      name: 'Sliding Wardrobe',
      category: 'Storage',
      price: 1899,
      image: '/assets/images/wardrobe-1.jpg',
      description: 'Custom-built wardrobe with sliding doors and organized compartments.'
    },
    {
      id: 4,
      name: 'Kitchen Cabinet Set',
      category: 'Kitchen',
      price: 3999,
      image: '/assets/images/cabinet-1.jpg',
      description: 'Complete kitchen cabinet set with modern hardware and finish.'
    },
    {
      id: 5,
      name: 'Bedroom Set',
      category: 'Bedroom',
      price: 4599,
      image: '/assets/images/bedroom-1.jpg',
      description: 'Complete bedroom furniture set including bed frame and side tables.'
    },
    {
      id: 6,
      name: 'Office Desk',
      category: 'Office',
      price: 899,
      image: '/assets/images/desk-1.jpg',
      description: 'Ergonomic wooden desk perfect for home office setup.'
    }
  ];

  categories = ['All', 'Doors', 'Sofas', 'Storage', 'Kitchen', 'Bedroom', 'Office'];
  activeCategory = signal<string>('All');
  selectedProduct = signal<any >


  setActiveCategory(category: string) {
    this.activeCategory.set(category);
  }

  

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(img.alt)}`;
  }

  goToSingle(){
    this.router.navigate(['/singleview'])
  }
}
