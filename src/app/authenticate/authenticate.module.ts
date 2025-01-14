import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { GlobalModule } from '../global/global.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileNumberDirective } from '../mobile-number.directive';


@NgModule({
  declarations: [AuthenticateComponent,MobileNumberDirective],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    GlobalModule,
    IonicModule,
    ReactiveFormsModule
  ],
})
export class AuthenticateModule { }
