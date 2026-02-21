import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductGrid from '../product/shared/ProductGrid'

const PAGE_SIZE = 12

export default function ProductsMain({ filters }) {
 const products = useSelector((state) => state.products.items)

 const [visible, setVisible] = useState(PAGE_SIZE)

 const filteredProducts = useMemo(() => {
  let result = products.filter(Boolean)

  if (filters.category) {
   result = result.filter((p) => p.category === filters.category)
  }

  if (filters.brands.length > 0) {
   result = result.filter((p) => filters.brands.includes(p.brand))
  }

  result = result.filter(
   (p) =>
    typeof p.price === 'number' &&
    p.price >= filters.minPrice &&
    p.price <= filters.maxPrice
  )

  if (filters.rating) {
   result = result.filter((p) => p.rating >= filters.rating)
  }

  return result
 }, [products, filters])

 useEffect(() => {
  setVisible(PAGE_SIZE)
 }, [filters])

 const shown = filteredProducts.slice(0, visible)
 const hasMore = visible < filteredProducts.length

 return (
  <div>
   <ProductGrid products={shown} isSlider={false} showAddToCart />

   {hasMore && (
    <div className="flex justify-center mt-8">
     <button
      onClick={() => setVisible((v) => v + PAGE_SIZE)}
      className="py-3 px-12 rounded text-white font-semibold text-sm hover:opacity-90 transition"
      style={{ background: '#DB4444' }}
     >
      More Products
     </button>
    </div>
   )}
  </div>
 )
}
