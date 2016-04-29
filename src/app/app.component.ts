/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';

import {SimonGame} from './simon/SimonGame';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [SimonGame],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    body {
      margin: 0;
      background: black;
      color: #ddd;
      font-size: 24px;
      text-align: center;
    }
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: lightgray;
    }
    simon-game {
      display: block;
      margin-top: 40px;
    }
  `],
  template: `
    <header>
      <md-toolbar color="primary">
        <span>Angular2 Simon</span>
      </md-toolbar>
    </header>

    <main>
      <simon-game></simon-game>
    </main>

    <footer>
    </footer>
  `
})
export class App {
}
