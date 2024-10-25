import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { GlobalModule } from '../global/global.module';
import { ResetPasswordComponent } from './reset-password.component';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    GlobalModule,
    ResetPasswordRoutingModule
  ]
})
export class ResetPasswordModule { }
