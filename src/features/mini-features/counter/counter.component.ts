import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateCounter } from 'src/store/app.state';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})

export class CounterComponent {
  constructor(private store: Store) {}

  value = 0;

  onIncrementValue(): void {
      ++this.value;
      this.updateCounterInStore(this.value);
  }

  onDecrementValue(): void {
    --this.value;
    this.updateCounterInStore(this.value);
  }

  private updateCounterInStore(value: number) {
    this.store.dispatch(new UpdateCounter(value));
  }
}
