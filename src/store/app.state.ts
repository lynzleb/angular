import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';

export class UpdateCounter {
  static readonly type = '[Counter] UpdateCounter';
  constructor(public value: number) {}
}

export interface AppStateModel {
  counter: number;
}

@State<AppStateModel>({
  name: 'counter',
  defaults: {
    counter: 0
  }
})
@Injectable()
export class AppState {
  @Action(UpdateCounter)
  feedAnimals(ctx: StateContext<AppStateModel>, action: UpdateCounter) {
    // #1
    // const state = ctx.getState();
    // ctx.setState({
    //   ...state,
    //   counter: action.value
    // });

    // #2
    // ctx.patchState({
    //   counter: action.value
    // });

    // #3
    ctx.setState(
      patch<AppStateModel>({
        counter: action.value
      })
    );

    // #4
    // ctx.setState(produce((draft) => {
    //   draft.zebraFood.push(action.zebraToFeed);
    // }));
  }
}
