import FilterSection from './FilterSection'

function CategoryFilter() {
 const categories = [
  'All products',
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor'
 ]

 return (
  <FilterSection title="Category">
   {categories.map((item, index) => (
    <p
     key={index}
     className={`cursor-pointer ${
      index === 0 ? 'text-red-500 font-medium' : 'text-gray-600'
     }`}
    >
     {item}
    </p>
   ))}
   <p className="text-red-500 cursor-pointer">See all</p>
  </FilterSection>
 )
}

export default CategoryFilter
