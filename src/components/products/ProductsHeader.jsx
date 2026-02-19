// src/components/products/ProductsHeader.jsx

export default function ProductsHeader({ sortValue, onSortChange }) {
 return (
  <div className="flex items-center justify-between mb-8">
   <h1 className="text-2xl font-bold text-gray-900">Explore Our Products</h1>
   <select
    value={sortValue}
    onChange={(e) => onSortChange(e.target.value)}
    className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 outline-none cursor-pointer bg-white"
   >
    <option>Popular</option>
    <option>Newest</option>
    <option>Price: Low to High</option>
    <option>Price: High to Low</option>
   </select>
  </div>
 )
}
