import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  items: [
   {
    id: 1,
    name: 'Samsung Galaxy S24',
    price: 7200,
    quantity: 1
   }
  ]
 },
 reducers: {}
})

export default cartSlice.reducer
