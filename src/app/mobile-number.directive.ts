import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMobileNumber]'
})
export class MobileNumberDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any): void {
    let input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');  // Remove all non-digit characters

    // Limit to 10 digits
    if (value.length > 10) {
      value = value.slice(0, 10);  // Allow only the first 10 digits
    }


    input.value = value;
  }
}
