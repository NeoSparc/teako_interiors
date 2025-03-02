import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/userService.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css',
})
export class SingleViewComponent implements OnInit {
  product: any = {};
  relatedProducts: any[] = [];
  formOpen = false;
  showDeleteModal = false;
  productId: string = '';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private userService: UserService,
    private adminService:AdminService
  ) {
    this.ar.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProduct();
    });
  }

  ngOnInit(): void {}

  getProduct() {
    this.userService.getSingleProduct(this.productId).subscribe((res) => {
      this.product = res.data;
    });
  }

  onEdit() {
    this.router.navigate(['/admin/editProduct/', this.product._id]);
  }

  onDelete() {
    this.showDeleteModal = true;
  }

  cancelDelete() {
    this.showDeleteModal = false;
  }

  confirmDelete(id:string) {
    this.adminService.deleteProduct(id).subscribe((res)=>{
      this.showDeleteModal = false;

      this.router.navigate(['/admin/allproducts']);
    })
  }
}
