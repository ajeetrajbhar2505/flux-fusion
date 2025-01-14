import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackOrderRoutingModule } from './track-order-routing.module';
import { TrackOrderComponent } from './track-order.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TrackOrderComponent],
  imports: [
    CommonModule,
    TrackOrderRoutingModule,
    IonicModule
  ]
})
export class TrackOrderModule { }
