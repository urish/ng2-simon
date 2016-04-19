import 'angular2-universal-preview/polyfills';
import {bootstrap} from 'angular2-iot';
import {SimonGame} from './app/simon/SimonGame';
import {Board} from 'johnny-five';
// import * as IO from 'raspi-io';

let board = new Board({
  // io: new IO()
});

board.on('ready', function() {
  console.log('Starting Simon game...');
  bootstrap(SimonGame);
});
