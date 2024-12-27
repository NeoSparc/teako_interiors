import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  resetPasswordForm: FormGroup;
  submited: boolean = false;
  showResetPasswordForm: boolean = false; 

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    this.submited = true;
    if (this.loginForm.valid) {
      console.log('Login Submitted', this.loginForm.value);
    }
  }

  onResetPassword(): void {
    this.submited = true;
    if (this.resetPasswordForm.valid) {
      console.log('Reset Password Submitted', this.resetPasswordForm.value);
    }
  }

  toggleResetPasswordForm(): void {
    this.showResetPasswordForm = !this.showResetPasswordForm;
    this.submited = false; 
  }

}
