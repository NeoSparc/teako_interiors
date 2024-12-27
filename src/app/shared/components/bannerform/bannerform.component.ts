import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bannerform',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './bannerform.component.html',
  styleUrl: './bannerform.component.css'
})
export class BannerformComponent {
  // Signals
  imagePreview = signal<string | null>(null);

  // Ad Categories
  adCategories: any = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'home-decor', label: 'Home & Decor' },
    { value: 'books', label: 'Books' },
    { value: 'sports', label: 'Sports & Fitness' }
  ];

  // Reactive Form
  adForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      minOffer: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      maxOffer: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      description: [''],
      image: [null, Validators.required]
    }, { validators: this.offerRangeValidator });
  }

  // Custom validator to ensure max offer is greater than min offer
  offerRangeValidator(group: FormGroup) {
    const minOffer = group.get('minOffer')?.value;
    const maxOffer = group.get('maxOffer')?.value;
    
    return minOffer <= maxOffer 
      ? null 
      : { offerRangeInvalid: true };
  }

  // File selection and preview
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Set form control value
      this.adForm.get('image')?.setValue(file);

      // Create image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  // Clear image preview and form image value
  clearImage(): void {
    this.imagePreview.set(null);
    this.adForm.get('image')?.setValue(null);
  }

  // Form submission handler
  onSubmit(): void {
    if (this.adForm.valid) {
      // Prepare form data for submission
      const formData = new FormData();
      Object.keys(this.adForm.controls).forEach(key => {
        const control = this.adForm.get(key);
        if (control && control.value !== null) {
          formData.append(key, control.value);
        }
      });

      console.log('Ad Form Submitted', formData);
      // Here you would typically send the formData to your backend
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.adForm.controls).forEach(key => {
        const control = this.adForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
