import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  productImage: string = ""
  constructor(private location: Location, private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.queryParams.subscribe((data: any) => {
      this.productImage = data.productImage
    })
  }

  goBack() {
    this.location.back()
  }
  ngOnInit() { }

}
