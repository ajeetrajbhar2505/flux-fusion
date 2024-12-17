import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOfferRoutingModule } from './view-offer-routing.module';
import { ViewOfferComponent } from './view-offer.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ViewOfferComponent],
  imports: [
    CommonModule,
    ViewOfferRoutingModule,
    IonicModule
  ]
})
export class ViewOfferModule { }
