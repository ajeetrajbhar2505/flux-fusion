import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OtpComponent } from '../otp/otp.component';



@NgModule({
  declarations: [OtpComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CommonModule
  ],
  exports:[OtpComponent]
})
export class GlobalModule { }
