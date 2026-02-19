import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import CartPage from './CartPage'

export default function CartLayout() {
 const { cart, updateQty, removeItem, removeAll, subtotal } = useCart()
 const [coupon, setCoupon] = useState('')

 return (
  <CartPage
   items={cart}
   updateQty={updateQty}
   removeItem={removeItem}
   removeAll={removeAll}
   subtotal={subtotal}
   coupon={coupon}
   setCoupon={setCoupon}
  />
 )
}
