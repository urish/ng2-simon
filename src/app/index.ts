import {AnalogSynth} from './AnalogSynth';
import {WebAnalogSynth} from './web/WebAnalogSynth';
import {FirebasePrefix} from './model/tokens';

export * from './app.module';

export const APP_PROVIDERS = [
  {provide: AnalogSynth, useClass: WebAnalogSynth},
  {provide: FirebasePrefix, useValue: '/web'}
];
