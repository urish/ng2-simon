import {Component} from 'angular2/core';
import {SimonSegment} from './SimonSegment';
import {SimonScore} from './SimonScore';
import {SimonBlink} from './SimonBlink';
import {AnalogSynth} from '../AnalogSynth';
import * as Firebase from 'firebase';

const SIMON_TONES = [
  192,  /* G3 */
  262,  /* C4 */
  330,  /* E4 */
  392   /* G4 */
];

const MAX_TONE_DURATION: number = 300;
const MIN_TONE_DURATION: number = 100;
const TONE_DURATION_DELTA: number = 10;

@Component({
  selector: 'simon-game',
  template: `
  <div>
    <simon-score [score]="playing ? score : 'PLAY'"></simon-score>

    <div class="simon-row">
      <simon-segment color="green"  (click)="button(0)" [state]="ledStates[0]">
      </simon-segment>
      <simon-segment color="red"    (click)="button(1)" [state]="ledStates[1]">
      </simon-segment>
    </div>
    <div class="simon-row">
      <simon-segment color="blue"   (click)="button(3)" [state]="ledStates[3]">
      </simon-segment>
      <simon-segment color="yellow" (click)="button(2)" [state]="ledStates[2]">
      </simon-segment>
    </div>
    <simon-blink *ngIf="!playing">
      Click any color to start...
    </simon-blink>
  </div>
  `,
  styles: [`
    .simon-row {
      margin-bottom: 1pc;
    }

    simon-segment {
      margin-right: 0.5pc;
    }

    simon-blink {
      margin-top: 3pc;
      font-family: monospace;
    }
  `],
  directives: [SimonScore, SimonSegment, SimonBlink]
})
export class SimonGame {
  private ledStates = [false, false, false, false];
  private sequence: number[] = [];
  private sequenceIndex: number;
  private playerTurn: boolean;
  private playing: boolean = false;
  private score: number = 0;
  private gameStartTime: Date;
  private fbRef: Firebase;


  constructor(private synth: AnalogSynth) {
    this.fbRef = new Firebase('https://ngconf-simon.firebaseio.com');
  }

  startGame() {
    this.gameStartTime = new Date();
    this.nextTurn();
  }

  updateFirebase() {
    this.fbRef.child('gameState').set({
      playing: this.playing,
      score: this.score
    });
  }

  nextTurn() {
    this.sequence.push(Math.floor(Math.random() * 4));
    this.sequenceIndex = 0;
    this.playSequence();
    this.updateFirebase();
  }

  blink(ledIndex) {
    return new Promise(resolve => {
      this.ledStates[ledIndex] = true;
      const duration = Math.max(MAX_TONE_DURATION - this.score * TONE_DURATION_DELTA, MIN_TONE_DURATION);
      this.synth.playTone(SIMON_TONES[ledIndex], duration);
      setTimeout(() => {
        this.ledStates[ledIndex] = false;
        resolve();
      }, duration);
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
    if (!this.playing) {
      this.playing = true;
      setTimeout(() => this.startGame(), 300);
      return;
    }
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
    this.synth.playSound('assets/sound/levelup.mp3').then(() => {
      setTimeout(() => this.nextTurn(), 200);
    });
  }

  gameOver() {
    console.log('Game Over!');
    this.fbRef.child('games').push({
      date: Firebase.ServerValue.TIMESTAMP,
      score: this.score,
      playingTime: (new Date().getTime() - this.gameStartTime.getTime()) / 1000.0
    });
    this.synth.playSound('assets/sound/gameover.mp3').then(() => {
      this.sequence = [];
      this.score = 0;
      this.playing = false;
      this.updateFirebase();
    });
  }
}
