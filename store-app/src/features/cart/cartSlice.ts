import { createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

export interface Item {
  id: number,
  image: string,
  name: string,
  price: number,
  quantity: number
};

export interface CartState {
  items: Item[],
  totalQuantity: number,
  totalAmount: number
};

const storedCart = localStorage.getItem("cart");

const initialState: CartState = {
  items: storedCart
    ? JSON.parse(storedCart)
    : [],
  totalQuantity: 0,
  totalAmount: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {
    //добавление товара в корзину
    addToCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      if (index >= 0) {
        state.items[index].quantity++
      } else {
        state.items.push({...action.payload, quantity: 1})
      }
      localStorage.setItem("cart", JSON.stringify(state.items))
    },
    //удаление товара из корзины
    removeFromCart: (state, action) => {
      const updateCart = state.items.filter((item) => item.id !== action.payload)
      state.items = updateCart 
      localStorage.setItem("cart", JSON.stringify(state.items))
    },
    //высчитывание суммы и количества товаров в корзине
    getTotal: (state) => {
      const totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0)
      const totalAmount = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

      state.totalQuantity = totalQuantity
      state.totalAmount = totalAmount
    }
  }
});

export const { addToCart, removeFromCart, getTotal } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
