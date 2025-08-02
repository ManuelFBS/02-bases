import { Component, signal } from '@angular/core';

@Component({
      templateUrl: './counter-page.component.html',
      styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
      counterSignal = signal(0);

      increaseBy(value: number) {
            this.counterSignal.update((current) => current + value);
      }

      decreaseBy(value: number) {
            this.counterSignal.update((current) => current - value);
      }

      resetCounter() {
            this.counterSignal.set(0);
      }
}
