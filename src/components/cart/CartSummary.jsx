function CartSummary({ subtotal }) {
 return (
  <div className="border border-gray-200 rounded-lg p-6">
   <h2 className="font-semibold text-base mb-4">Cart Total</h2>

   <div className="flex justify-between py-3 border-b">
    <span>Subtotal:</span>
    <span>${subtotal}</span>
   </div>

   <div className="flex justify-between py-3 border-b">
    <span>Shipping:</span>
    <span className="text-green-600">Free</span>
   </div>

   <div className="flex justify-between py-3 font-bold">
    <span>Total:</span>
    <span>${subtotal}</span>
   </div>

   <button className="mt-4 w-full py-3 bg-[#DB4444] text-white rounded">
    Proceed to checkout
   </button>
  </div>
 )
}

export default CartSummary
