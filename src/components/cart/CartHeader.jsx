function CartHeader() {
 return (
  <div
   className="grid items-center px-6 py-4 rounded mb-3"
   style={{
    gridTemplateColumns: '2.5fr 1fr 1fr 1fr 36px',
    boxShadow: '0 1px 10px rgba(0,0,0,0.08)'
   }}
  >
   <span className="font-medium text-sm text-gray-700">Product</span>
   <span className="font-medium text-sm text-gray-700">Price</span>
   <span className="font-medium text-sm text-gray-700">Quantity</span>
   <span className="font-medium text-sm text-gray-700">Subtotal</span>
   <span />
  </div>
 )
}

export default CartHeader
