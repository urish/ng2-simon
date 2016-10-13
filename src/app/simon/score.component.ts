import {Component, Input} from '@angular/core';

@Component({
  selector: 'simon-score',
  templateUrl: 'score.component.html',
  styleUrls: ['score.component.css']
})
export class SimonScoreComponent {
  @Input() score: number;

  zeroPad(value: number, padding: number) {
    let result = value.toString();
    while (result.length < padding) {
      result = '0' + result;
    }
    return result;
  }
}
