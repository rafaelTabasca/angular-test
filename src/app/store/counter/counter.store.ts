import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';


const initialState = {
 counter: 0
};

export const CounterStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    increment() {
      patchState(store, (state) => ({ counter: state.counter + 1 }));
    },
    decrement(){
      patchState(store, (state) => ({ counter: state.counter - 1 }));
    },
    reset() {
      patchState(store, (state) => ({ counter: 0 }));
    }
  }))
);