import {Injectable} from 'angular2/core';
import {exec} from 'child_process';
const player = require('play-sound')({ player: 'mpg123' });

@Injectable()
export class AnalogSynth {

  constructor() {
  }

  public playTone(frequency: number, durationMs: number) {
    exec(`play -n -c1 synth ${durationMs / 1000.} sawtooth ${frequency}`);
  }

  public playSound(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      player.play('src/' + path, err => err ? reject(err) : resolve());
    });
  }
}
