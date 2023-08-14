import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CounterStateService } from 'src/shared/services/counter-state.service';

@Injectable()
export class StateDisplayService {
  constructor(private counterState: CounterStateService) {}

  getCount(): number {
    return this.counterState.getCount();
  }
}
