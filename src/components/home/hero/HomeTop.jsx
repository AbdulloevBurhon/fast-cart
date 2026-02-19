// HomeTop.jsx
//
// Логика поиска вынесена в: hooks/useSearch.js
// Логика слайдера вынесена в: hooks/useHeroSlider.js (используется внутри Hero)

import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Container from '../../ui/Container'
import { useSearch } from '../hooks/useSearch'
import Hero from './Hero'

// ─── TEMP: убрать когда будет бэкенд ───────────────────────────────────────
const TEMP_CATEGORIES = [
 { label: "Woman's Fashion", groupId: 'womans-fashion', hasArrow: true },
 { label: "Men's Fashion", groupId: 'mens-fashion', hasArrow: true },
 { label: 'Electronics', groupId: 'electronics', hasArrow: false },
 { label: 'Home & Lifestyle', groupId: 'home-lifestyle', hasArrow: false },
 { label: 'Medicine', groupId: 'medicine', hasArrow: false },
 { label: 'Sports & Outdoor', groupId: 'sports-outdoor', hasArrow: false },
 { label: "Baby's & Toys", groupId: 'babies-toys', hasArrow: false },
 { label: 'Groceries & Pets', groupId: 'groceries-pets', hasArrow: false },
 { label: 'Health & Beauty', groupId: 'health-beauty', hasArrow: false }
]
// ───────────────────────────────────────────────────────────────────────────

function ChevronRight() {
 return (
  <svg
   width="14"
   height="14"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M9 18l6-6-6-6" />
  </svg>
 )
}

function HomeTop({ categories = TEMP_CATEGORIES }) {
 // ← Вся логика поиска здесь
 const { query, setQuery, handleSearch, handleKeyDown } = useSearch()
 const navigate = useNavigate()

 const handleCategory = (groupId) => navigate(`/category/${groupId}`)

 return (
  <section className="w-full py-4 md:py-6">
   <Container>
    {/* ─── MOBILE ─── */}
    <div className="md:hidden flex flex-col gap-3">
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

     <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
       <button
        key={cat.groupId}
        onClick={() => handleCategory(cat.groupId)}
        className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-800 hover:bg-gray-50 transition-colors whitespace-nowrap"
       >
        {cat.label}
        {cat.hasArrow && <ChevronRight />}
       </button>
      ))}
     </div>

     <Hero />
    </div>

    {/* ─── DESKTOP ─── */}
    <div className="hidden md:flex w-full gap-6">
     <div className="w-[220px] flex-shrink-0 border-r border-gray-200 pr-6 flex flex-col gap-4">
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

      <ul className="flex flex-col gap-0.5">
       {categories.map((cat) => (
        <li key={cat.groupId}>
         <button
          onClick={() => handleCategory(cat.groupId)}
          className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors group"
         >
          <span>{cat.label}</span>
          {cat.hasArrow && (
           <span className="opacity-50 group-hover:opacity-100">
            <ChevronRight />
           </span>
          )}
         </button>
        </li>
       ))}
      </ul>
     </div>

     <div className="flex-1 min-w-0">
      <Hero />
     </div>
    </div>
   </Container>
  </section>
 )
}

export default HomeTop
