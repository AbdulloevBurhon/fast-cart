import BrandFilter from './BrandFilter'
import CategoryFilter from './CategoryFilter'
import ConditionFilter from './ConditionFilter'
import FeaturesFilter from './FeaturesFilter'
import PriceFilter from './PriceFilter'
import RatingFilter from './RatingFilter'

function ProductsFilters() {
 return (
  <aside className="w-64 hidden lg:block">
   <CategoryFilter />
   <BrandFilter />
   <FeaturesFilter />
   <PriceFilter />
   <ConditionFilter />
   <RatingFilter />
  </aside>
 )
}

export default ProductsFilters
