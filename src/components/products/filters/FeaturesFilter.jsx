import FilterSection from './FilterSection'

function FeaturesFilter() {
 const features = [
  'Metallic',
  'Plastic cover',
  '8GB Ram',
  'Super power',
  'Large Memory'
 ]

 return (
  <FilterSection title="Features">
   {features.map((feature, index) => (
    <label key={index} className="flex items-center gap-2">
     <input type="checkbox" />
     <span className="text-gray-600">{feature}</span>
    </label>
   ))}
   <p className="text-red-500 cursor-pointer">See all</p>
  </FilterSection>
 )
}

export default FeaturesFilter
