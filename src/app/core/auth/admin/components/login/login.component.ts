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

  loginForm : FormGroup
  submited:boolean = false

  constructor(private fb:FormBuilder , private router:Router){
    this.loginForm = this.fb.group({
      email:['' ,[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  onSubmit(): void {
    this.submited = true
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      this.router.navigate(['/dashboard']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
