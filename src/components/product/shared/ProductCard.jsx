// src/components/product/shared/ProductCard.jsx

import { Eye, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../../context/CartContext'
import { useWishlist } from '../../../context/WishlistContext'

function StarRating({ rating }) {
 return (
  <div className="flex items-center gap-0.5">
   {[1, 2, 3, 4, 5].map((star) => (
    <svg
     key={star}
     width="14"
     height="14"
     viewBox="0 0 24 24"
     fill={star <= rating ? '#FFAD33' : 'none'}
     stroke={star <= rating ? '#FFAD33' : '#CBD5E1'}
     strokeWidth="1.5"
    >
     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
   ))}
  </div>
 )
}

function ProductCard({
 id,
 image,
 title,
 price,
 oldPrice,
 rating,
 reviewsCount,
 isNew,
 showAddToCart = true
}) {
 const { addToCart } = useCart()
 const { wishlist, toggleWishlist } = useWishlist()

 const isWished = wishlist.some((item) => item.id === id)

 const discount = oldPrice
  ? `-${Math.round(((oldPrice - price) / oldPrice) * 100)}%`
  : null

 return (
  <div className="group w-full flex-shrink-0">
   <div className="relative bg-[#F5F5F5] aspect-square flex items-center justify-center overflow-hidden rounded-sm">
    {/* Badge */}
    <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
     {discount && (
      <span className="bg-[#DB4444] text-white text-[10px] px-2 py-1 rounded">
       {discount}
      </span>
     )}
     {isNew && !discount && (
      <span className="bg-[#00FF66] text-red-700 text-[10px] px-2 py-1 rounded font-medium">
       New
      </span>
     )}
    </div>

    {/* Actions */}
    <div className="absolute top-2 right-2 flex flex-col gap-1.5 z-10">
     <button
      onClick={(e) => {
       e.preventDefault()
       toggleWishlist({ id, image, title, price })
      }}
      className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-[#DB4444] hover:text-white transition-colors"
     >
      <Heart size="20" fill={isWished ? 'red' : 'none'} />
     </button>

     <Link
      to={`/products/${id}`}
      className="w-7 h-7 bg-gray-200  rounded-full flex items-center justify-center shadow-sm hover:bg-[#DB4444] hover:text-white transition-colors"
     >
      <Eye size="20" />
     </Link>
    </div>

    {/* Image — fills full container, no padding */}
    <Link to={`/products/${id}`} className="block w-full h-full">
     <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
     />
    </Link>

    {/* Add To Cart */}
    {showAddToCart && (
     <div className="absolute bottom-0 left-0 right-0 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 z-20">
      <button
       onClick={(e) => {
        e.preventDefault()
        addToCart({ id, image, name: title, price })
       }}
       className="w-full bg-gray-200  text-balck-200 text-sm font-medium py-2.5 hover:bg-gray-800 hover:text-white transition-colors"
      >
       Add To Cart
      </button>
     </div>
    )}
   </div>

   {/* Info */}
   <div className="mt-4 flex flex-col gap-2">
    <h3 className="text-sm font-semibold line-clamp-1 group-hover:text-[#DB4444] transition-colors">
     {title}
    </h3>

    <div className="flex items-center gap-3">
     <span className="text-[#DB4444] font-bold">${price}</span>
     {oldPrice && (
      <span className="text-gray-400 text-sm line-through">${oldPrice}</span>
     )}
    </div>

    <div className="flex items-center gap-2">
     <StarRating rating={rating ?? 0} />
     {reviewsCount !== undefined && (
      <span className="text-gray-500 text-xs font-semibold">
       ({reviewsCount})
      </span>
     )}
    </div>
   </div>
  </div>
 )
}

export default ProductCard
