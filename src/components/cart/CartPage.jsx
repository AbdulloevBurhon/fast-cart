import CartActionsDesktop from './CartActionsDesktop'
import CartActionsMobile from './CartActionsMobile'
import CartCoupon from './CartCoupon'
import CartHeader from './CartHeader'
import CartRow from './CartRow'
import CartSummary from './CartSummary'
import QuantitySpinner from './QuantitySpinner'
import RemoveBtn from './RemoveBtn'

export default function CartPage({
 items = [],
 updateQty,
 removeItem,
 removeAll,
 subtotal,
 coupon,
 setCoupon
}) {
 return (
  <div className="bg-white min-h-screen font-sans text-gray-900">
   {/* ================= DESKTOP ================= */}
   <div className="hidden lg:block">
    <div className="max-w-6xl mx-auto px-8 py-12">
     <p className="text-sm text-gray-400 mb-10">
      Home / <span className="text-gray-800">Cart</span>
     </p>

     <CartHeader />

     {items.length === 0 && (
      <div className="py-10 text-center text-gray-500">Your cart is empty</div>
     )}

     {items.map((item) => (
      <CartRow
       key={item.id}
       item={item}
       updateQty={updateQty}
       removeItem={removeItem}
      />
     ))}

     <CartActionsDesktop removeAll={removeAll} />

     <div className="grid grid-cols-2 gap-10 mt-12 items-start">
      <CartCoupon coupon={coupon} setCoupon={setCoupon} />
      <CartSummary subtotal={subtotal} />
     </div>
    </div>
   </div>

   {/* ================= MOBILE ================= */}
   <div className="lg:hidden px-4 pt-6 pb-6">
    <p className="text-xs text-gray-400 mb-5">
     Home / <span className="text-gray-700">Cart</span>
    </p>

    {items.length === 0 && (
     <div className="text-center text-gray-500 py-10">Your cart is empty</div>
    )}

    {items.map((item) => (
     <div
      key={item.id}
      className="border border-gray-200 rounded-xl p-4 mb-4 bg-white"
     >
      <div className="flex items-center justify-between mb-3">
       <img
        src={item.image}
        alt={item.name}
        className="object-contain"
        style={{ width: 60, height: 60 }}
       />
       <QuantitySpinner
        value={item.quantity}
        onChange={(v) => updateQty(item.id, v)}
       />
      </div>

      <p className="text-sm font-medium text-gray-900 mb-2">{item.name}</p>

      <div className="flex items-center justify-between">
       <span className="text-sm text-gray-500">${item.price}</span>
       <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-gray-900">
         ${item.price * item.quantity}
        </span>
        <RemoveBtn onClick={() => removeItem(item.id)} />
       </div>
      </div>
     </div>
    ))}

    <CartActionsMobile removeAll={removeAll} />

    <div className="flex gap-3 mb-5">
     <CartCoupon coupon={coupon} setCoupon={setCoupon} />
    </div>

    <CartSummary subtotal={subtotal} />
   </div>
  </div>
 )
}
