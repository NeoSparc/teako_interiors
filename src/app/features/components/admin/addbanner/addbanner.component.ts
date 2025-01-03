import { Component } from '@angular/core';
import { BannerformComponent } from '../../../../shared/components/bannerform/bannerform.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addbanner',
  standalone: true,
  imports: [
    BannerformComponent,
    CommonModule
  ],
  templateUrl: './addbanner.component.html',
  styleUrl: './addbanner.component.css'
})
export class AddbannerComponent {

 loadingStatus : boolean = false

}
