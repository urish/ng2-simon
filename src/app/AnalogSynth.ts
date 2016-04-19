import {Injectable} from 'angular2/core';

@Injectable()
export class AnalogSynth {
  private context = new AudioContext();

  public playTone(frequency: number, durationMs: number) {
      const osc = this.context.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = frequency;
      osc.connect(this.context.destination);
      osc.start(this.context.currentTime);
      osc.stop(this.context.currentTime + durationMs / 1000.);
  }
}
