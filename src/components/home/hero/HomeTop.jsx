import { Search } from 'lucide-react'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '../../ui/Container'
import { useSearch } from '../hooks/useSearch'
import Hero from './Hero'

function HomeTop() {
 const { query, setQuery, handleSearch, handleKeyDown } = useSearch()
 const navigate = useNavigate()

 const products = useSelector((state) => state.products.items)

 const categories = useMemo(() => {
  return [...new Set(products.map((p) => p.category))]
 }, [products])

 // ✅ оптимизированная фильтрация
 const visibleCategories = useMemo(() => {
  if (!query.trim()) return categories

  return categories.filter((cat) =>
   cat.toLowerCase().includes(query.toLowerCase())
  )
 }, [query, categories])

 const handleCategory = (category) => {
  navigate(`/products?category=${category}`)
  setQuery('')
 }

 return (
  <section className="w-full py-4 md:py-6">
   <Container>
    {/* ================= MOBILE ================= */}
    <div className="md:hidden flex flex-col gap-3">
     {/* SEARCH */}
     <div className="relative">
      <input
       type="text"
       value={query}
       onChange={(e) => setQuery(e.target.value)}
       onKeyDown={handleKeyDown}
       placeholder="What are you looking for?"
       className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
      />
      <button
       onClick={handleSearch}
       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
      >
       <Search size={18} />
      </button>
     </div>

     {/* CATEGORY FLEX */}
     <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
      {visibleCategories.length > 0
       ? visibleCategories.map((cat) => (
          <button
           key={cat}
           onClick={() => handleCategory(cat)}
           className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-800 hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
           {cat}
          </button>
         ))
       : query && <p className="text-sm text-gray-400">No categories found</p>}
     </div>

     <Hero />
    </div>

    {/* ================= DESKTOP ================= */}
    <div className="hidden md:flex w-full gap-6">
     {/* LEFT COLUMN */}
     <div className="w-[220px] flex-shrink-0 border-r border-gray-200 pr-6 flex flex-col gap-4">
      {/* SEARCH */}
      <div className="relative">
       <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="w-full pl-3 pr-9 py-2 border border-gray-300 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
       />
       <button
        onClick={handleSearch}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
       >
        <Search size={16} />
       </button>
      </div>

      {/* CATEGORY LIST */}
      <div className="flex flex-col gap-1 max-h-64 overflow-y-auto">
       {visibleCategories.length > 0
        ? visibleCategories.map((cat) => (
           <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className="text-left px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
           >
            {cat}
           </button>
          ))
        : query && (
           <p className="text-sm text-gray-400 px-2">No categories found</p>
          )}
      </div>
     </div>

     {/* RIGHT SIDE */}
     <div className="flex-1 min-w-0">
      <Hero />
     </div>
    </div>
   </Container>
  </section>
 )
}

export default HomeTop
