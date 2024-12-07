import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { IonicModule } from '@ionic/angular';
import { OffersComponent } from './offers.component';


@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    IonicModule
  ]
})
export class OffersModule { }
