import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  signup:boolean = false
  activeSlide:number = 0
  offers = [
    {
      discount: "30%",
      description: "Today's Special!<br><small> Get discount for every order, only valid for today</small>",
      image: "assets/offers/shirt.png",
      alt: "Offer Image"
    },
    {
      discount: "65%",
      description: "Today's Special!<br><small> Get discount for every order, only valid for today</small>",
      image: "assets/offers/bags.avif",
      alt: "Offer Image"
    },
    {
      discount: "15%",
      description: "Today's Special!<br><small> Get discount for every order, only valid for today</small>",
      image: "assets/offers/t-shirt.png",
      alt: "Offer Image"
    },
    {
      discount: "80%",
      description: "Today's Special!<br><small> Get discount for every order, only valid for today</small>",
      image: "assets/offers/shirt.png",
      alt: "Offer Image"
    }
  ];

  constructor(public router: Router) { 
    this.signup = false
  }

  ngOnInit() { }

  navigateToRegister(){
    this.signup = false
    this.router.navigate(['authenticate'])
  }


  setActiveSlide(i:number){
    this.activeSlide = i
  }
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
