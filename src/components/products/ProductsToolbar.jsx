export default function ProductsToolbar({ filters, setFilters, onOpenFilter }) {
 const activeCount =
  (filters.category ? 1 : 0) + filters.brands.length + (filters.rating ? 1 : 0)

 return (
  <div className="flex items-center justify-between mb-6">
   <button onClick={onOpenFilter} className="px-4 py-2 border rounded text-sm">
    Filters {activeCount > 0 && `(${activeCount})`}
   </button>

   {activeCount > 0 && (
    <button
     onClick={() =>
      setFilters({
       category: null,
       brands: [],
       minPrice: 0,
       maxPrice: 2000,
       rating: null
      })
     }
     className="text-sm text-red-500"
    >
     Clear all
    </button>
   )}
  </div>
 )
}
