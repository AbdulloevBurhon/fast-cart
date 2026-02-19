// src/components/products/ProductsMain.jsx
import { useState } from 'react'
import { useProducts } from '../../context/ProductsContext'
import ProductGrid from '../product/shared/ProductGrid'

const PAGE_SIZE = 12

export default function ProductsMain({ isMobile = false }) {
 const { products } = useProducts()
 const [visible, setVisible] = useState(PAGE_SIZE)

 const shown = products.slice(0, visible)
 const hasMore = visible < products.length

 return (
  <div>
   {/*
        isSlider={false}  → grid layout (grid-cols-2 lg:grid-cols-4)
        On the desktop the aside is 220px, so lg:grid-cols-3 fits better.
        We override with a wrapper that caps at 3 cols on lg when not mobile.
      */}
   <div className={isMobile ? '' : '[&>div]:lg:grid-cols-3'}>
    <ProductGrid products={shown} isSlider={false} showAddToCart={true} />
   </div>

   {hasMore && (
    <div className={`flex mt-8 ${isMobile ? '' : 'justify-center'}`}>
     <button
      onClick={() => setVisible((v) => v + PAGE_SIZE)}
      className={`py-3 rounded text-white font-semibold text-sm hover:opacity-90 transition ${
       isMobile ? 'w-full' : 'px-12'
      }`}
      style={{ background: '#DB4444' }}
     >
      More Products
     </button>
    </div>
   )}
  </div>
 )
}
