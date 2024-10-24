import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {
  continuewithSocial: boolean = true

  constructor( private router:Router) { }

  ngOnInit() { }


  letsSignIn() {
    this.router.navigate(['authenticate-pin'])
  }
}
