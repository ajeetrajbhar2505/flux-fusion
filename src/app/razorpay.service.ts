import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RazorpayService {
  private apiUrl = 'http://localhost:3000'; // Your backend API URL

  constructor(private http: HttpClient) {}

  // API call to create Razorpay order
  createOrder(amount: number, currency: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-order`, { amount:amount, currency:currency });
  }

  // API call to verify payment
  verifyPayment(paymentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-payment`, paymentData);
  }
}
