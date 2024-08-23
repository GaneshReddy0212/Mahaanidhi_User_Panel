import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl ="https://localhost:7124/api/Payment";

  constructor(private http: HttpClient) {}

  createOrder(amount: number) {
    return this.http.post<{ orderId: string }>(`${this.apiUrl}/create-order`, amount);
  }

  verifyPayment(paymentDetails: any) {
    return this.http.post(`${this.apiUrl}/verify-payment`, paymentDetails);
  }
}
