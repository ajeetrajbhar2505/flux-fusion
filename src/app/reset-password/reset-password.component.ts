import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  openOTP: boolean = false
  forgotBy:string = "+91-7718569994"
  constructor(){
  }
  generateOTP() {
    this.openOTP = !this.openOTP
  }

  closeOTP(){
    this.openOTP = false
  }
}
