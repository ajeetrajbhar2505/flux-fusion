import { Component, OnInit } from '@angular/core';
import { map, take, timer } from 'rxjs';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.scss'
})
export class PinComponent implements OnInit {
  numers: string[] = []
  pin1: string = ''
  pin2: string = ''
  pin3: string = ''
  pin4: string = ''
  PIN: string = ''
  removeCounter:number = 0
  shownumber: boolean = false
  ngOnInit(): void {
    this.generatePin()
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
    }, 100);
  }



  removePin() {
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
    this.removeCounter -= 1
  }

  setOTP(){
   
  }


}
