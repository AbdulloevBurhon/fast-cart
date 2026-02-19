import Breadcrumb from '../Layout/Breadcrumb/Breadcrumb'

function ProductsHeader() {
 return (
  <div className="flex justify-between items-center">
   <div>
    <Breadcrumb />
    <h1 className="text-2xl font-bold mt-2">Explore Our Products</h1>
   </div>

   <select className="border px-4 py-2 rounded">
    <option>Popular</option>
    <option>Newest</option>
    <option>Price: Low to High</option>
    <option>Price: High to Low</option>
   </select>
  </div>
 )
}

export default ProductsHeader
