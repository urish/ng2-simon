import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'simon-segment',
  template: `
    <iot-led [pin]="LEDS[color]" [state]="state"></iot-led>
    <iot-button [pin]="BUTTONS[color]" (click)="click.emit()"></iot-button>
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

    button:not(.active) {
      background: transparent !important;
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

  // The following two members define mapping between
  // button/LED colors and Raspberry Pi pins.
  // They are ignored in the web version of the game.
  private LEDS = {
    green: 'GPIO6',
    yellow: 'GPIO19',
    red: 'GPIO12',
    blue: 'GPIO20'
  };

  private BUTTONS = {
    green: 'GPIO13',
    yellow: 'GPIO26',
    red: 'GPIO16',
    blue: 'GPIO21'
  };
}
