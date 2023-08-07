import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, map } from 'rxjs';
import { CounterState } from 'src/store/counter.state';

@Injectable()
export class StateDisplayService {
    @Select(CounterState.counter) counter$!: Observable<number>;

    constructor() {}

    displayString$ = this.counter$.pipe(
        map((counter) => {
            return `Value is ${counter}`;
        }),
    );
}
