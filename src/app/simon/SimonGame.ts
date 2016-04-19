import {Component} from 'angular2/core';
import {SimonSegment} from './SimonSegment';
import {SimonScore} from './SimonScore';
import {AnalogSynth} from '../AnalogSynth';

const SIMON_TONES = [
  192,  /* G3 */
  262,  /* C4 */
  330,  /* E4 */
  392   /* G4 */
];

const WIN_MELODY = [
  330, /* E4 */
  392, /* G4 */
  659, /* E5 */
  523, /* C5 */
  587, /* D5 */
  784  /* G5 */
];

const LOSE_TONE = 100;

@Component({
  selector: 'simon-game',
  template: `
  <div>
    <div>
      <simon-segment color="green"  (click)="button(0)" [state]="ledStates[0]">
      </simon-segment>
      <simon-segment color="red"    (click)="button(1)" [state]="ledStates[1]">
      </simon-segment>
      <simon-segment color="yellow" (click)="button(2)" [state]="ledStates[2]">
      </simon-segment>
      <simon-segment color="blue"   (click)="button(3)" [state]="ledStates[3]">
      </simon-segment>
    </div>

     <simon-score [score]="score"></simon-score>
  </div>
  `,
  directives: [SimonScore, SimonSegment],
  providers: [AnalogSynth]
})
export class SimonGame {
  private ledStates = [false, false, false, false];
  private sequence: number[] = [];
  private sequenceIndex: number;
  private playerTurn: boolean;
  private score: number = 0;

  constructor(private synth: AnalogSynth) {
    this.nextTurn();
  }

  nextTurn() {
    this.sequence.push(Math.floor(Math.random() * 4));
    this.sequenceIndex = 0;
    this.playSequence();
  }

  blink(ledIndex) {
    return new Promise(resolve => {
      this.ledStates[ledIndex] = true;
      this.synth.playTone(SIMON_TONES[ledIndex], 300);
      setTimeout(() => {
        this.ledStates[ledIndex] = false;
        resolve();
      }, 300);
    });
  }

  playSequence() {
    if (this.sequenceIndex < this.sequence.length) {
      const ledIndex = this.sequence[this.sequenceIndex];
      this.blink(ledIndex).then(() => {
        this.sequenceIndex++;
        setTimeout(() => this.playSequence(), 50);
      });
    } else {
      this.playerTurn = true;
      this.sequenceIndex = 0;
    }
  }

  button(idx) {
    if (this.playerTurn) {
      this.playerTurn = false;
      this.blink(idx).then(() => {
        if (idx !== this.sequence[this.sequenceIndex]) {
          this.gameOver();
          return;
        }
        this.sequenceIndex++;
        if (this.sequenceIndex === this.sequence.length) {
          this.playerTurn = false;
          this.nextRound();
        } else {
          this.playerTurn = true;
        }
      });
    }
  }

  nextRound() {
    this.score++;
    let delay = 0;
    for (let note of WIN_MELODY) {
      this.synth.playTone(note, 150 + delay);
      delay += 50;
    }
    setTimeout(() => this.nextTurn(), 500);
  }

  gameOver() {
    console.log('Game Over!');
    this.synth.playTone(LOSE_TONE, 500);
    this.sequence = [];
    this.score = 0;
    setTimeout(() => this.nextTurn(), 1300);
  }
}
