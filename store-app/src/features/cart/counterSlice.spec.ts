import counterReducer, {
  CartState,
  add
} from './cartSlice';

describe('counter reducer', () => {
  const initialState: CartState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });
});
