import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinRoutingModule } from './pin-routing.module';
import { PinComponent } from './pin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PinComponent],
  imports: [
    CommonModule,
    PinRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule
  ]
})
export class PinModule { }
