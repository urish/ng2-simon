import { NgModule } from '@angular/core';
import { SevenSegmentComponent } from './seven-segment.component';
import { IotModule } from 'angular2-iot';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    IotModule,
    AppModule
  ],
  declarations: [
    SevenSegmentComponent
  ],
  exports: [
    SevenSegmentComponent
  ]
})
export class SimonIotModule { }
