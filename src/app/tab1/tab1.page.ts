import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slider: number = 0;
  slides: Array<any> = [
    {
      image: 'https://img.freepik.com/premium-vector/professional-shopper-female-character-use-help-personal-fashion-stylist_1016-5862.jpg?ga=GA1.1.789477323.1724498695&semt=ais_hybrid',
      title: 'Find the perfect products<br> for your lifestyle',
    },
    {
      image: 'https://img.freepik.com/premium-vector/young-lady-buying-bag-web-store-making-purchases-internet-choosing-goods-online-digital-environment-sector-vector-flat-illustration-orange-blue-colors_776652-2299.jpg',
      title: 'Quality and style,<br> tailored just for you',
    },
    {
      image: 'https://img.freepik.com/premium-vector/young-lady-standing-near-big-screen-selecting-drinks-electronic-commerce-digital-environment-doing-online-shopping-from-home-vector-flat-illustration-orange-blue-colors_776652-2306.jpg',
      title: "Shop smart, live better<br> with FLUX FUSION",
    },
    {
      image: 'https://img.freepik.com/premium-vector/young-male-selecting-jackets-online-via-tablet-looking-right-size-big-sales-discounts-online-shopping-purchase-goods-via-internet-vector-flat-illustration-orange-colors_776652-2296.jpg',
      title: 'Discover endless possibilities<br> with every click',
    },
    {
      image: 'https://img.freepik.com/premium-vector/male-holding-tablet-order-clothes-web-store-big-sales-discounts-online-shopping-purchase-goods-via-internet-vector-flat-illustration-orange-colors_776652-2295.jpg',
      title: 'Your satisfaction is our<br> number one priority',
    },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.activeSlider(this.slider + 1)
    }, 2000);
  }
  
  activeSlider(number: number): void {
    this.slider = number;
    if (number === this.slides.length) {
      this.slider = 0; // Reset slider when reaching the last one
    }

  }
}