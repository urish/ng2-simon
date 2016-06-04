import {Injectable} from '@angular/core';

@Injectable()
export abstract class AnalogSynth {
  abstract playTone(frequency: number, durationMs: number);
  abstract playSound(path: string): Promise<any>;
}
