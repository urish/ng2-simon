import { Injectable } from '@angular/core';
import { SynthService } from '../shared/synth.service';

@Injectable()
export class WebSynthService extends SynthService {
  private context: AudioContext = null;

  constructor() {
    super();
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

  public playSound(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const soundFile = new Audio(path);
      soundFile.play();
      soundFile.onended = resolve;
      soundFile.onerror = reject;
    });
  }
}
