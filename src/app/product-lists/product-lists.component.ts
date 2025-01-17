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
    { productName: 'Blue Shirt', folder : 'shirt-1', productAmount: '999', totalProductsSold: 1323,sizeAvailable :['S','M','L','XL','XXL']  },
    { productName: 'Pink Shirt', folder : 'shirt-2', productAmount: '999', totalProductsSold: 423,sizeAvailable : ['S','M','L'] },
    { productName: 'Black Shirt', folder : 'shirt-3', productAmount: '999', totalProductsSold: 2323,sizeAvailable : ['S','M','L','XXL'] },
    { productName: 'Black Shirt', folder : 'shirt-4', productAmount: '999', totalProductsSold: 8223,sizeAvailable : ['S','M','L','XL'] },
  ]
  sizes : string[] = ['S','M','L','XL','XXL']
  filteredProducts: any[] = [];

  constructor(public router: Router, private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.queryParams.subscribe((data: any) => {
      this.search = data.enableSearchBar || false

    })
  }



  goBack() {
    this.router.navigate(['/home'],{replaceUrl : true})
  }

  viewProduct(productImageId: number) {
    this.router.navigate(['/view-product'], {queryParams: { productImageId } })
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

  calculatePercentageOff(originalPrice: number, salePrice: number): number {
    if (originalPrice <= 0) {
        throw new Error("Original price must be greater than 0.");
    }
    const discount = originalPrice - salePrice;
    const percentageOff = (discount / originalPrice) * 100;
    return Math.round(percentageOff);
}

}
