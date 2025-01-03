import { Component } from '@angular/core';
import { OfferformComponent } from '../../../../shared/components/offerform/offerform.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addoffer',
  standalone: true,
  imports: [
    OfferformComponent,
    CommonModule
  ],
  templateUrl: './addoffer.component.html',
  styleUrl: './addoffer.component.css'
})
export class AddofferComponent {

 loadingStatus : boolean = false

}
