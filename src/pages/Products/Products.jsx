import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductsFilters from '../../components/products/ProductsFilters'
import ProductsHeader from '../../components/products/ProductsHeader'
import ProductsMain from '../../components/products/ProductsMain'
import ProductsToolbar from '../../components/products/ProductsToolbar'

export default function Products() {
 const [searchParams] = useSearchParams()
 const [showMobileFilter, setShowMobileFilter] = useState(false)
 const [drawerVisible, setDrawerVisible] = useState(false)

 const [filters, setFilters] = useState({
  category: null,
  brands: [],
  minPrice: 0,
  maxPrice: 2000,
  rating: null
 })

 const selectedCategory = searchParams.get('category')

 useEffect(() => {
  if (selectedCategory) {
   setFilters((prev) => ({ ...prev, category: selectedCategory }))
  } else {
   setFilters((prev) => ({ ...prev, category: null }))
  }
 }, [selectedCategory])

 const openDrawer = () => {
  setShowMobileFilter(true)
  setTimeout(() => setDrawerVisible(true), 10)
 }

 const closeDrawer = () => {
  setDrawerVisible(false)
  setTimeout(() => setShowMobileFilter(false), 320)
 }

 useEffect(() => {
  document.body.style.overflow = showMobileFilter ? 'hidden' : ''
  return () => (document.body.style.overflow = '')
 }, [showMobileFilter])

 return (
  <div className="bg-white min-h-screen font-sans text-gray-900">
   {/* DESKTOP */}
   <div className="hidden lg:block">
    <div className="max-w-[1300px] mx-auto px-8 py-10">
     <ProductsHeader />

     <div className="flex gap-10 items-start mt-2">
      <aside className="flex-shrink-0 w-[220px]">
       <ProductsFilters filters={filters} setFilters={setFilters} />
      </aside>

      <main className="flex-1 min-w-0">
       <ProductsMain filters={filters} />
      </main>
     </div>
    </div>
   </div>

   {/* MOBILE */}
   <div className="lg:hidden">
    <div className="px-4 pt-5 pb-10">
     <ProductsToolbar
      filters={filters}
      setFilters={setFilters}
      onOpenFilter={openDrawer}
     />
     <ProductsMain filters={filters} isMobile />
    </div>

    {showMobileFilter && (
     <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
      <div
       className="absolute inset-0 pointer-events-auto"
       style={{
        background: 'rgba(0,0,0,0.15)',
        opacity: drawerVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
       }}
       onClick={closeDrawer}
      />

      <div
       className="relative pointer-events-auto bg-white h-full overflow-y-auto shadow-2xl"
       style={{
        width: 280,
        transform: drawerVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)'
       }}
      >
       <div className="px-5 pb-8">
        <ProductsFilters filters={filters} setFilters={setFilters} />
       </div>
      </div>
     </div>
    )}
   </div>
  </div>
 )
}
