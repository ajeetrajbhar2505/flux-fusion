import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {

  products: any[] = [
    { productName: 'Blue Shirt', folder : 'shirt-1', productAmount: '23', totalProductsSold: 1323 },
    { productName: 'Pink Shirt', folder : 'shirt-2', productAmount: '22', totalProductsSold: 423 },
    { productName: 'Colour Combo Shirt', folder : 'shirt-3', productAmount: '23', totalProductsSold: 2323 },
    { productName: 'Black Shirt', folder : 'shirt-4', productAmount: '40', totalProductsSold: 8223 },
  ]
  
  constructor(private router:Router) { }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home'])
  }

}
