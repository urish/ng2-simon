import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlinkComponent } from './blink.component';
import { SimonGameComponent } from './game.component';
import { SimonScoreComponent } from './score.component';
import { SimonSegmentComponent } from './segment.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    BlinkComponent,
    SimonGameComponent,
    SimonScoreComponent,
    SimonSegmentComponent
  ],
  imports: [BrowserModule],
  exports: [SimonGameComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimonModule { }
