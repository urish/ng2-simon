import { NgModule } from '@angular/core';
import { IotModule } from 'angular2-iot';

import { SimonModule } from './simon';
import { SimonGameComponent } from './simon/game.component';
import { SynthService } from './shared/synth.service';
import { LinuxSynthService } from './iot/linux-synth.service';
import { SimonIotComponent } from './simon-iot.component';

@NgModule({
  imports: [
    IotModule,
    SimonModule
  ],
  declarations: [
    SimonIotComponent
  ],
  providers: [
    { provide: SynthService, useClass: LinuxSynthService }
  ],
  bootstrap: [
    SimonIotComponent
  ]
})
export class SimonIotModule { }
