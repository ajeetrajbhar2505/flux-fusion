import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OtpComponent } from '../otp/otp.component';
import { ProductListsComponent } from '../product-lists/product-lists.component';



@NgModule({
  declarations: [OtpComponent,ProductListsComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CommonModule
  ],
  exports:[OtpComponent,ProductListsComponent]
})
export class GlobalModule { }
