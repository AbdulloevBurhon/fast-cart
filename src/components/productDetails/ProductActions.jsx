function ProductActions() {
 return (
  <div className="flex items-center gap-4 mb-6">
   {/* QUANTITY */}
   <div className="flex items-center border">
    <button className="px-4 py-2">-</button>
    <span className="px-4">2</span>
    <button className="px-4 py-2 bg-red-500 text-white">+</button>
   </div>

   {/* BUY */}
   <button className="bg-red-500 text-white px-8 py-3 rounded">Buy Now</button>

   {/* WISHLIST */}
   <button className="border px-4 py-3 rounded">♡</button>
  </div>
 )
}

export default ProductActions
