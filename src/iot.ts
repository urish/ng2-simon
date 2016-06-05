import 'angular2-universal/polyfills';
import {provide, PLATFORM_DIRECTIVES} from '@angular/core';
import {bootstrap} from 'angular2-iot';

import * as Firebase from 'firebase';
const FirebaseTokenGenerator = require('firebase-token-generator');

import {AnalogSynth} from './app/AnalogSynth';
import {LinuxAnalogSynth} from './app/iot/LinuxAnalogSynth';
import {SevenSegment} from './app/iot/SevenSegment';
import {FirebasePrefix, FirebaseAuthToken} from './app/model/tokens';

import {SimonIotApp} from './app/simon-iot.component';

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
  bootstrap(SimonIotApp, [
    provide(AnalogSynth, { useClass: LinuxAnalogSynth }),
    provide(PLATFORM_DIRECTIVES, { useValue: SevenSegment, multi: true }),
    provide(FirebasePrefix, { useValue: '/iot' }),
    provide(FirebaseAuthToken, { useValue: firebaseToken })
  ]);
});
