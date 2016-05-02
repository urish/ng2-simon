import 'angular2-universal/polyfills';
import {provide, PLATFORM_DIRECTIVES} from 'angular2/core';
import {bootstrap} from 'angular2-iot';

import {AnalogSynth} from './app/AnalogSynth';
import {LinuxAnalogSynth} from './app/iot/LinuxAnalogSynth';
import {SevenSegment} from './app/iot/SevenSegment';

import {SimonGame} from './app/simon/SimonGame';

import {Board} from 'johnny-five';
// const IO = require('raspi-io');

let board = new Board({
  // io: new IO(),
  repl: false
});

board.on('ready', function () {
  console.log('Starting Simon game...');
  bootstrap(SimonGame, [
    provide(AnalogSynth, { useClass: LinuxAnalogSynth }),
    provide(PLATFORM_DIRECTIVES, { useValue: SevenSegment, multi: true }),
  ]);
});
