import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss'],
})
export class ProductListsComponent {
  @Input() showheader: boolean = true
  @Input() search: boolean = false
  searchQuery: string = '';
  products: any[] = [
    { productName: 'Blue Shirt', folder : 'shirt-1', productAmount: '23', totalProductsSold: 1323 },
    { productName: 'Pink Shirt', folder : 'shirt-2', productAmount: '22', totalProductsSold: 423 },
    { productName: 'Colour Combo Shirt', folder : 'shirt-3', productAmount: '23', totalProductsSold: 2323 },
    { productName: 'Black Shirt', folder : 'shirt-4', productAmount: '40', totalProductsSold: 8223 },
  ]
  filteredProducts: any[] = [];

  constructor(public router: Router, private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.queryParams.subscribe((data: any) => {
      this.search = data.enableSearchBar || false

    })
  }

  goBack() {
    this.router.navigate(['/home'])
  }

  viewProduct(productImageId: number) {
    this.router.navigate(['/view-product'], { queryParams: { productImageId } })
  }

  navigateToFilter() {
    this.router.navigate(['/filter'])
  }

  onSearch(query: string): void {
    this.filteredProducts = query
      ? this.products.filter(product =>
        product.productName.toLowerCase().includes(query.toLowerCase())
      )
      : [];
  }

}
