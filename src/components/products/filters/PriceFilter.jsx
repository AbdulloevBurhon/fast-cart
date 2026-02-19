import FilterSection from './FilterSection'

function PriceFilter() {
 return (
  <FilterSection title="Price range">
   <div className="flex gap-4">
    <input type="number" placeholder="Min" className="border p-2 w-full" />
    <input type="number" placeholder="Max" className="border p-2 w-full" />
   </div>

   <button className="mt-4 border border-red-500 text-red-500 py-2 w-full">
    Apply
   </button>
  </FilterSection>
 )
}

export default PriceFilter
