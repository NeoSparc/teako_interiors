import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  // Get Single Product
  getSingleProduct(productId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/product/${productId}`);
  }

  // Connect With Us Form Submission
  connectWithUs(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/connect`, data);
  }

  // Product Callback Form Submission
  productCallBack(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/callback`, data);
  }

  // Show All Products
  showAllProducts(data:{searchIndex:string , selectedCategory:string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/products` , data);
  }

  // Get All Offers
  getAllOffers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/offers`);
  }

  // Get All Banners
  getAllBanners(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/banners`);
  }

  // get all related products
  getAllRelatedProducts(data:{category:string  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/relatedProducts` , data);
  }
} 

