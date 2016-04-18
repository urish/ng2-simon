import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'simon-segment',
  template: `
    <button [style.borderColor]="color" [style.background]="state?color:''"
            [class.active]="state" (click)="click.emit()">
    </button>
  `,
  styles: [`
    button {
      display: inline-block;
      height: 100px;
      width: 100px;
      background: transparent;
      border: black 5px solid;
      border-radius: 50px;
    }

    button:hover {
      border-color: white;
      cursor: pointer;
    }
  `
  ]
})
export class SimonSegment {
  @Input() color: string;
  @Input() state: boolean = false;
  @Output() click = new EventEmitter();
}
