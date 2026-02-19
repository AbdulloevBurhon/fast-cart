// src/pages/ProductDetails.jsx

import { useParams } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'

import DeliveryInfo from '../../components/productDetails/DeliveryInfo'
import ProductActions from '../../components/productDetails/ProductActions'
import ProductGallery from '../../components/productDetails/ProductGallery'
import ProductMeta from '../../components/productDetails/ProductMeta'
import ProductOptions from '../../components/productDetails/ProductOptions'
import RelatedProducts from '../../components/productDetails/RelatedProducts'

function ProductDetails() {
 const { id } = useParams()
 const { getById } = useProducts()

 const product = getById(Number(id))

 if (!product) {
  return <div className="p-20 text-center">Product not found</div>
 }

 return (
  <div className="bg-white min-h-screen text-[#1A1A1A]">
   <section className="py-16">
    <div className="container mx-auto px-4">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* LEFT SIDE */}
      <ProductGallery
       images={[product.image, product.image, product.image, product.image]}
      />

      {/* RIGHT SIDE */}
      <div>
       <ProductMeta product={product} />
       <ProductOptions product={product} />
       <ProductActions product={product} />
       <DeliveryInfo />
      </div>
     </div>
    </div>
   </section>

   <RelatedProducts category={product.category} currentId={product.id} />
  </div>
 )
}

export default ProductDetails
