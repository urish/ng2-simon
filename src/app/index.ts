import {provide} from 'angular2/core';
import {AnalogSynth} from './AnalogSynth';
import {WebAnalogSynth} from './web/WebAnalogSynth';

export * from './app.component';

export const APP_PROVIDERS = [
  provide(AnalogSynth, {useClass: WebAnalogSynth})
];
