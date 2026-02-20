import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../reducercs/productsSlice'
export const store = configureStore({
 reducer: {
  products: productsReducer
 }
})
