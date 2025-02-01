import { Component } from '@angular/core';
import { AddProductComponent } from '../../../../shared/components/add-product/add-product.component';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [
    AddProductComponent,
    CommonModule
  ],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

 constructor(private adminService:AdminService , private router:Router){}

 loadingStatus : boolean = false

 productData(data:any){
  this.loadingStatus = true
  this.adminService.addNewProduct(data).subscribe((res)=>{
    this.loadingStatus  = false
    this.router.navigate(['/admin/landpage/allproducts'])
  })
  
 }
}
