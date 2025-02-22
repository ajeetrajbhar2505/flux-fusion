import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map, take, timer } from 'rxjs';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit, OnDestroy {
  @Input() forgotBy: string = ""
  private timerSubscription: Subscription | null = null;
  numers: string[] = []
  pin1: string = ''
  pin2: string = ''
  pin3: string = ''
  pin4: string = ''
  PIN: string = ''
  removeCounter: number = 1
  shownumber: boolean = false
  showLoader: boolean = false
  countDown: any
  enableResendOTP: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.generatePin()
    this.startCounter(1500)
  }

  generatePin() {
    for (let i = 1; i < 10; i++) {
      this.numers.push(i.toString());
    }
  }

  get enableVerifybtn(): boolean {
    return this.pin1 != '' && this.pin2 != '' && this.pin3 != '' && this.pin4 != ''
  }

  handlePIN(PIN: string) {
    this.PIN = PIN
    this.shownumber = true

    setTimeout(() => {

      if (this.pin1 == '') {
        this.pin1 = PIN
      }
      else if (this.pin2 == '') {
        this.pin2 = PIN
      }

      else if (this.pin3 == '') {
        this.pin3 = PIN
      }
      else if (this.pin4 == '') {
        this.pin4 = PIN
      }
      this.removeCounter += 1
      if (this.removeCounter == 5) {

      }
    }, 100);
  }

  showConfirmation() {
      this.showLoader = true
      return
    //   setTimeout(() => {
    //   this.showLoader = true
    // }, 200);
    setTimeout(() => {
      this.startCounter(1500)
      this.showLoader = false
      this.router.navigate(['home'], { replaceUrl: true })
      this.pin1 = ""
      this.pin2 = ""
      this.pin3 = ""
      this.pin4 = ""
      this.PIN = ""
      this.removeCounter = 1
    }, 3000);
  }

  removePin() {
    this.removeCounter -= 1
    if (this.removeCounter == 1) {
      this.pin1 = ""
    }
    if (this.removeCounter == 2) {
      this.pin2 = ""
    }
    if (this.removeCounter == 3) {
      this.pin3 = ""
    }
    if (this.removeCounter == 4) {
      this.pin4 = ""
    }
  }

  startCounter(count: number) {
    // Unsubscribe from the previous timer if it exists
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.enableResendOTP = false;
    this.timerSubscription = timer(0, 1000).pipe(
      take(count),
      map(() => --count)
    ).subscribe(value => {
      const minute: number = Math.floor(value / 60);
      this.countDown = ('00' + minute).slice(-2) + 'm' + ':' + ('00' + Math.floor(value - minute * 60)).slice(-2) + 's';
      if (value <= 0) {
        this.enableResendOTP = true;
      }
    });
  }
  ngOnDestroy(): void {
    this.startCounter(1500)
    this.pin1 = ""
    this.pin2 = ""
    this.pin3 = ""
    this.pin4 = ""
    this.PIN = ""
    this.removeCounter = 1
    this.showLoader = false
  }

}
