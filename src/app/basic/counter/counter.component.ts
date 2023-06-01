import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})

export class CounterComponent {
  counter: number;

  constructor() {
    this.counter = 10;
  }

  incrementBy(n: number) {
    if (!this.counter && n < 0) return;
    this.counter += n;
  }
}
