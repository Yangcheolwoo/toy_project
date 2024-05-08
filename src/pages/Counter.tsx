import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/RootReducer.ts';
import { decrement, increment } from '@/store/Actions';
import { Flex } from '@/components/flex/Flex.tsx';

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
    <Flex height={'400px'} flexDirection={'column'}>
      <Flex>{count}</Flex>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrese}>-1</button>
    </Flex>
  );
};
