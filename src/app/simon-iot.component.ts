import {Component} from '@angular/core';

import {SimonGame} from './simon/SimonGame';

@Component({
  template: `<simon-game></simon-game>`,
  directives: [SimonGame]
})
export class SimonIotApp {
}
