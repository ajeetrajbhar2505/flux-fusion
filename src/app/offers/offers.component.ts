import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent  implements OnInit {

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
  
  constructor(private router:Router) { }

  ngOnInit() {}

  goBack(){
   this.router.navigate(['/home'])
  }

}
