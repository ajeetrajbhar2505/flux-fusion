import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  arialSelected: number = 0
  constructor() { }

  ngOnInit() { }

  changeArialSelected(arialSelected: number) {
    this.arialSelected = arialSelected
  }
}
