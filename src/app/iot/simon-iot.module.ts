import { NgModule } from '@angular/core';
import { SevenSegmentComponent } from './seven-segment.component';
import { IotModule } from 'angular2-iot';

@NgModule({
  imports: [
    IotModule
  ],
  declarations: [
    SevenSegmentComponent
  ],
  exports: [
    SevenSegmentComponent
  ]
})
export class SimonIotModule { }
