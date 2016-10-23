import 'angular2-universal-polyfills';

import { bootstrap } from 'angular2-iot';
const FirebaseTokenGenerator = require('firebase-token-generator');

import { FirebasePrefix, FirebaseAuthToken } from './app/model/tokens';
import { SimonIotModule } from './app/simon-iot.module';

const {Board} = require('johnny-five');
const IO = require('raspi-io');

let firebaseToken = null;
if (process.env.FIREBASE_SECRET) {
  const tokenGenerator = new FirebaseTokenGenerator(process.env.FIREBASE_SECRET);
  firebaseToken = tokenGenerator.createToken({ uid: 'iot' }, { admin: true });
}

let board = new Board({
  io: new IO(),
  repl: false
});

board.on('ready', function () {
  console.log('Starting Simon game...');
  bootstrap(SimonIotModule, [
    { provide: FirebasePrefix, useValue: '/iot' },
    { provide: FirebaseAuthToken, useValue: firebaseToken }
  ]);
});
