// src/components/productDetails/ProductMeta.jsx

function ProductMeta({ product }) {
 return (
  <>
   <h1 className="text-2xl font-semibold mb-3">{product.title}</h1>

   <div className="flex items-center gap-4 mb-4">
    <span className="text-yellow-500">{'★'.repeat(product.rating)}</span>
    <span className="text-gray-500 text-sm">
     ({product.reviewsCount} Reviews)
    </span>
    <span className="text-green-500 text-sm">
     {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
    </span>
   </div>

   <p className="text-2xl font-semibold mb-4">${product.price}</p>

   <p className="text-gray-500 mb-6">
    High quality product from {product.brand}.
   </p>

   <hr className="mb-6" />
  </>
 )
}

export default ProductMeta
