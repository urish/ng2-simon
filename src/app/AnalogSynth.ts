import {Injectable} from 'angular2/core';

@Injectable()
export abstract class AnalogSynth {
  abstract playTone(frequency: number, durationMs: number);
  abstract playSound(path: string): Promise<any>;
}
