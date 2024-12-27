import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  // Login
  adminLogin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  // Reset Password Email
  resetPasswordEmail(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/resetpassemail`, data);
  }

  // OTP Submission
  otpPost(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/otp`, data);
  }

  // Reset Password
  resetPassword(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/resetpassword`, data);
  }
}
