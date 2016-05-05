import {Injectable, Inject} from 'angular2/core';
import {FirebasePrefix} from './tokens';

import * as Firebase from 'firebase';

@Injectable()
export class SimonModelService {
  /**
   * A reference to Firebase, where we will store the game state and score
   */
  private fbRef: Firebase;

  constructor( @Inject(FirebasePrefix) prefix: string) {
    this.fbRef = new Firebase('https://ngconf-simon.firebaseio.com').child(prefix);
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
