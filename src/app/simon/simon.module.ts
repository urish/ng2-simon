import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlinkComponent } from './blink.component';
import { SimonGameComponent } from './game.component';
import { SimonScoreComponent } from './score.component';
import { SimonSegmentComponent } from './segment.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BlinkComponent,
    SimonGameComponent,
    SimonScoreComponent,
    SimonSegmentComponent
  ],
  imports: [CommonModule],
  exports: [SimonGameComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimonModule { }
