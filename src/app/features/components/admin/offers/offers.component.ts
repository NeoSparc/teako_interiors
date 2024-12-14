import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';


interface Advertisement {
  id: number;
  productImage: string;
  offerRange: string;
  mainTitle: string;
  secondaryText: string;
}

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  // Use signal for reactive state management
  advertisements = signal<Advertisement[]>([
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

  constructor(private dialog: MatDialog) {}

  editAd(ad: Advertisement): void {
    // Implement edit logic
    console.log('Edit Ad:', ad);
  }

  deleteAd(adId: number): void {
    this.advertisements.update(ads => 
      ads.filter(ad => ad.id !== adId)
    );
  }

  openAddAdDialog(): void {
    // Implement add new ad dialog
    console.log('Open Add Ad Dialog');
  }
}
