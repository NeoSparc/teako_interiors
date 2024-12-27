import { Component } from '@angular/core';
import { AddProductComponent } from '../../../../shared/components/add-product/add-product.component';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [
    AddProductComponent
  ],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

}
