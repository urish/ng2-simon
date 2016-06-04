import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'simon-blink',
  template: `
    <div [style.visibility]="visible?'visible':'hidden'">
      <ng-content></ng-content>
    </div>
  `
})
export class SimonBlink implements OnDestroy {
  private visible: boolean = true;
  private timer: NodeJS.Timer;

  constructor() {
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.visible = !this.visible;
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
