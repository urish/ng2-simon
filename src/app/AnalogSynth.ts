import {Injectable} from 'angular2/core';

@Injectable()
export class AnalogSynth {
  private context: AudioContext = null;

  constructor() {
    if (typeof AudioContext !== 'undefined') {
      this.context = new AudioContext();
    } else {
      console.log('Warning: Web Audio API is not available');
    }
  }

  public playTone(frequency: number, durationMs: number) {
    if (this.context) {
      const osc = this.context.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = frequency;
      osc.connect(this.context.destination);
      osc.start(this.context.currentTime);
      osc.stop(this.context.currentTime + durationMs / 1000.);
    }
  }
}
