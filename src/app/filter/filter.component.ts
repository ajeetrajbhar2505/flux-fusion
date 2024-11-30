import { Location } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements AfterViewInit {
  @ViewChild('fromSlider') fromSlider!: ElementRef<HTMLInputElement>;
  @ViewChild('toSlider') toSlider!: ElementRef<HTMLInputElement>;
  @ViewChild('fromSliderTooltip') fromTooltip!: ElementRef<HTMLDivElement>;
  @ViewChild('toSliderTooltip') toTooltip!: ElementRef<HTMLDivElement>;
  @ViewChild('scale') scale!: ElementRef<HTMLElement>;

  COLOR_TRACK = "#E5E7EB30";
  COLOR_RANGE = "#333";
  COLOR_BARS = "#FED7AA70";
  MIN = 0;
  MAX = 100;
  STEPS = 10;

  constructor(private location: Location) { }

  ngAfterViewInit() {
    this.initializeSliders();
  }

  initializeSliders() {
    this.fillSlider();
    this.setToggleAccessible();
    this.setTooltip(this.fromSlider.nativeElement, this.fromTooltip.nativeElement);
    this.setTooltip(this.toSlider.nativeElement, this.toTooltip.nativeElement);
    this.createScale(this.MIN, this.MAX, this.STEPS);
    this.updateScaleColors(parseInt(this.fromSlider.nativeElement.value, 10), parseInt(this.toSlider.nativeElement.value, 10));

    this.fromSlider.nativeElement.oninput = () => this.controlFromSlider();
    this.toSlider.nativeElement.oninput = () => this.controlToSlider();
  }

  controlFromSlider() {
    const from = parseInt(this.fromSlider.nativeElement.value, 10);
    const to = parseInt(this.toSlider.nativeElement.value, 10);
    this.fillSlider();
    if (from > to) {
      this.fromSlider.nativeElement.value = to.toString();
    }
    this.setTooltip(this.fromSlider.nativeElement, this.fromTooltip.nativeElement);
    this.updateScaleColors(from, to);
  }

  controlToSlider() {
    const from = parseInt(this.fromSlider.nativeElement.value, 10);
    const to = parseInt(this.toSlider.nativeElement.value, 10);
    this.fillSlider();
    this.setToggleAccessible();
    if (from <= to) {
      this.toSlider.nativeElement.value = to.toString();
    } else {
      this.toSlider.nativeElement.value = from.toString();
    }
    this.setTooltip(this.toSlider.nativeElement, this.toTooltip.nativeElement);
    this.updateScaleColors(from, to);
  }

  fillSlider() {
    const from = parseInt(this.fromSlider.nativeElement.value + 13, 10);
    const to = parseInt(this.toSlider.nativeElement.value + 13, 10);
    const rangeDistance = Number(this.toSlider.nativeElement.max) - Number(this.toSlider.nativeElement.min);
    const fromPosition = from - parseInt(this.toSlider.nativeElement.min, 10);
    const toPosition = to - parseInt(this.toSlider.nativeElement.min, 10);
    this.toSlider.nativeElement.style.background = `linear-gradient(
      to right,
      ${this.COLOR_TRACK} 0%,
      ${this.COLOR_TRACK} ${(fromPosition) / (rangeDistance) * 100}%,
      ${this.COLOR_RANGE} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${this.COLOR_RANGE} ${(toPosition) / (rangeDistance) * 100}%, 
      ${this.COLOR_TRACK} ${(toPosition) / (rangeDistance) * 100}%, 
      ${this.COLOR_TRACK} 100%)`;
  }

  setToggleAccessible() {
    if (Number(this.fromSlider.nativeElement.value) <= 0) {
      this.toSlider.nativeElement.style.zIndex = '2';
    } else {
      this.toSlider.nativeElement.style.zIndex = '0';
    }
  }

  setTooltip(slider: HTMLInputElement, tooltip: HTMLDivElement) {
    const value = slider.value;
    tooltip.textContent = `$${value}`;
    const thumbPosition = (parseInt(value) - parseInt(slider.min)) / (parseInt(slider.max) - parseInt(slider.min));
    const percent = thumbPosition * 100;
    const markerWidth = 20; // Width of the marker in pixels
    const offset = (((percent - 50) / 50) * markerWidth) / 2;
    tooltip.style.left = `calc(${percent}% - ${offset}px)`;
  }

  createScale(min: number, max: number, step: number) {
    const range = max - min;
    const steps = range / step;
    for (let i = 0; i <= steps; i++) {
      const value = min + (i * step);
      const percent = (value - min) / range * 100;
      const heightPercent = (i / steps) * 100; // Height increases from 0% to 100%
      const marker: any = document.createElement('div');
      marker.classList.add('marker');
      marker.style.left = `${percent}%`;
      marker.style.height = `${heightPercent}%`; // Set height based on position
      marker.dataset.value = value.toString(); // Store value for easy access
      this.scale.nativeElement.appendChild(marker);
    }
  }

  updateScaleColors(from: number, to: number) {
    const markers: any = this.scale.nativeElement.querySelectorAll<HTMLDivElement>('.marker');
    markers.forEach((marker: any) => {
      const value = parseInt(marker.dataset.value!, 10);
      if (value >= from && value <= to) {
        marker.style.setProperty('--marker-bg', this.COLOR_BARS);
      } else {
        marker.style.setProperty('--marker-bg', this.COLOR_TRACK);
      }
    });
  }

  goBack() {
    this.location.back()
  }
}
