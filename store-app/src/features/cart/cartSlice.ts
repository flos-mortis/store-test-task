import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

interface Item {
  id: number,
  image: string,
  name: string,
  price: number
}

export interface CartState {
  items: Item[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {
    add: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload)
    },
  },
});

export const { add } = cartSlice.actions;

export const selectItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
