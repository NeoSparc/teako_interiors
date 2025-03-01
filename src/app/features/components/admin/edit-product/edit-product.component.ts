import { Component } from '@angular/core';
import { AddProductComponent } from '../../../../shared/components/add-product/add-product.component';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    AddProductComponent,
    CommonModule
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  constructor(private adminService:AdminService , private router:Router){}

 loadingStatus : boolean = false

  editData(data:any){
    this.loadingStatus = true
    this.adminService.editProduct(data).subscribe((res)=>{
      this.loadingStatus = false
      console.log(res);
      this.router.navigate(['/admin/allproducts'])
      
    })
  }
}
