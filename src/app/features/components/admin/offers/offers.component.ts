import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  advertisements = signal<any[]>([
    {
      id: 1,
      productImage: 'https://via.placeholder.com/300x200',
      offerRange: '60-70%',
      mainTitle: 'Summer Sale Extravaganza',
      secondaryText: 'Incredible Discounts on Latest Fashion'
    },
    {
      id: 2,
      productImage: 'https://via.placeholder.com/300x200',
      offerRange: '50-60%',
      mainTitle: 'Electronics Bonanza',
      secondaryText: 'Unbeatable Deals on Tech Gadgets'
    },
    {
      id: 1,
      productImage: 'https://via.placeholder.com/300x200',
      offerRange: '60-70%',
      mainTitle: 'Summer Sale Extravaganza',
      secondaryText: 'Incredible Discounts on Latest Fashion'
    },
    {
      id: 2,
      productImage: 'https://via.placeholder.com/300x200',
      offerRange: '50-60%',
      mainTitle: 'Electronics Bonanza',
      secondaryText: 'Unbeatable Deals on Tech Gadgets'
    },
    {
      id: 1,
      productImage: 'https://via.placeholder.com/300x200',
      offerRange: '60-70%',
      mainTitle: 'Summer Sale Extravaganza',
      secondaryText: 'Incredible Discounts on Latest Fashion'
    },
    {
      id: 2,
      productImage: 'https://via.placeholder.com/300x200',
      offerRange: '50-60%',
      mainTitle: 'Electronics Bonanza',
      secondaryText: 'Unbeatable Deals on Tech Gadgets'
    },
    {
      id: 1,
      productImage: 'https://via.placeholder.com/300x200',
      offerRange: '60-70%',
      mainTitle: 'Summer Sale Extravaganza',
      secondaryText: 'Incredible Discounts on Latest Fashion'
    },
    {
      id: 2,
      productImage: 'https://via.placeholder.com/300x200',
      offerRange: '50-60%',
      mainTitle: 'Electronics Bonanza',
      secondaryText: 'Unbeatable Deals on Tech Gadgets'
    },
  ]);


  editAd(ad: any): void {
    console.log('Edit Ad:', ad);
  }

  deleteAd(adId: number): void {
    this.advertisements.update(ads => 
      ads.filter(ad => ad.id !== adId)
    );
  }

  openAddAdDialog(): void {
    console.log('Open Add Ad Dialog');
  }
}
