import { CounterAction } from '@/store/Actions.ts';

type InitState = {
  number: number;
};

const initState: InitState = {
  number: 0,
};
export default function CounterReducer(state: InitState = initState, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        number: state.number + 1,
      };
    case 'DECREMENT':
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
