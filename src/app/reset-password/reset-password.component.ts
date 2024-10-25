import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  openOTP: boolean = false

  constructor(){
  }
  generateOTP() {
    this.openOTP = !this.openOTP
  }

  closeOTP(){
    this.openOTP = false
  }
}
