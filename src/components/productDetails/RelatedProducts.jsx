import ProductCard from '../product/shared/ProductCard'

function RelatedProducts() {
 const products = [
  { id: 1, title: 'Gamepad', price: 550, image: '/p3.png' },
  { id: 2, title: 'Keyboard', price: 200, image: '/p6.png' },
  { id: 3, title: 'Monitor', price: 370, image: '/p5.png' },
  { id: 4, title: 'Cooler', price: 160, image: '/p2.png' }
 ]

 return (
  <section className="py-20">
   <div className="container mx-auto px-4">
    <div className="flex items-center gap-3 mb-8">
     <div className="w-2 h-6 bg-red-500 rounded"></div>
     <h2 className="text-xl font-semibold">Related Item</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     {products.map((product) => (
      <ProductCard key={product.id} {...product} />
     ))}
    </div>
   </div>
  </section>
 )
}

export default RelatedProducts
