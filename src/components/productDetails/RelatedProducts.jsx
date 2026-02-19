// src/components/productDetails/RelatedProducts.jsx

import { useProducts } from '../../context/ProductsContext'
import ProductCard from '../product/shared/ProductCard'

function RelatedProducts({ category, currentId }) {
 const { getByCategory } = useProducts()

 const related = getByCategory(category)
  .filter((p) => p.id !== currentId)
  .slice(0, 4)

 return (
  <section className="py-20">
   <div className="container mx-auto px-4">
    <div className="flex items-center gap-3 mb-8">
     <div className="w-2 h-6 bg-red-500 rounded"></div>
     <h2 className="text-xl font-semibold">Related Item</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     {related.map((product) => (
      <ProductCard key={product.id} {...product} />
     ))}
    </div>
   </div>
  </section>
 )
}

export default RelatedProducts
