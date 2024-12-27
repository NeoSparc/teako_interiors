import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-offerform',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './offerform.component.html',
  styleUrl: './offerform.component.css'
})
export class OfferformComponent {
  imagePreview = signal<string | null>(null);


  adForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adForm = this.fb.group({
      minOffer: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      maxOffer: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      image: [null, Validators.required]
    }, { validators: this.offerRangeValidator });
  }

  offerRangeValidator(group: FormGroup) {
    const minOffer = group.get('minOffer')?.value;
    const maxOffer = group.get('maxOffer')?.value;
    
    return minOffer <= maxOffer 
      ? null 
      : { offerRangeInvalid: true };
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      this.adForm.get('image')?.setValue(file);

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  clearImage(): void {
    this.imagePreview.set(null);
    this.adForm.get('image')?.setValue(null);
  }

  onSubmit(): void {
    if (this.adForm.valid) {
      const formData = new FormData();
      Object.keys(this.adForm.controls).forEach(key => {
        const control = this.adForm.get(key);
        if (control && control.value !== null) {
          formData.append(key, control.value);
        }
      });

      console.log('Ad Form Submitted', formData);
    } else {
      Object.keys(this.adForm.controls).forEach(key => {
        const control = this.adForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
