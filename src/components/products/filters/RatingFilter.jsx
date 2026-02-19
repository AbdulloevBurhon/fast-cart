import FilterSection from './FilterSection'

function RatingFilter() {
 return (
  <FilterSection title="Ratings">
   {[5, 4, 3].map((stars) => (
    <label key={stars} className="flex items-center gap-2">
     <input type="checkbox" />
     <span>{'⭐'.repeat(stars)}</span>
    </label>
   ))}
  </FilterSection>
 )
}

export default RatingFilter
