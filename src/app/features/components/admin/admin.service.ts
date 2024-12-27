import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environment/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class UserService {
      constructor(private http: HttpClient) {}
    
      baseUrl = environment.baseUrl;

      // Users
  getAllUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/users`);
  }

  getUsersWithProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/users-with-product`);
  }

  // Products
  addNewProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/product`, data);
  }

  editProduct(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/product`, data);
  }

  deleteProduct(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/product`, data);
  }

  getSingleProduct(productId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/product/${productId}`);
  }

  // Banners
  addBanner(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/banner`, data);
  }

  editBanner(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/banner`, data);
  }

  deleteBanner(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/banner`, data);
  }

  // Offers
  createOffer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/offer`, data);
  }

  editOffer(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/offer`, data);
  }

  deleteOffer(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/offer`, data);
  }
    
}