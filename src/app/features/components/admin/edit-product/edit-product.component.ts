import { Component } from '@angular/core';
import { AddProductComponent } from '../../../../shared/components/add-product/add-product.component';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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
    this.adminService.editProduct(data).subscribe({
      next: (res) => {
        this.loadingStatus = false;
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Product updated successfully!',
        }).then(() => {
          this.router.navigate(['/admin/allproducts']);
        });
      },
      error: (err) => {
        this.loadingStatus = false;
        let errorMessage = 'Something went wrong. Please try again.';
    
        if (err.error && err.error.message) {
          errorMessage = err.error.message; // Use backend error message
        }
    
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorMessage,
        });
      }
    });
    
  }
}
