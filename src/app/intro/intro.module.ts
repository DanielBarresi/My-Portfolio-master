import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';


@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    CommonModule,
    IntroRoutingModule,
    ReactiveFormsModule
  ]
})
export class IntroModule { }
