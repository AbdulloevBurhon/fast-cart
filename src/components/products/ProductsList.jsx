import ProductCard from '../product/shared/ProductCard'

function ProductsList() {
 const products = [
  { id: 1, title: 'Camera', price: 360, image: '/p1.png' },
  { id: 2, title: 'Laptop', price: 700, image: '/p2.png' },
  { id: 3, title: 'Gamepad', price: 550, image: '/p3.png' },
  { id: 4, title: 'Jacket', price: 750, image: '/p4.png' },
  { id: 5, title: 'Monitor', price: 370, image: '/p5.png' },
  { id: 6, title: 'Keyboard', price: 200, image: '/p6.png' }
 ]

 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
   {products.map((product) => (
    <ProductCard key={product.id} {...product} />
   ))}
  </div>
 )
}

export default ProductsList
