/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';

import {SimonGame} from './simon/SimonGame';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
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
    md-toolbar .flex {
      flex: 1 1 auto;
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
        <span class="flex"></span>
        <span class="star-widget">
          <iframe src="https://ghbtns.com/github-btn.html?user=urish&repo=ng2-simon&type=star&count=true&size=large"
                  frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
        </span>
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
