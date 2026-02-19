function CartCoupon({ coupon, setCoupon }) {
 return (
  <div className="flex gap-3">
   <input
    type="text"
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
    placeholder="Coupon Code"
    className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm"
   />

   <button
    className="px-6 py-2 border rounded text-sm"
    style={{ borderColor: '#DB4444', color: '#DB4444' }}
   >
    Apply
   </button>
  </div>
 )
}

export default CartCoupon
