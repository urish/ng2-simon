import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlinkComponent } from './blink.component';
import { SimonGameComponent } from './game.component';
import { SimonScoreComponent } from './score.component';
import { SimonSegmentComponent } from './segment.component';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    BlinkComponent,
    SimonGameComponent,
    SimonScoreComponent,
    SimonSegmentComponent
  ],
  imports: [CommonModule, ...environment.iotModules],
  exports: [SimonGameComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimonModule { }
