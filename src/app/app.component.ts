import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showLoader = true;
  constructor(private router: Router) { }
  hideNavigationMenu: boolean = true
  ngOnInit() {

    // Listen for navigation events
    this.router.events.subscribe(event => {
      this.showLoader = true
      if (event instanceof NavigationEnd) {

        const hiddenRoutes = [
          '/authenticate',
          '/cart',
          '/checkout',
          '/offers',
          '/view-product',
          '/view-offers',
          '/product-lists'
        ];
        
        const currentRoute = event.url.split('?')[0]; // Remove query parameters
        this.hideNavigationMenu = hiddenRoutes.includes(currentRoute);
        

        // Hide loader after navigation completes
        setTimeout(() => {
          this.showLoader = false
        }, 1000);

      }
    });
  }
}
