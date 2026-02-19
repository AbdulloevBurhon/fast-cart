// import { useState } from 'react'

// const initialItems = [
//  {
//   id: 1,
//   name: 'LCD Monitor',
//   price: 650,
//   quantity: 1,
//   image: 'https://m.media-amazon.com/images/I/71HKBb5EE8L._AC_SX425_.jpg'
//  },
//  {
//   id: 2,
//   name: 'H1 Gamepad',
//   price: 550,
//   quantity: 2,
//   image: 'https://m.media-amazon.com/images/I/71eBPUZxlJL._AC_SX425_.jpg'
//  }
// ]

// function QuantitySpinner({ value, onChange }) {
//  return (
//   <div
//    className="flex items-center justify-between px-3 border border-gray-300 rounded"
//    style={{ width: 76, height: 38 }}
//   >
//    <span className="text-sm text-gray-800">
//     {String(value).padStart(2, '0')}
//    </span>
//    <div className="flex flex-col">
//     <button
//      onClick={() => onChange(value + 1)}
//      className="text-gray-500 hover:text-gray-800 leading-none"
//      style={{ fontSize: 9, padding: '1px 2px' }}
//     >
//      ▲
//     </button>
//     <button
//      onClick={() => onChange(Math.max(1, value - 1))}
//      className="text-gray-500 hover:text-gray-800 leading-none"
//      style={{ fontSize: 9, padding: '1px 2px' }}
//     >
//      ▼
//     </button>
//    </div>
//   </div>
//  )
// }

// function RemoveBtn({ onClick }) {
//  return (
//   <button
//    onClick={onClick}
//    className="flex items-center justify-center rounded-full flex-shrink-0"
//    style={{
//     width: 26,
//     height: 26,
//     background: '#DB4444',
//     border: 'none',
//     cursor: 'pointer'
//    }}
//   >
//    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
//     <path
//      d="M1 1l10 10M11 1L1 11"
//      stroke="#fff"
//      strokeWidth="2.2"
//      strokeLinecap="round"
//     />
//    </svg>
//   </button>
//  )
// }

// /* ── icons ── */
// function IconRotate() {
//  return (
//   <svg
//    width="15"
//    height="15"
//    viewBox="0 0 24 24"
//    fill="none"
//    stroke="currentColor"
//    strokeWidth="2"
//    strokeLinecap="round"
//    strokeLinejoin="round"
//   >
//    <polyline points="1 4 1 10 7 10" />
//    <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
//   </svg>
//  )
// }
// function IconTrash({ color = 'currentColor' }) {
//  return (
//   <svg
//    width="15"
//    height="15"
//    viewBox="0 0 24 24"
//    fill="none"
//    stroke={color}
//    strokeWidth="2"
//    strokeLinecap="round"
//    strokeLinejoin="round"
//   >
//    <polyline points="3 6 5 6 21 6" />
//    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
//    <path d="M10 11v6M14 11v6" />
//    <path d="M9 6V4h6v2" />
//   </svg>
//  )
// }

// export default function Cart() {
//  const [items, setItems] = useState(initialItems)
//  const [coupon, setCoupon] = useState('')

//  const updateQty = (id, qty) =>
//   setItems((p) => p.map((i) => (i.id === id ? { ...i, quantity: qty } : i)))
//  const removeItem = (id) => setItems((p) => p.filter((i) => i.id !== id))
//  const removeAll = () => setItems([])
//  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0)

//  return (
//   <div className="bg-white min-h-screen font-sans text-gray-900">
//    {/* ════════════════════════════
//           DESKTOP  lg+
//       ════════════════════════════ */}
//    <div className="hidden lg:block">
//     <div className="max-w-6xl mx-auto px-8 py-12">
//      {/* Breadcrumb */}
//      <p className="text-sm text-gray-400 mb-10">
//       Home &nbsp;<span className="text-gray-400">/</span>&nbsp;
//       <span className="text-gray-800">Cart</span>
//      </p>

//      {/* ── Table header ── */}
//      <div
//       className="grid items-center px-6 py-4 rounded mb-3"
//       style={{
//        gridTemplateColumns: '2.5fr 1fr 1fr 1fr 36px',
//        boxShadow: '0 1px 10px rgba(0,0,0,0.08)'
//       }}
//      >
//       <span className="font-medium text-sm text-gray-700">Product</span>
//       <span className="font-medium text-sm text-gray-700">Price</span>
//       <span className="font-medium text-sm text-gray-700">Quantity</span>
//       <span className="font-medium text-sm text-gray-700">Subtotal</span>
//       <span />
//      </div>

//      {/* ── Cart rows ── */}
//      {items.map((item) => (
//       <div
//        key={item.id}
//        className="grid items-center px-6 py-4 rounded mb-3 bg-white"
//        style={{
//         gridTemplateColumns: '2.5fr 1fr 1fr 1fr 36px',
//         boxShadow: '0 1px 10px rgba(0,0,0,0.08)'
//        }}
//       >
//        <div className="flex items-center gap-4">
//         <img
//          src={item.image}
//          alt={item.name}
//          className="object-contain"
//          style={{ width: 54, height: 54 }}
//          onError={(e) => {
//           e.target.src = 'https://via.placeholder.com/54'
//          }}
//         />
//         <span className="text-sm text-gray-800">{item.name}</span>
//        </div>
//        <span className="text-sm text-gray-800">${item.price}</span>
//        <QuantitySpinner
//         value={item.quantity}
//         onChange={(v) => updateQty(item.id, v)}
//        />
//        <span className="text-sm font-bold text-gray-900">
//         ${item.price * item.quantity}
//        </span>
//        <RemoveBtn onClick={() => removeItem(item.id)} />
//       </div>
//      ))}

//      {/* ── Action buttons ── */}
//      <div className="flex justify-between items-center mt-6">
//       <button
//        onClick={() => window.history.back()}
//        className="flex items-center gap-2 px-6 py-2 rounded border border-gray-800 text-gray-800 text-sm font-medium bg-transparent hover:bg-gray-50 transition"
//       >
//        <IconRotate /> Return To Shop
//       </button>

//       <div className="flex gap-3">
//        <button className="px-6 py-2 rounded border border-gray-800 text-gray-800 text-sm font-medium bg-transparent hover:bg-gray-50 transition">
//         Update Cart
//        </button>
//        <button
//         onClick={removeAll}
//         className="flex items-center gap-2 px-6 py-2 rounded border text-sm font-medium bg-transparent hover:bg-red-50 transition"
//         style={{ borderColor: '#DB4444', color: '#DB4444' }}
//        >
//         <IconTrash color="#DB4444" /> Remove all
//        </button>
//       </div>
//      </div>

//      {/* ── Bottom row: coupon + cart total ── */}
//      <div className="grid grid-cols-2 gap-10 mt-12 items-start">
//       {/* Coupon */}
//       <div className="flex gap-3">
//        <input
//         type="text"
//         placeholder="Coupon Code"
//         value={coupon}
//         onChange={(e) => setCoupon(e.target.value)}
//         className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm outline-none focus:border-gray-500 text-gray-700 placeholder-gray-400"
//        />
//        <button
//         className="px-6 py-2 rounded text-sm font-medium border transition hover:bg-red-50"
//         style={{ borderColor: '#DB4444', color: '#DB4444' }}
//        >
//         Apply
//        </button>
//       </div>

//       {/* Cart Total box */}
//       <div className="border border-gray-200 rounded-lg p-6">
//        <h2 className="font-semibold text-base text-gray-900 mb-4">
//         Cart Total
//        </h2>

//        <div className="flex justify-between items-center py-3 border-b border-gray-200">
//         <span className="text-sm text-gray-600">Subtotal:</span>
//         <span className="text-sm text-gray-900 font-medium">${subtotal}</span>
//        </div>
//        <div className="flex justify-between items-center py-3 border-b border-gray-200">
//         <span className="text-sm text-gray-600">Shipping:</span>
//         <span className="text-sm font-medium" style={{ color: '#00A651' }}>
//          Free
//         </span>
//        </div>
//        <div className="flex justify-between items-center py-3">
//         <span className="text-sm font-semibold text-gray-900">Total:</span>
//         <span className="text-sm font-bold text-gray-900">${subtotal}</span>
//        </div>

//        <button
//         className="mt-4 w-full py-3 rounded text-white font-semibold text-sm transition hover:opacity-90"
//         style={{ background: '#DB4444' }}
//        >
//         Procees to checkout
//        </button>
//       </div>
//      </div>
//     </div>
//    </div>

//    {/* ════════════════════════════
//           MOBILE  < lg
//       ════════════════════════════ */}
//    <div className="lg:hidden bg-white min-h-screen">
//     <div className="px-4 pt-6 pb-6">
//      {/* Breadcrumb */}
//      <p className="text-xs text-gray-400 mb-5">
//       Home &nbsp;/&nbsp; <span className="text-gray-700">Cart</span>
//      </p>

//      {/* ── Item cards ── */}
//      {items.map((item) => (
//       <div
//        key={item.id}
//        className="border border-gray-200 rounded-xl p-4 mb-4 bg-white"
//       >
//        {/* image | spinner */}
//        <div className="flex items-center justify-between mb-3">
//         <img
//          src={item.image}
//          alt={item.name}
//          className="object-contain"
//          style={{ width: 60, height: 60 }}
//          onError={(e) => {
//           e.target.src = 'https://via.placeholder.com/60'
//          }}
//         />
//         <QuantitySpinner
//          value={item.quantity}
//          onChange={(v) => updateQty(item.id, v)}
//         />
//        </div>
//        {/* name */}
//        <p className="text-sm font-medium text-gray-900 mb-2">{item.name}</p>
//        {/* price | subtotal + X */}
//        <div className="flex items-center justify-between">
//         <span className="text-sm text-gray-500">${item.price}</span>
//         <div className="flex items-center gap-2">
//          <span className="text-sm font-bold text-gray-900">
//           ${item.price * item.quantity}
//          </span>
//          <RemoveBtn onClick={() => removeItem(item.id)} />
//         </div>
//        </div>
//       </div>
//      ))}

//      {/* ── Return To Shop | icons ── */}
//      <div className="flex items-center justify-between mt-2 mb-5">
//       <button
//        onClick={() => window.history.back()}
//        className="flex items-center gap-2 px-5 py-2 border border-gray-800 rounded text-sm font-medium text-gray-800 bg-transparent"
//       >
//        <IconRotate /> Return To Shop
//       </button>

//       <div className="flex items-center gap-3">
//        {/* RotateCcw update */}
//        <button className="p-1 text-gray-500 hover:text-gray-800">
//         <svg
//          width="20"
//          height="20"
//          viewBox="0 0 24 24"
//          fill="none"
//          stroke="currentColor"
//          strokeWidth="2"
//          strokeLinecap="round"
//          strokeLinejoin="round"
//         >
//          <polyline points="1 4 1 10 7 10" />
//          <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
//         </svg>
//        </button>
//        {/* Trash remove all */}
//        <button
//         onClick={removeAll}
//         className="p-1"
//         style={{ background: 'none', border: 'none', cursor: 'pointer' }}
//        >
//         <IconTrash color="#DB4444" />
//        </button>
//       </div>
//      </div>

//      {/* ── Coupon input + Apply ── */}
//      <div className="flex gap-3 mb-5">
//       <input
//        type="text"
//        placeholder="Coupon Code"
//        value={coupon}
//        onChange={(e) => setCoupon(e.target.value)}
//        className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm outline-none text-gray-700 placeholder-gray-400"
//       />
//       <button
//        className="px-5 py-2 rounded text-sm font-medium border"
//        style={{ borderColor: '#DB4444', color: '#DB4444' }}
//       >
//        Apply
//       </button>
//      </div>

//      {/* ── Cart Total box ── */}
//      <div className="border border-gray-200 rounded-xl p-5">
//       <h2 className="font-semibold text-base text-gray-900 mb-3">Cart Total</h2>

//       <div className="flex justify-between py-3 border-b border-gray-200">
//        <span className="text-sm text-gray-600">Subtotal:</span>
//        <span className="text-sm font-medium text-gray-900">${subtotal}</span>
//       </div>
//       <div className="flex justify-between py-3 border-b border-gray-200">
//        <span className="text-sm text-gray-600">Shipping:</span>
//        <span className="text-sm font-medium" style={{ color: '#00A651' }}>
//         Free
//        </span>
//       </div>
//       <div className="flex justify-between py-3 mb-3">
//        <span className="text-sm font-semibold text-gray-900">Total:</span>
//        <span className="text-sm font-bold text-gray-900">${subtotal}</span>
//       </div>

//       <button
//        className="w-full py-3 rounded-lg text-white font-semibold text-sm"
//        style={{ background: '#DB4444' }}
//       >
//        Procees to checkout
//       </button>
//      </div>
//     </div>
//    </div>
//   </div>
//  )
// }
import CartLayout from '../../components/cart/CartLayout'

function Cart() {
 return (
  <div>
   <CartLayout />
  </div>
 )
}

export default Cart
