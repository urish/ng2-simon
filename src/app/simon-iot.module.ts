import { NgModule } from '@angular/core';
import { SevenSegmentComponent } from './iot/seven-segment.component';
import { IotModule } from 'angular2-iot';

import { SimonModule } from './simon';
import { SimonGameComponent } from './simon/game.component';
import { SynthService } from './shared/synth.service';
import { LinuxSynthService } from './iot/linux-synth.service';

@NgModule({
  imports: [
    IotModule,
    SimonModule
  ],
  declarations: [
    SevenSegmentComponent
  ],
  providers: [
    { provide: SynthService, useClass: LinuxSynthService }
  ],
  exports: [
    SevenSegmentComponent
  ],
  bootstrap: [
    SimonGameComponent
  ]
})
export class SimonIotModule { }
