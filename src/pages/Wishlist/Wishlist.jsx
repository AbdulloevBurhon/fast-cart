import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'

function Wishlist() {
 const products = [
  { id: 1, title: 'Gucci bag', price: 960, image: '/p1.png' },
  { id: 2, title: 'RGB Cooler', price: 1960, image: '/p2.png' },
  { id: 3, title: 'Gamepad', price: 550, image: '/p3.png' },
  { id: 4, title: 'Jacket', price: 750, image: '/p4.png' }
 ]

 return (
  <section className="py-16">
   <Container>
    {/* Header */}
    <div className="flex justify-between items-center mb-10">
     <h1 className="text-2xl font-bold">Wishlist ({products.length})</h1>

     <button className="border px-4 py-2 rounded">Move All To Bag</button>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     {products.map((product) => (
      <div key={product.id} className="border p-4 rounded">
       <Link to={`/products/${product.id}`}>
        <img
         src={product.image}
         alt={product.title}
         className="h-40 mx-auto object-contain"
        />
       </Link>

       <h3 className="mt-4 font-medium">{product.title}</h3>

       <p className="text-red-500 font-semibold">${product.price}</p>

       <Link
        to="/cart"
        className="block text-center mt-4 bg-black text-white py-2 rounded"
       >
        Add To Cart
       </Link>
      </div>
     ))}
    </div>
   </Container>
  </section>
 )
}

export default Wishlist
