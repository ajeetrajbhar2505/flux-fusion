import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss'],
})
export class ProductListsComponent implements OnInit {
  @Input() showheader: boolean = true
  @Input() search: boolean = false
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
  ngOnInit() { }

}
