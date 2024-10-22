import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OnboardingComponent } from './onboarding.component';
import { HttpClientModule } from '@angular/common/http';
import { WindowRefService } from '../windowref.service';


@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule
  ],
  providers : [WindowRefService]
})
export class OnboardingModule { }
