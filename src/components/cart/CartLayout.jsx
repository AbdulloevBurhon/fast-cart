import { useSelector } from 'react-redux'
import CartPage from './CartPage'

export default function CartLayout() {
 const items = useSelector((state) => state.cart.items)

 const subtotal = items.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
 )

 return (
  <CartPage
   items={items}
   subtotal={subtotal}
   updateQty={() => {}}
   removeItem={() => {}}
   removeAll={() => {}}
   coupon=""
   setCoupon={() => {}}
  />
 )
}
