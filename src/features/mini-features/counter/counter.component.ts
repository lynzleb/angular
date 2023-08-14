import { Component } from '@angular/core';
import { CounterStateService } from 'src/shared/services/counter-state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  constructor(private counterState: CounterStateService) {}

  value = 0;

  onIncrementValue(): void {
    ++this.value;
    this.counterState.incrementCount();
  }

  onDecrementValue(): void {
    --this.value;
    this.counterState.decrementCount();
  }
}
