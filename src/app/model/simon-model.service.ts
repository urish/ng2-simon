import { Injectable, Inject, Optional } from '@angular/core';
import { FirebasePrefix, FirebaseAuthToken } from './tokens';

import * as Firebase from 'firebase';

export interface ISimonGameInfo {
  playing: boolean;
  score: number;
  gameColor: string;
  lastColor: string;
  sequenceIndex: number;
  gameOver: boolean;
}

export interface ISimonScoreInfo {
  date?: any;
  score: number;
  color: string;
  playingTime: number;
}

@Injectable()
export class SimonModelService {
  /**
   * A reference to Firebase, where we will store the game state and score
   */
  private fbRef: Firebase;

  constructor( @Inject(FirebasePrefix) prefix: string, @Inject(FirebaseAuthToken) @Optional() token: string) {
    this.fbRef = new Firebase('https://ngconf-simon.firebaseio.com').child(prefix);
    if (token) {
      this.fbRef.authWithCustomToken(token, (err, authData) => { });
    }
  }

  updateGame(gameInfo: ISimonGameInfo) {
    this.fbRef.child('gameState').set(gameInfo);
  }

  publishScore(score: ISimonScoreInfo) {
    this.fbRef.child('games').push(Object.assign({
      date: Firebase.ServerValue.TIMESTAMP
    }, score));
  }
}
