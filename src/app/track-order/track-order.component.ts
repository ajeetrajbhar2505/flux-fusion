import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss'],
})
export class TrackOrderComponent  implements OnInit {
  products: any[] = [
    { productName: 'Blue Shirt', folder: 'shirt-1', productAmount: '23', totalProductsSold: 1323 },
  ]
  constructor(private router:Router) { }

  ngOnInit() {}


  goBack() {
    this.router.navigate(['/orders'])
  }

}
