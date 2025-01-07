import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bannerform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './bannerform.component.html',
  styleUrl: './bannerform.component.css',
})
export class BannerformComponent {
  imagePreview = signal<string | null>(null);
  offerId:string = ''
  bannerform: FormGroup;
  @Output() bannerdata = new EventEmitter<any>()

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.bannerform = this.fb.group({
      description: [''],
      image: [null, Validators.required],
    });

    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.offerId = params['id']
        this.bannerform.addControl(
          'offerId',
          this.fb.control(params['id'], Validators.required)
        );
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      this.bannerform.get('image')?.setValue(file);

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  clearImage(): void {
    this.imagePreview.set(null);
    this.bannerform.get('image')?.setValue(null);
  }

  onSubmit(): void {
    if (this.bannerform.valid) {
      const formData = new FormData();
      Object.keys(this.bannerform.controls).forEach((key) => {
        const control = this.bannerform.get(key);
        if (control && control.value !== null) {
          formData.append(key, control.value);
        }
      });
      this.bannerdata.emit(formData)
      console.log('Banner Form Submitted', formData);
    } else {
      Object.keys(this.bannerform.controls).forEach((key) => {
        const control = this.bannerform.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
