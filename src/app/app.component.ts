import { Component , OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showLoader = true;
  constructor(private router: Router) {}

  ngOnInit() {
    // Listen for navigation events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide loader after navigation completes
        this.showLoader = false;
      }
    });
  }
}
