import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss'],
})
export class TrackOrderComponent  implements OnInit {
  products: any[] = [
    { productName: 'Double Cuff Blue Shirt', folder: 'shirt-1', productAmount: '23', totalProductsSold: 1323 },
  ]

  wizards = [
    {
      complete: true,
      title: "Order In Transit - Dec 17",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate."
    },
    {
      complete: true,
      title: "Order Shipped - Dec 16",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate."
    },
    {
      complete: true,
      title: "Order is in Packing - Dec 15",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate."
    },
      {
      complete: true,
      title: "Verified Payments - Dec 15",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate."
    },
  ];

  tickIcon = `<svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />`;
        
  constructor(private router:Router) { }

  ngOnInit() {}


  goBack() {
    this.router.navigate(['/orders'])
  }

}
