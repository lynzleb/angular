import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterStateService {
  private value: number = 0;

  incrementCount() {
    this.value++;
  }

  decrementCount() {
    this.value--;
  }

  getCount(): number {
    return this.value;
  }
}
