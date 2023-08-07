import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
// import { patch } from '@ngxs/store/operators';

export class UpdateCounter {
  static readonly type = '[Counter] UpdateCounter';
  constructor(public value: number) {}
}

export class IncrementCounter {
  static readonly type = '[Counter] IncrementCounter';
  // constructor() {}
}

export class DecrementCounter {
  static readonly type = '[Counter] DecrementCounter';
  // constructor() {}
}

export interface CounterStateModel {
  counter: number;
}

@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    counter: 0,
  },
})
@Injectable()
export class CounterState {
  @Selector()
  static counter(state: CounterStateModel) {
    return state.counter;
  }

  @Action(UpdateCounter)
  updateCounter(ctx: StateContext<CounterStateModel>, action: UpdateCounter) {
    // #1
    const state = ctx.getState();
    ctx.setState({
      ...state,
      counter: action.value,
    });

    // #2
    // ctx.patchState({
    //   counter: action.value
    // });

    // #3
    // ctx.setState(
    //     patch<AppStateModel>({
    //         counter: action.value,
    //     }),
    // );

    // #4
    // ctx.setState(produce((draft) => {
    //   draft.zebraFood.push(action.zebraToFeed);
    // }));

    // #5 direct modification ??
    // let state = ctx.getState();
    // state = { counter: 100 };
  }

  @Action(IncrementCounter)
  incrementCounter(ctx: StateContext<CounterStateModel>) {
    ctx.patchState({
      counter: ++ctx.getState().counter,
    });
  }

  @Action(DecrementCounter)
  decrementCounter(ctx: StateContext<CounterStateModel>) {
    ctx.patchState({
      counter: --ctx.getState().counter,
    });
  }
}
