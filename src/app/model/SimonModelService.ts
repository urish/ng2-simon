import {Injectable} from 'angular2/core';

import * as Firebase from 'firebase';

@Injectable()
export class SimonModelService {
  /**
   * A reference to Firebase, where we will store the game state and score
   */
  private fbRef: Firebase;

  constructor() {
    this.fbRef = new Firebase('https://ngconf-simon.firebaseio.com');
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
