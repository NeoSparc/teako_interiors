import { Component } from '@angular/core';
import { OfferformComponent } from '../../../../shared/components/offerform/offerform.component';

@Component({
  selector: 'app-addoffer',
  standalone: true,
  imports: [
    OfferformComponent
  ],
  templateUrl: './addoffer.component.html',
  styleUrl: './addoffer.component.css'
})
export class AddofferComponent {

}
