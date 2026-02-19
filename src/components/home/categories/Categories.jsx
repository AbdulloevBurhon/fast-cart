// src/components/home/BrowseCategories.jsx
//
// Клик на категорию → переход на /products?category=slug
// Фильтрация товаров происходит на странице Products

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../ui/Container'
import SectionTitle from '../../ui/SectionTitle'

const TEMP_CATEGORIES = [
 { id: 1, label: 'Phones', slug: 'phones', icon: 'phone' },
 { id: 2, label: 'Computers', slug: 'computers', icon: 'computer' },
 { id: 3, label: 'SmartWatch', slug: 'smartwatch', icon: 'watch' },
 { id: 4, label: 'Camera', slug: 'camera', icon: 'camera' },
 { id: 5, label: 'HeadPhones', slug: 'headphones', icon: 'headphone' },
 { id: 6, label: 'Gaming', slug: 'gaming', icon: 'gamepad' },
 { id: 7, label: 'TV & Home', slug: 'tv', icon: 'tv' },
 { id: 8, label: 'Fashion', slug: 'fashion', icon: 'tshirt' }
]

const ICONS = {
 phone: (
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <rect x="5" y="2" width="14" height="20" rx="2" />
   <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" />
  </svg>
 ),
 computer: (
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <rect x="2" y="3" width="20" height="14" rx="2" />
   <line x1="8" y1="21" x2="16" y2="21" />
   <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
 ),
 watch: (
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <circle cx="12" cy="12" r="6" />
   <polyline points="12 10 12 12 13 13" />
   <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
  </svg>
 ),
 camera: (
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
   <circle cx="12" cy="13" r="4" />
  </svg>
 ),
 headphone: (
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
   <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
   <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
 ),
 gamepad: (
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <line x1="6" y1="12" x2="10" y2="12" />
   <line x1="8" y1="10" x2="8" y2="14" />
   <circle cx="15" cy="11" r="1" fill="currentColor" />
   <circle cx="17" cy="13" r="1" fill="currentColor" />
   <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59l-.96 8.23A2 2 0 0 0 3.72 19h.59a2 2 0 0 0 1.84-1.22L7 16h10l.85 1.78A2 2 0 0 0 19.69 19h.59a2 2 0 0 0 1.98-2.18l-.96-8.23A4 4 0 0 0 17.32 5z" />
  </svg>
 ),
 tv: (
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <rect x="2" y="7" width="20" height="15" rx="2" />
   <polyline points="17 2 12 7 7 2" />
  </svg>
 ),
 tshirt: (
  <svg
   width="40"
   height="40"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
  </svg>
 )
}

// Клик → переход на страницу продуктов с фильтром по категории
function CategoryCard({ category }) {
 return (
  <Link
   to={`/products?category=${category.slug}`}
   className="group flex flex-col items-center justify-center gap-3 w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] flex-shrink-0 border border-gray-200 rounded-sm transition-all duration-200 hover:bg-red-500 hover:border-red-500 hover:shadow-lg"
  >
   <span className="text-gray-600 group-hover:text-white transition-colors duration-200">
    {ICONS[category.icon] ?? ICONS.camera}
   </span>
   <span className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors duration-200 text-center leading-tight px-2">
    {category.label}
   </span>
  </Link>
 )
}

function ArrowButton({ direction, onClick }) {
 return (
  <button
   onClick={onClick}
   className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all"
  >
   <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
   >
    {direction === 'left' ? (
     <path d="M15 18l-6-6 6-6" />
    ) : (
     <path d="M9 18l6-6-6-6" />
    )}
   </svg>
  </button>
 )
}

function BrowseCategories({ categories = TEMP_CATEGORIES }) {
 const scrollRef = useRef(null)

 const scroll = (dir) => {
  if (!scrollRef.current) return
  scrollRef.current.scrollBy({
   left: dir === 'left' ? -300 : 300,
   behavior: 'smooth'
  })
 }

 return (
  <section className="py-14">
   <Container>
    <div className="flex items-end justify-between mb-10">
     <SectionTitle label="Categories" title="Browse By Category" />
     <div className="hidden md:flex items-center gap-2">
      <ArrowButton direction="left" onClick={() => scroll('left')} />
      <ArrowButton direction="right" onClick={() => scroll('right')} />
     </div>
    </div>

    {/* ИЗМЕНЕНИЯ ТУТ:
          1. Добавлен "justify-start md:justify-center" — на мобилках от левого края (для скролла), 
             на десктопе по центру.
          2. Если вы хотите, чтобы всегда было по центру (даже если карточек мало), 
             используйте просто "justify-center".
        */}
    <div
     ref={scrollRef}
     className="flex gap-4 overflow-x-auto pb-4 justify-start md:justify-center no-scrollbar"
     style={{
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      WebkitOverflowScrolling: 'touch' // Плавный скролл на iOS
     }}
    >
     {categories.map((cat) => (
      <CategoryCard key={cat.id} category={cat} />
     ))}
    </div>

    <div className="border-b border-gray-200 mt-10" />
   </Container>
  </section>
 )
}

export default BrowseCategories
