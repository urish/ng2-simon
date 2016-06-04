import {Injectable} from '@angular/core';
import {exec} from 'child_process';
import {AnalogSynth} from '../AnalogSynth';
const player = require('play-sound')({ player: 'mpg123' });

@Injectable()
export class LinuxAnalogSynth extends AnalogSynth {

  public playTone(frequency: number, durationMs: number) {
    exec(`play -n -c1 synth ${durationMs / 1000.} sawtooth ${frequency}`);
  }

  public playSound(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      player.play('src/' + path, err => err ? reject(err) : resolve());
    });
  }
}
