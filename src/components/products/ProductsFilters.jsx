// src/components/products/ProductsFilters.jsx

import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'

/* ── Animated collapsible section ── */
function Section({ title, forceOpen = false, children }) {
 const [open, setOpen] = useState(forceOpen)
 const bodyRef = useRef(null)
 const [height, setHeight] = useState(forceOpen ? 'auto' : '0px')

 useEffect(() => {
  setOpen(forceOpen)
 }, [forceOpen])

 useEffect(() => {
  if (!bodyRef.current) return

  if (open) {
   const h = bodyRef.current.scrollHeight
   setHeight(`${h}px`)
   const timer = setTimeout(() => setHeight('auto'), 300)
   return () => clearTimeout(timer)
  } else {
   const h = bodyRef.current.scrollHeight
   setHeight(`${h}px`)
   bodyRef.current.getBoundingClientRect()
   setHeight('0px')
  }
 }, [open])

 return (
  <div style={{ borderBottom: '1px solid #EBEBEB' }}>
   <button
    onClick={() => setOpen((v) => !v)}
    className="w-full flex justify-between items-center py-5 text-left"
   >
    <span className="font-semibold text-sm text-gray-900">{title}</span>
    <svg
     width="14"
     height="14"
     viewBox="0 0 24 24"
     fill="none"
     stroke="#888"
     strokeWidth="2"
     style={{
      transition: 'transform 0.25s ease',
      transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
      flexShrink: 0
     }}
    >
     <polyline points="18 15 12 9 6 15" />
    </svg>
   </button>

   <div
    ref={bodyRef}
    style={{
     overflow: 'hidden',
     height,
     transition: 'height 0.3s ease'
    }}
   >
    <div className="pb-5">{children}</div>
   </div>
  </div>
 )
}

/* ───────────────────────────────── */

export default function ProductsFilters({ filters, setFilters }) {
 const { products } = useProducts()
 const [searchParams, setSearchParams] = useSearchParams()

 const selectedCategory = searchParams.get('category')

 const [priceMin, setPriceMin] = useState(filters.minPrice)
 const [priceMax, setPriceMax] = useState(filters.maxPrice)

 /* ===== Динамические категории ===== */
 const categories = useMemo(() => {
  return ['All products', ...new Set(products.map((p) => p.category))]
 }, [products])

 /* ===== Динамические бренды ===== */
 const brands = useMemo(() => {
  return [...new Set(products.map((p) => p.brand))]
 }, [products])

 return (
  <div className="text-sm">
   {/* ================= CATEGORY ================= */}
   <Section title="Category" forceOpen={!!selectedCategory}>
    <ul className="space-y-2.5">
     {categories.map((cat) => {
      const isActive =
       (!filters.category && cat === 'All products') || filters.category === cat

      return (
       <li key={cat}>
        <button
         onClick={() => {
          if (cat === 'All products') {
           setSearchParams({})
           setFilters((prev) => ({ ...prev, category: null }))
          } else {
           setSearchParams({ category: cat })
           setFilters((prev) => ({ ...prev, category: cat }))
          }
         }}
         className="text-sm text-left w-full transition-colors"
         style={{
          color: isActive ? '#DB4444' : '#666',
          fontWeight: isActive ? 600 : 400
         }}
        >
         {cat}
        </button>
       </li>
      )
     })}
    </ul>
   </Section>
   {/* ================= BRANDS ================= */}
   <Section title="Brands">
    <ul className="space-y-2.5">
     {brands.map((b) => (
      <li key={b} className="flex items-center gap-2.5">
       <input
        type="checkbox"
        checked={filters.brands.includes(b)}
        onChange={() => {
         setFilters((prev) => {
          const exists = prev.brands.includes(b)
          return {
           ...prev,
           brands: exists
            ? prev.brands.filter((brand) => brand !== b)
            : [...prev.brands, b]
          }
         })
        }}
        className="w-4 h-4 rounded cursor-pointer accent-red-500"
       />
       <span className="text-sm text-gray-600">{b}</span>
      </li>
     ))}
    </ul>
   </Section>
   {/* ПРАЙСССССССС */}
   <Section title="Price range">
    <div className="flex justify-between text-xs text-gray-400 mb-4">
     <span>${filters.minPrice}</span>
     <span>${filters.maxPrice}</span>
    </div>

    <input
     type="range"
     min="0"
     max="2000"
     value={filters.maxPrice}
     onChange={(e) => {
      const value = Number(e.target.value)

      setFilters((prev) => ({
       ...prev,
       minPrice: 0,
       maxPrice: value
      }))
     }}
     className="w-full"
    />
   </Section>
   {/* ================= RATING ================= */}
   <Section title="Ratings">
    <ul className="space-y-2.5">
     {[5, 4, 3, 2, 1].map((n) => (
      <li key={n}>
       <button
        onClick={() =>
         setFilters((prev) => ({
          ...prev,
          rating: prev.rating === n ? null : n
         }))
        }
        className="text-sm"
        style={{
         color: filters.rating === n ? '#DB4444' : '#666'
        }}
       >
        {n} stars & up
       </button>
      </li>
     ))}
    </ul>
   </Section>
  </div>
 )
}
