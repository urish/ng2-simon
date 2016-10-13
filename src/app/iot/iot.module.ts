import { NgModule } from '@angular/core';
import { SevenSegmentComponent } from './seven-segment.component.ts';
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
export class IotModule { }
