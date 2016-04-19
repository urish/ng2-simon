import {Injectable} from 'angular2/core';
const Piezo = require('johnny-five').Piezo;

@Injectable()
export class AnalogSynth {
  private piezo = new Piezo({ pin: 'GPIO18' });

  constructor() {
  }

  public playTone(frequency: number, durationMs: number) {
    this.piezo.frequency(frequency, durationMs);
  }
}
