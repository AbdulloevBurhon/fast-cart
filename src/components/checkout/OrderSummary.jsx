import { useNavigate } from 'react-router-dom'

function OrderSummary() {
 const navigate = useNavigate()

 const handlePlaceOrder = () => {
  // потом тут будет логика оформления заказа
  navigate('/account/orders')
 }

 return (
  <div className="border p-6 rounded shadow-sm">
   <h2 className="text-xl font-bold mb-4">Order Summary</h2>

   <div className="flex justify-between mb-2">
    <span>Subtotal:</span>
    <span>$1750</span>
   </div>

   <div className="flex justify-between mb-2">
    <span>Shipping:</span>
    <span>Free</span>
   </div>

   <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
    <span>Total:</span>
    <span>$1750</span>
   </div>

   <button
    onClick={handlePlaceOrder}
    className="w-full bg-red-500 text-white py-3 mt-6 rounded"
   >
    Place Order
   </button>
  </div>
 )
}

export default OrderSummary
