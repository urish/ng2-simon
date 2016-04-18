import {Component} from 'angular2/core';
import {SimonSegment} from './SimonSegment';
import {SimonScore} from './SimonScore';

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
  directives: [SimonScore, SimonSegment]
})
export class SimonGame {
  private ledStates = [false, false, false, false];
  private sequence: number[] = [];
  private sequenceIndex: number;
  private playerTurn: boolean;
  private score: number = 0;

  constructor() {
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
          this.score++;
          setTimeout(() => this.nextTurn(), 500);
        } else {
          this.playerTurn = true;
        }
      });
    }
  }

  gameOver() {
    console.log('Game Over!');
    this.sequence = [];
    this.score = 0;
    setTimeout(() => this.nextTurn(), 500);
  }
}
