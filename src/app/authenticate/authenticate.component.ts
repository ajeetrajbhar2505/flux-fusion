import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {
  continuewithSocial: boolean = true
  signUp:boolean = false
  openOTP: boolean = false

  constructor( private router:Router) { }

  ngOnInit() { }


  
  navigateToOTPPage(){
    this.router.navigate(['reset-passwprd'])
  }

  generateOTP() {
    this.openOTP = !this.openOTP
  }

  closeOTP(){
    this.openOTP = false
  }
}
