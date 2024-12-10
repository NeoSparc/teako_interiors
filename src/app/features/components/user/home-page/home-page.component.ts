import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { CarpenderComponent } from './carpender/carpender.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { OffersComponent } from './offers/offers.component';
import { ConnectComponent } from './connect/connect.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent,
    CommonModule,
    CarpenderComponent,
    ProductComponent,
    ServicesComponent,
    OffersComponent,
    ConnectComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  categories: any = [
    {
      title: 'Doors',
      image: 'images/pexels-pixabay-277559.jpg'  
    },
    {
      title: 'Windows',
      image: '/images/wooden-windows.jpg'  
    },
    {
      title: 'Kitchen',
      image: '/images/pexels-level23media-3016430.jpg'  
    },
    {
      title: 'Interiors',
      image: '/images/pexels-dropshado-2251247.jpg'  
    }
  ]

  requestQuote(){}

  
}
