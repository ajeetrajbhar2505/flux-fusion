import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { IonicModule } from '@ionic/angular';
import { RazorpayService } from '../razorpay.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    IonicModule,
    HttpClientModule
  ],
  providers : [RazorpayService]
})
export class CartModule { }
