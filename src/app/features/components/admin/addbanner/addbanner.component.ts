import { Component } from '@angular/core';
import { BannerformComponent } from '../../../../shared/components/bannerform/bannerform.component';

@Component({
  selector: 'app-addbanner',
  standalone: true,
  imports: [
    BannerformComponent
  ],
  templateUrl: './addbanner.component.html',
  styleUrl: './addbanner.component.css'
})
export class AddbannerComponent {

}
