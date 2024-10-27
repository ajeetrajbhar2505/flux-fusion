import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { GlobalModule } from '../global/global.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AuthenticateComponent],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    GlobalModule,
    IonicModule
  ]
})
export class AuthenticateModule { }
