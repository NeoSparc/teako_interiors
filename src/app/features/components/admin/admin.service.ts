import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environment/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class AdminService {
      constructor(private http: HttpClient) {}
    
      baseUrl = environment.baseUrl;

   // Users
/** Fetch all users */
getAllUsersList(): Observable<any> {
  return this.http.get(`${this.baseUrl}/admin/users`);
}

/** Fetch all users along with their products */
getUsersWithProduct(): Observable<any> {
  return this.http.get(`${this.baseUrl}/admin/users-with-product`);
}

/** Fetch dashboard data (users and products) */
getAllUsersAndProducts(): Observable<any> {
  return this.http.get(`${this.baseUrl}/admin/dashdata`);
}

// Products
/** Add a new product */
addNewProduct(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/admin/product`, data);
}

/** Edit an existing product */
editProduct(data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/admin/product`, data);
}

/** Delete a product by ID */
deleteProduct(data: any): Observable<any> {    
  return this.http.delete(`${this.baseUrl}/admin/product/` + data);
}

/** Fetch a single product by ID */
getSingleProduct(productId: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/admin/product/${productId}`);
}

// Banners
/** Fetch all banners */
getAllBanners(): Observable<any> {
  return this.http.get(`${this.baseUrl}/admin/banner`);
}

/** Fetch a single banner by ID */
getSingleBanner(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/admin/getSinglebanner`, data);
}

/** Add a new banner */
addBanner(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/admin/banner`, data);
}

/** Edit an existing banner */
editBanner(data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/admin/banner`, data);
}

/** Delete a banner by ID */
deleteBanner(data: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/admin/banner/` + data);
}

// Offers
/** Fetch all offers */
getAllOffers(): Observable<any> {
  return this.http.get(`${this.baseUrl}/admin/offer`);
}

/** Fetch a single offer by ID */
getSingleOffer(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/admin/getOffer`, data);
}

/** Create a new offer */
createOffer(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/admin/offer`, data);
}

/** Edit an existing offer */
editOffer(data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/admin/offer`, data);
}

/** Delete an offer by ID */
deleteOffer(data: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/admin/offer/` + data);
}

    
}