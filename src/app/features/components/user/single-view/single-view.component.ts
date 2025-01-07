import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../userService.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css',
})
export class SingleViewComponent implements OnInit {
  contactForm: FormGroup;
  formOpen: boolean = false;
  productId: string = '';
  product: any;
  relatedProducts: any;

  constructor(
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private userService: UserService,
    private router:Router
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.email]],
      place: ['', [Validators.required]],
      id: [''],
    });

    this.ar.params.subscribe((params) => {
      this.productId = params['id'];
      if (this.productId) {
        this.contactForm.patchValue({ id: this.productId });
        this.getProduct();
      }
    });
  }

  showForm() {
    this.formOpen = true;
  }
  closeModal() {
    this.formOpen = false;
  }

  ngOnInit(): void {}

  getProduct() {
    this.userService.getSingleProduct(this.productId).subscribe((res) => {
      this.product = res.data;
      if (this.product) {
        this.userService
          .getAllRelatedProducts({ category: this.product.category })
          .subscribe((res) => {
            console.log(res);
            this.relatedProducts = res.filter(
              (pro:any) => pro._id !== this.product._id
            );
          });
      }
    });
  }

  goToSingle(id:string){
    this.router.navigate(['/singleview/' + id])
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.userService.productCallBack(this.contactForm.value).subscribe((res)=>{
        if(res.message == 'Callback request submitted successfully'){
          this.formOpen = false
          Swal.fire({
            text: 'Your form is submitted.We will connect you shortly.',
            icon: 'success',
            timer: 3000,
          });
        }
        
      })
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
