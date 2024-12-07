import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RazorpayService } from '../razorpay.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  products: any[] = [
    { productName: 'Blue Shirt', folder: 'shirt-1', productAmount: '23', totalProductsSold: 1323 },
    { productName: 'Pink Shirt', folder: 'shirt-2', productAmount: '22', totalProductsSold: 423 },
    { productName: 'Colour Combo Shirt', folder: 'shirt-3', productAmount: '23', totalProductsSold: 2323 },
    { productName: 'Black Shirt', folder: 'shirt-4', productAmount: '40', totalProductsSold: 8223 },
  ]

  constructor(private router: Router, private razorpayService: RazorpayService) { }

  ngOnInit() { }

  goBack() {
    this.router.navigate(['/cart'])
  }


  // Function to create Razorpay order and open the payment modal
  createRzpayOrder(amount: number, currency: string): void {
    this.razorpayService.createOrder(amount, currency).subscribe(
      (data) => {
        // Handle order creation success
        const orderId = data.orderId;
        if (orderId) {
          this.payWithRazor(orderId);
        } else {
          alert('Failed to create Razorpay order. Please try again.');
        }
      },
      (error) => {
        console.error('Error creating Razorpay order:', error);
        alert('Failed to create Razorpay order. Please try again.');
      }
    );
  }

  // Razorpay payment modal configuration
  payWithRazor(orderId: string): void {
    const options: any = {
      key: 'rzp_test_bi1qvKeFE2Pz31', // Your Razorpay API key
      amount: 1000, // Amount in paise (e.g., Rs 10 = 1000 paise)
      currency: 'INR',
      name: 'Ajeet Rajbhar',
      description: 'Payment for Product',
      image: '/assets/logo.png', // Optional logo
      order_id: orderId, // Order ID returned by backend
      handler: (response: any) => {
        console.log('Payment Response:', response);
        this.verifyPayment(response);
      },
      modal: {
        escape: true,
      },
      notes: {
        // Optional notes
      },
      theme: {
        color: '#0c238a',
      },
    };

    try {
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      alert('Something went wrong. Please try again.');
    }
  }

  // Verify payment on the backend after success
  verifyPayment(response: any): void {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

    this.razorpayService.verifyPayment({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    }).subscribe(
      (result) => {
        if (result.success) {
          alert('Payment verified successfully!');
        } else {
          alert('Payment verification failed.');
        }
      },
      (error) => {
        console.error('Error verifying payment:', error);
        alert('Payment verification failed.');
      }
    );
  }


}
