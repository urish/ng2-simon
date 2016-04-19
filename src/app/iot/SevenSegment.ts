import {Component, Input, OnChanges} from 'angular2/core';
import {exec} from 'child_process';

@Component({
  'selector': 'iot-sevensegment',
  'template': ''
})
export class SevenSegment implements OnChanges {
  @Input() value: string | number = null;

  ngOnChanges() {
    if (this.value !== null) {
      exec(`i2cset -y 1 0x71 0x76`);
      for (let letter of this.value.toString().substr(0, 4)) {
        exec(`i2cset -y 1 0x71 ${letter}`);
      }
    }
  }
}
