// src/components/productDetails/ProductInfo.jsx

import DeliveryInfo from './DeliveryInfo'
import ProductActions from './ProductActions'
import ProductGallery from './ProductGallery'
import ProductMeta from './ProductMeta'
import ProductOptions from './ProductOptions'

function ProductInfo({ product }) {
 return (
  <section className="py-16">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
     {/* LEFT */}
     <ProductGallery
      images={[product.image, product.image, product.image, product.image]}
     />

     {/* RIGHT */}
     <div>
      <ProductMeta product={product} />
      <ProductOptions product={product} />
      <ProductActions product={product} />
      <DeliveryInfo />
     </div>
    </div>
   </div>
  </section>
 )
}

export default ProductInfo
