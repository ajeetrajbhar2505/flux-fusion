import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent {
    productImages: string[] = []
    activeColorId: number = 0
    activeSizeId: number = 0
    incrementedValue: number = 1
    amount:number = 108

    constructor(private location: Location, private ActivatedRoute: ActivatedRoute) {
        this.ActivatedRoute.queryParams.subscribe((data: any) => {
            this.filterImages(data.productImageId)
        })
    }

    filterImages(productImageId: number) {
        let imagePath: string = 'assets/shirt-' + productImageId
        for (let index = 1; index <= 3; index++) {
            this.productImages.push(imagePath + '/' + index + '.webp')
        }
    }

    goBack() {
        this.location.back()
    }

    increment() {
        this.amount += 108
        this.incrementedValue++;
    }

    decrement() {
        if (this.incrementedValue > 1) {
        this.amount -= 108
        this.incrementedValue--;
        }
    }

}
