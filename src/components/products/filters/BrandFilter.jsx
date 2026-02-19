import FilterSection from './FilterSection'

function BrandFilter() {
 const brands = ['Samsung', 'Apple', 'Huawei', 'Lenovo']

 return (
  <FilterSection title="Brands">
   {brands.map((brand, index) => (
    <label key={index} className="flex items-center gap-2">
     <input type="checkbox" />
     <span className="text-gray-600">{brand}</span>
    </label>
   ))}
   <p className="text-red-500 cursor-pointer">See all</p>
  </FilterSection>
 )
}

export default BrandFilter
