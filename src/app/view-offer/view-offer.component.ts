import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.scss'],
})
export class ViewOfferComponent implements OnInit {

  constructor(public Location: Location) { }

  ngOnInit() { }

  goBack() {
    this.Location.back()
  }

}
