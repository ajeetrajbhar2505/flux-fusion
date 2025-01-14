import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit,OnDestroy {
  continuewithSocial: boolean = true
  signUp: boolean = false
  openOTP: boolean = false

  ngOnInit() { }



  navigateToOTPPage() {
    this.openOTP = true
  }

  generateOTP() {
    this.openOTP = !this.openOTP
  }

  closeOTP() {
    this.openOTP = false
  }

  ngOnDestroy(): void {
    this.openOTP = false
  }


}
