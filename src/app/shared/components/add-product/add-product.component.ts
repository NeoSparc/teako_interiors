import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../features/components/user/userService.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  productForm: FormGroup;
  productId: string = '';
  imagePreview = signal<string | null>(null);
  @Output() proform = new EventEmitter<any>()

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute , private userService:UserService) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      category: ['', [Validators.required]],
      length: ['', [Validators.min(0)]],
      width: ['', [Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0)]],
      availability: [true, Validators.required],
      description: [''],
      image: [null , Validators.required],
    });

    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
      if (params['id']) {
        this.productForm.addControl(
          'productId',
          this.fb.control(params['id'], Validators.required)
        );
      }
      if(this.productId){
        userService.getSingleProduct(this.productId).subscribe((res)=>{
          console.log(res);
          this.productForm.patchValue(res.data)
          this.imagePreview.set(res.data.image)
        })
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      this.productForm.get('image')?.setValue(file);

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = new FormData();
  
      const availabilityValue = this.productForm.get('availability')?.value;
      if (availabilityValue === 'Yes') {
        this.productForm.get('availability')?.setValue(true);
      } else if (availabilityValue === 'No') {
        this.productForm.get('availability')?.setValue(false);
      }
  
      Object.keys(this.productForm.controls).forEach((key) => {
        const control = this.productForm.get(key);
        if (control) {
          formData.append(key, control.value);
        }
      });
  
      this.proform.emit(formData);
    } else {
      Object.keys(this.productForm.controls).forEach((key) => {
        const control = this.productForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
  
}
