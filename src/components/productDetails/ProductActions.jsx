import { Heart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

function ProductActions({ product }) {
 const { addToCart } = useCart()
 const { wishlist, toggleWishlist } = useWishlist()

 const [quantity, setQuantity] = useState(1)

 const isWished = wishlist.some((p) => p.id === product.id)

 return (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
   {/* QUANTITY */}
   <div className="flex items-center border border-gray-300 rounded overflow-hidden h-11">
    <button
     onClick={() => setQuantity((q) => Math.max(1, q - 1))}
     className="px-4 h-full flex items-center justify-center text-lg"
    >
     −
    </button>

    <span className="px-6 border-x border-gray-300 h-full flex items-center justify-center text-sm font-medium">
     {String(quantity).padStart(2, '0')}
    </span>

    <button
     onClick={() => setQuantity((q) => q + 1)}
     className="px-4 h-full flex items-center justify-center bg-red-500 text-white"
    >
     +
    </button>
   </div>

   {/* BUY NOW */}
   <button
    onClick={() => addToCart({ ...product, quantity })}
    className="h-11 px-10 bg-red-500 text-white rounded hover:bg-red-600 transition font-medium"
   >
    Buy Now
   </button>

   {/* WISHLIST */}
   <button
    onClick={() => toggleWishlist(product)}
    className={`h-11 w-11 flex items-center justify-center rounded border transition ${
     isWished
      ? 'bg-red-500 border-red-500 text-white'
      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
    }`}
   >
    <Heart size={18} fill={isWished ? 'currentColor' : 'none'} />
   </button>
  </div>
 )
}

export default ProductActions
