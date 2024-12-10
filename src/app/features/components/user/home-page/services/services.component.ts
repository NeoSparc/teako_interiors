import { Component } from '@angular/core';

interface Service {
  title: string;
  image: string;
  category: 'doors' | 'interior' | 'furniture' | 'other';
}


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    { title: 'Wooden Doors & Windows', image: '/assets/images/wooden-door.jpg', category: 'doors' },
    { title: 'Flush Doors', image: '/assets/images/flush-door.jpg', category: 'doors' },
    { title: 'PVC Doors', image: '/assets/images/pvc-door.jpg', category: 'doors' },
    { title: 'Melamin Doors', image: '/assets/images/melamin-door.jpg', category: 'doors' },
    { title: 'FRP Doors', image: '/assets/images/frp-door.jpg', category: 'doors' },
    { title: 'Steel Doors', image: '/assets/images/steel-door.jpg', category: 'doors' },
    { title: 'WPC Doors & Frames', image: '/assets/images/wpc-door.jpg', category: 'doors' },
    { title: 'Aluminium Systems', image: '/assets/images/aluminium.jpg', category: 'doors' },
    { title: 'UPVC Systems', image: '/assets/images/upvc.jpg', category: 'doors' },
    { title: 'Bedroom Design', image: '/assets/images/bedroom.jpg', category: 'interior' },
    { title: 'Kitchen Solutions', image: '/assets/images/kitchen.jpg', category: 'interior' },
    { title: 'Curtain Works', image: '/assets/images/curtain.jpg', category: 'interior' },
    { title: 'Dining Sets', image: '/assets/images/dining.jpg', category: 'furniture' },
    { title: 'Premium Sofas', image: '/assets/images/sofa.jpg', category: 'furniture' },
    { title: 'TV Units', image: '/assets/images/tv-unit.jpg', category: 'furniture' },
    { title: 'Glass Works', image: '/assets/images/glass.jpg', category: 'other' }
  ];

  
  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = `https://via.placeholder.com/200x200?text=${encodeURIComponent(img.alt)}`;
  }
}
