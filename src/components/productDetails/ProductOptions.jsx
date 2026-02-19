// src/components/productDetails/ProductOptions.jsx
import { useState } from 'react'

function ProductOptions({ product }) {
 const [selectedColor, setSelectedColor] = useState(0)
 const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '')

 return (
  <>
   {product.colors && (
    <div className="flex items-center gap-4 mb-5">
     <span>Colours:</span>
     <div className="flex gap-2">
      {product.colors.map((color, i) => (
       <button
        key={i}
        onClick={() => setSelectedColor(i)}
        className="w-5 h-5 rounded-full"
        style={{
         background: color,
         outline: selectedColor === i ? `2px solid ${color}` : 'none',
         outlineOffset: 2
        }}
       />
      ))}
     </div>
    </div>
   )}

   {product.sizes && (
    <div className="flex items-center gap-4 mb-6">
     <span>Size:</span>
     <div className="flex gap-2">
      {product.sizes.map((size) => (
       <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`px-3 py-1 border text-sm ${
         selectedSize === size ? 'bg-red-500 text-white border-red-500' : ''
        }`}
       >
        {size}
       </button>
      ))}
     </div>
    </div>
   )}
  </>
 )
}

export default ProductOptions
