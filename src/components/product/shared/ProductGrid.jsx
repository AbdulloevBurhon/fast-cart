// src/components/product/shared/ProductGrid.jsx
import ProductCard from './ProductCard'

function ProductGrid({
 products,
 scrollRef,
 isSlider = true,
 showAddToCart = true
}) {
 return (
  <div
   ref={scrollRef}
   className={`gap-4 no-scrollbar pb-4 ${
    isSlider
     ? 'flex flex-nowrap overflow-x-auto'
     : 'grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3'
   }`}
   style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
   {products.map((product) => (
    <div
     key={product.id}
     className={
      isSlider ? 'flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[270px]' : ''
     }
    >
     <ProductCard {...product} showAddToCart={showAddToCart} />
    </div>
   ))}
  </div>
 )
}

export default ProductGrid
