import { Component } from '@angular/core';
import { PaymentService } from 'src/app/Sevices/payment.service';
declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {
  constructor(private paymentService: PaymentService) { }

  pay(amountNumber: string) {
    const amount = parseFloat(amountNumber); // Convert string to number

    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }


  // pay(amount: number) {
    this.paymentService.createOrder(amount).subscribe(
      (response) => {
        const options = {
          key: 'rzp_test_dummyKey', // Replace with your Razorpay Key ID
          amount: amount * 100, // Amount is in currency subunits. Default currency is INR.
          currency: 'INR',
          name: 'Galaxy',
          description: 'Test Transaction',
          order_id: response.orderId, // This is a sample Order ID.
          handler: (response: any) => {
            const paymentDetails = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              amount: amount,
            };

            this.paymentService.verifyPayment(paymentDetails).subscribe(
              (verifyResponse) => {
                alert('Payment successful');
              },
              (error) => {
                alert('Payment verification failed');
              }
            );
          },
          prefill: {
            name: 'Ganesh Reddy',
            email: 'ganesh@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#3399cc',
          },
        };

        const rzp = new Razorpay(options);
        rzp.open();
      },
      (error) => {
        console.error('Order creation failed', error);
      }
    );
  }
}
