import QuantitySpinner from './QuantitySpinner'
import RemoveBtn from './RemoveBtn'

export default function CartRow({ item, updateQty, removeItem }) {
 return (
  <div
   className="grid items-center px-6 py-4 rounded mb-3 bg-white"
   style={{
    gridTemplateColumns: '2.5fr 1fr 1fr 1fr 36px',
    boxShadow: '0 1px 10px rgba(0,0,0,0.08)'
   }}
  >
   <div className="flex items-center gap-4">
    <img
     src={item.image}
     alt={item.name}
     className="object-contain"
     style={{ width: 54, height: 54 }}
    />
    <span className="text-sm text-gray-800">{item.name}</span>
   </div>

   <span className="text-sm text-gray-800">${item.price}</span>

   <QuantitySpinner
    value={item.quantity}
    onChange={(v) => updateQty(item.id, v)}
   />

   <span className="text-sm font-bold text-gray-900">
    ${item.price * item.quantity}
   </span>

   <RemoveBtn onClick={() => removeItem(item.id)} />
  </div>
 )
}
