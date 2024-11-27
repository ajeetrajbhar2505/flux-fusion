import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent  implements OnInit {

  constructor(private location:Location) { }

  goBack(){
    this.location.back()
  }
  ngOnInit() {}

}
