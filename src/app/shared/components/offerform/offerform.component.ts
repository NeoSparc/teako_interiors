import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offerform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './offerform.component.html',
  styleUrl: './offerform.component.css',
})
export class OfferformComponent implements OnInit {
  imagePreview = signal<string | null>(null);
  offerId:string = ''
  adForm: FormGroup;
  @Output() offerData = new EventEmitter<any>()

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.adForm = this.fb.group(
      {
        minOffer: [
          0,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        maxOffer: [
          0,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        image: [null, Validators.required],
      },
      { validators: this.offerRangeValidator }
    );

    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.offerId = params['id']
        this.adForm.addControl(
          'offerId',
          this.fb.control(params['id'], Validators.required)
        );
      }
    });
  }

  ngOnInit(): void {}

  offerRangeValidator(group: FormGroup) {
    const minOffer = group.get('minOffer')?.value;
    const maxOffer = group.get('maxOffer')?.value;

    return minOffer <= maxOffer ? null : { offerRangeInvalid: true };
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
      Object.keys(this.adForm.controls).forEach((key) => {
        const control = this.adForm.get(key);
        if (control && control.value !== null) {
          formData.append(key, control.value);
        }
      });
      this.offerData.emit(formData)
      console.log('Ad Form Submitted', formData);
    } else {
      Object.keys(this.adForm.controls).forEach((key) => {
        const control = this.adForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
