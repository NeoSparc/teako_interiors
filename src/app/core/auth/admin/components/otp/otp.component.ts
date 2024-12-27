import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [NgOtpInputModule, CommonModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
})
export class OtpComponent {
  otp: string = '';
  message: string = '';
  adminEmail: string = '';
  onOtpChange(otp: any) {
    this.otp = otp;
  }

  onSubmit() {}

  resentOtp() {}
}
