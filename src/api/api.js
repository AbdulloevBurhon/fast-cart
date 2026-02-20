import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../utils/axiosRequest'

export const getProducts = createAsyncThunk(
 'products/getProducts',
 async () => {
  try {
   const res = await api.get('/api/Product')
   return res.data
  } catch (error) {
   console.error(error)
  }
 }
)
