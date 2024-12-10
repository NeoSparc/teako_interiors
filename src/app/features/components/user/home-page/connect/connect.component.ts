import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent {
  connectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, ) {
    this.connectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.email]],
      place: ['', Validators.required],
      category:['',Validators.required]
    });
  }

  onSubmit() {
    // if (this.connectForm.valid) {
    //   this.connectService.connectWithUs(this.connectForm.value).subscribe({
    //     next: (response) => {
    //       console.log('Form submitted successfully:', response);
    //       // Add success notification logic here
    //     },
    //     error: (error) => {
    //       console.error('Error submitting form:', error);
    //       // Add error notification logic here
    //     }
    //   });
    // } else {
    //   Object.keys(this.connectForm.controls).forEach(key => {
    //     const control = this.connectForm.get(key);
    //     if (control?.invalid) {
    //       control.markAsTouched();
    //     }
    //   });
    // }
  }
}
