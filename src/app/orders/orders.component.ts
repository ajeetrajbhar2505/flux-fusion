import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  activeTabIndex: number = 1
  products: any[] = [
    { productName: 'Blue Shirt', folder: 'shirt-1', productAmount: '23', totalProductsSold: 1323 },
    { productName: 'Pink Shirt', folder: 'shirt-2', productAmount: '22', totalProductsSold: 423 },
    { productName: 'Colour Combo Shirt', folder: 'shirt-3', productAmount: '23', totalProductsSold: 2323 },
    { productName: 'Black Shirt', folder: 'shirt-4', productAmount: '40', totalProductsSold: 8223 },
  ]
  constructor(private router:Router) { }

  ngOnInit() { }

  activateTab(active: number) {
    this.activeTabIndex = active
  }

  removeProduct(i:number){
    this.products.splice(i, 1)
  }


  goBack() {
    this.router.navigate(['/home'])
  }



}
