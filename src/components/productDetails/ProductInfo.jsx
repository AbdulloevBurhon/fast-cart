import ProductActions from './ProductActions'
import ProductGallery from './ProductGallery'

function ProductInfo() {
 return (
  <section className="py-16">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
     {/* LEFT SIDE */}
     <ProductGallery />

     {/* RIGHT SIDE */}
     <div>
      {/* TITLE */}
      <h1 className="text-3xl font-semibold mb-2">Havic HV G-92 Gamepad</h1>

      {/* RATING */}
      <div className="flex items-center gap-3 mb-4">
       <div className="text-yellow-500">★★★★★</div>
       <span className="text-gray-500 text-sm">(150 Reviews)</span>
       <span className="text-green-500 text-sm">In Stock</span>
      </div>

      {/* PRICE */}
      <p className="text-2xl font-bold mb-4">$192.00</p>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mb-6">
       PlayStation 5 Controller Skin High quality vinyl with air channel
       adhesive. Free removal Pressure sensitive.
      </p>

      <hr className="mb-6" />

      {/* COLORS */}
      <div className="mb-6">
       <p className="mb-2 font-medium">Colours:</p>
       <div className="flex gap-3">
        <div className="w-6 h-6 rounded-full border bg-black"></div>
        <div className="w-6 h-6 rounded-full border bg-red-500"></div>
       </div>
      </div>

      {/* SIZE */}
      <div className="mb-6">
       <p className="mb-2 font-medium">Size:</p>
       <div className="flex gap-3">
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
         <button
          key={size}
          className="border px-3 py-1 text-sm hover:bg-red-500 hover:text-white"
         >
          {size}
         </button>
        ))}
       </div>
      </div>

      {/* ACTIONS */}
      <ProductActions />

      {/* DELIVERY BOX */}
      <div className="border rounded mt-8">
       <div className="flex items-center gap-4 p-4 border-b">
        🚚
        <div>
         <p className="font-medium">Free Delivery</p>
         <p className="text-sm text-gray-500">
          Enter your postal code for Delivery Availability
         </p>
        </div>
       </div>

       <div className="flex items-center gap-4 p-4">
        🔄
        <div>
         <p className="font-medium">Return Delivery</p>
         <p className="text-sm text-gray-500">Free 30 Days Delivery Returns</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}

export default ProductInfo
