import 'angular2-universal/polyfills';
import {bootstrap} from 'angular2-iot';
import {SimonGame} from './app/simon/SimonGame';
import {Board} from 'johnny-five';
// const IO = require('raspi-io');

let board = new Board({
  // io: new IO(),
  repl: false
});

board.on('ready', function() {
  console.log('Starting Simon game...');
  bootstrap(SimonGame);
});
