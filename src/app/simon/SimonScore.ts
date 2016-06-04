import {Component, Input} from '@angular/core';

@Component({
  selector: 'simon-score',
  template: `
    <div>
      <iot-sevensegment [value]="zeroPad(score, 4)"></iot-sevensegment>

      <span class="container">
        8888
        <span class="background">8888</span>
        <span class="content">{{zeroPad(score, 4)}}</span>
      </span>
    </div>
  `,
  styles: [`
    @font-face {
      font-family: "D7MI";
      src: url("./assets/fonts/DSEG7Modern-Italic.woff") format('woff');
    }

    div {
      position: relative;
      margin: 2pc;
      font-size: 50px;
      font-family: D7MI;
    }

    span.container {
      position: relative;
      color: transparent;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
    }

    span.background {
      color: #0d1419;
    }

    span.content {
      color: #517b96;
    }
  `
  ]
})
export class SimonScore {
  @Input() score: number;

  zeroPad(value: number, padding: number) {
    let result = value.toString();
    while (result.length < padding) {
      result = '0' + result;
    }
    return result;
  }
}
