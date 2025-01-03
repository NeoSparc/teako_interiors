import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../../userService.service';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css',
})
export class ConnectComponent {
  connectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.connectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      email: ['', [Validators.email,Validators.required]],
      place: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.connectForm.valid) {
      this.userService.connectWithUs(this.connectForm.value).subscribe({
        next: (response) => {
          this.connectForm.reset()
        },
        error: (error) => {},
      });
    } else {
      Object.keys(this.connectForm.controls).forEach((key) => {
        const control = this.connectForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
