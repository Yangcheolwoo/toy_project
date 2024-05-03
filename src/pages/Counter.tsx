import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/RootReducer.ts';
import { decrement, increment } from '@/store/Actions';

export const Counter = () => {
  const count = useSelector((state: RootState) => state.CounterReducer.number);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increment());
  };
  const onDecrese = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrese}>-1</button>
    </div>
  );
};
