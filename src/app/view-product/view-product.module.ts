import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductRoutingModule } from './view-product-routing.module';
import { GlobalModule } from '../global/global.module';
import { ViewProductComponent } from './view-product.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ViewProductComponent],
  imports: [
    CommonModule,
    ViewProductRoutingModule,
    GlobalModule,
    IonicModule
  ]
})
export class ViewProductModule { }
