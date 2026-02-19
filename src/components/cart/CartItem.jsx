function CartItem({ item }) {
 const subtotal = item.price * item.quantity

 return (
  <div className="grid grid-cols-4 items-center border p-4 rounded-md">
   <div className="flex items-center gap-4">
    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
    <span>{item.name}</span>
   </div>

   <div>${item.price}</div>

   <div>
    <input
     type="number"
     value={item.quantity}
     readOnly
     className="w-16 border text-center"
    />
   </div>

   <div className="font-semibold">${subtotal}</div>
  </div>
 )
}

export default CartItem
