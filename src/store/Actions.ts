const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});

type CounterAction = ReturnType<typeof increment> | ReturnType<typeof decrement>;

export type { CounterAction };
