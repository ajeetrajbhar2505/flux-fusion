import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {
  continuewithSocial: boolean = true

  letsSignIn() {
    this.continuewithSocial = !this.continuewithSocial
  }
  constructor() { }

  ngOnInit() { }

}
