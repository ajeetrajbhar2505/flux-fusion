import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  signup:boolean = false
  constructor(public router: Router) { 
    this.signup = false
  }

  ngOnInit() { }

  toogleSinup(){
    this.signup = !this.signup
  }
  navigateToFilter() {
      this.router.navigate(['filter'])
  }

  navigateToSearch() {
    this.router.navigate(['/product-lists'], {replaceUrl: true, queryParams: { enableSearchBar: true } })
  }

  navigateToProductLists() {
    this.router.navigate(['/product-lists'],{replaceUrl: true})
  }


}
