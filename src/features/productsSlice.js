import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 items: [
  {
   id: 1,
   name: 'Samsung Galaxy S24',
   image: 'https://via.placeholder.com/300',
   price: 7200,
   oldPrice: 8000,
   rating: 4,
   reviewsCount: 12,
   category: 'phones'
  }
 ],
 loading: false,
 error: null
}

const productsSlice = createSlice({
 name: 'products',
 initialState,
 reducers: {
  setProducts(state, action) {
   state.items = action.payload
  }
 }
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
