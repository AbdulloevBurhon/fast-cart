import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../api/api'

const productsSlice = createSlice({
 name: 'products',
 initialState: {
  products: [],
  status: false,
  error: null
 },
 extraReducers: (builder) => {
  builder
   .addCase(getProducts.pending, (state) => {
    ;((state.status = true), (state.error = null))
   })
   .addCase(getProducts.fulfilled, (state, action) => {
    state.status = false
    state.products = action.payload
   })
   .addCase(getProducts.rejected, (state) => {
    ;((state.error = 'XATO'), (state.status = false))
   })
 }
})
export default productsSlice.reducer
