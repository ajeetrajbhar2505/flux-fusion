import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  arialSelected: number = 0
  router: string = '';

  constructor(private routerService: Router) {}

  ngOnInit() {
    this.routerService.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router = event.urlAfterRedirects;
      }
    });
   }

  changeArialSelected(arialSelected: number) {
    this.arialSelected = arialSelected
  }
}
