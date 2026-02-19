import FilterSection from './FilterSection'

function ConditionFilter() {
 const conditions = ['Any', 'Refurbished', 'Brand new', 'Old items']

 return (
  <FilterSection title="Condition">
   {conditions.map((item, index) => (
    <label key={index} className="flex items-center gap-2">
     <input type="radio" name="condition" />
     <span className="text-gray-600">{item}</span>
    </label>
   ))}
  </FilterSection>
 )
}

export default ConditionFilter
