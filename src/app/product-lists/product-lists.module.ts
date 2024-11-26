import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListsRoutingModule } from './product-lists-routing.module';
import { ProductListsComponent } from './product-lists.component';
import { GlobalModule } from '../global/global.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ProductListsComponent],
  imports: [
    CommonModule,
    GlobalModule,
    ProductListsRoutingModule,
    IonicModule
  ]
})
export class ProductListsModule { }
