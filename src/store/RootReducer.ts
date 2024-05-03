import { combineReducers } from 'redux';
import CounterReducer from '@/store/CounterReducer.ts';

const rootReducer = combineReducers({
  CounterReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
