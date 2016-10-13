import {Injectable} from '@angular/core';

@Injectable()
export abstract class SynthService {
  abstract playTone(frequency: number, durationMs: number);
  abstract playSound(path: string): Promise<any>;
}
