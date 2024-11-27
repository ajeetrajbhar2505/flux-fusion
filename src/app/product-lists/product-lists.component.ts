import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss'],
})
export class ProductListsComponent implements OnInit {
  @Input() showheader: boolean = true
  constructor(public router: Router) { }

  goBack() {
    this.router.navigate(['/home'])
  }

  viewProduct(){
    this.router.navigate(['/view-product'])
  }
  ngOnInit() { }

}
