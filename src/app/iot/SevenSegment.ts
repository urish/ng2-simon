import {Component, Input, OnChanges} from '@angular/core';
const {Board} = require('johnny-five');

const SEVEN_SEGMENT_ADDRESS = 0x71;

@Component({
  'selector': 'iot-sevensegment',
  'template': ''
})
export class SevenSegment implements OnChanges {
  @Input() value: string | number = null;
  private io; // initialized by Board.Component

  constructor() {
    Board.Component.call(this, {});
    this.io.i2cConfig({});
  }

  ngOnChanges() {
    if (this.value !== null) {
      const chars = this.value.toString().substr(0, 4).split('').map(letter => letter.charCodeAt(0));
      this.io.i2cWrite(SEVEN_SEGMENT_ADDRESS, [0x76, ...chars]);
    }
  }
}
