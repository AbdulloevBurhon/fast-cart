// src/components/products/filters/ProductsFilters.jsx
import { useState } from 'react'

const CATEGORIES = [
 'All products',
 'Electronics',
 'Home & Lifestyle',
 'Medicine',
 'Sports & Outdoor'
]
const BRANDS = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo']
const FEATURES = [
 'Metallic',
 'Plastic cover',
 '8GB Ram',
 'Super power',
 'Large Memory'
]
const CONDITIONS = ['Any', 'Refurbished', 'Brand new', 'Old items']

function ChevronUp() {
 return (
  <svg
   width="14"
   height="14"
   viewBox="0 0 24 24"
   fill="none"
   stroke="#888"
   strokeWidth="2"
  >
   <polyline points="18 15 12 9 6 15" />
  </svg>
 )
}

function StarRow({ n }) {
 return (
  <div className="flex gap-0.5">
   {[1, 2, 3, 4, 5].map((i) => (
    <svg
     key={i}
     width="14"
     height="14"
     viewBox="0 0 24 24"
     fill={i <= n ? '#FFAD33' : '#D1D5DB'}
     stroke="none"
    >
     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
   ))}
  </div>
 )
}

function Section({ title, children }) {
 return (
  <div className="py-5" style={{ borderBottom: '1px solid #EBEBEB' }}>
   <div className="flex justify-between items-center mb-3">
    <span className="font-semibold text-sm text-gray-900">{title}</span>
    <ChevronUp />
   </div>
   {children}
  </div>
 )
}

export default function ProductsFilters() {
 const [selectedCat, setSelectedCat] = useState('All products')
 const [brandChecks, setBrandChecks] = useState({})
 const [featChecks, setFeatChecks] = useState({})
 const [condition, setCondition] = useState('Any')
 const [ratingChecks, setRatingChecks] = useState({})
 const [priceMin, setPriceMin] = useState(20)
 const [priceMax, setPriceMax] = useState(200)

 const toggle = (setter, key) => setter((p) => ({ ...p, [key]: !p[key] }))

 return (
  <div className="text-sm">
   {/* Category */}
   <Section title="Category">
    <ul className="space-y-2.5">
     {CATEGORIES.map((cat) => (
      <li key={cat}>
       <button
        onClick={() => setSelectedCat(cat)}
        className="text-sm text-left w-full transition-colors"
        style={{
         color: selectedCat === cat ? '#DB4444' : '#666',
         fontWeight: selectedCat === cat ? 600 : 400
        }}
       >
        {cat}
       </button>
      </li>
     ))}
     <li>
      <button className="text-sm font-semibold" style={{ color: '#DB4444' }}>
       See all
      </button>
     </li>
    </ul>
   </Section>

   {/* Brands */}
   <Section title="Brands">
    <ul className="space-y-2.5">
     {BRANDS.map((b) => (
      <li key={b} className="flex items-center gap-2.5">
       <input
        type="checkbox"
        id={`b-${b}`}
        checked={!!brandChecks[b]}
        onChange={() => toggle(setBrandChecks, b)}
        className="w-4 h-4 rounded cursor-pointer accent-red-500"
       />
       <label
        htmlFor={`b-${b}`}
        className="cursor-pointer text-sm text-gray-600"
       >
        {b}
       </label>
      </li>
     ))}
     <li>
      <button className="text-sm font-semibold" style={{ color: '#DB4444' }}>
       See all
      </button>
     </li>
    </ul>
   </Section>

   {/* Features */}
   <Section title="Features">
    <ul className="space-y-2.5">
     {FEATURES.map((f) => (
      <li key={f} className="flex items-center gap-2.5">
       <input
        type="checkbox"
        id={`f-${f}`}
        checked={!!featChecks[f]}
        onChange={() => toggle(setFeatChecks, f)}
        className="w-4 h-4 rounded cursor-pointer accent-red-500"
       />
       <label
        htmlFor={`f-${f}`}
        className="cursor-pointer text-sm text-gray-600"
       >
        {f}
       </label>
      </li>
     ))}
     <li>
      <button className="text-sm font-semibold" style={{ color: '#DB4444' }}>
       See all
      </button>
     </li>
    </ul>
   </Section>

   {/* Price range */}
   <Section title="Price range">
    <div
     className="relative h-1.5 rounded-full mb-3 mt-1"
     style={{ background: '#E0E0E0' }}
    >
     <div
      className="absolute h-1.5 rounded-full"
      style={{
       background: '#DB4444',
       left: `${(priceMin / 400) * 100}%`,
       right: `${100 - (priceMax / 400) * 100}%`
      }}
     />
     {/* thumbs visual */}
     <div
      className="absolute w-4 h-4 rounded-full bg-white border-2 pointer-events-none"
      style={{
       borderColor: '#DB4444',
       left: `${(priceMin / 400) * 100}%`,
       top: '50%',
       transform: 'translate(-50%, -50%)'
      }}
     />
     <div
      className="absolute w-4 h-4 rounded-full pointer-events-none"
      style={{
       background: '#DB4444',
       left: `${(priceMax / 400) * 100}%`,
       top: '50%',
       transform: 'translate(-50%, -50%)'
      }}
     />
     <input
      type="range"
      min="0"
      max="400"
      value={priceMin}
      onChange={(e) => setPriceMin(Math.min(+e.target.value, priceMax - 10))}
      className="absolute w-full top-0 h-full opacity-0 cursor-pointer"
      style={{ zIndex: 2 }}
     />
     <input
      type="range"
      min="0"
      max="400"
      value={priceMax}
      onChange={(e) => setPriceMax(Math.max(+e.target.value, priceMin + 10))}
      className="absolute w-full top-0 h-full opacity-0 cursor-pointer"
      style={{ zIndex: 3 }}
     />
    </div>
    <div className="flex justify-between text-xs text-gray-400 mb-4">
     <span>${priceMin}</span>
     <span>${priceMax}</span>
    </div>
    <button
     className="w-full py-2 rounded text-sm font-semibold text-white hover:opacity-90 transition"
     style={{ background: '#DB4444' }}
    >
     Apply
    </button>
   </Section>

   {/* Condition */}
   <Section title="Condition">
    <ul className="space-y-2.5">
     {CONDITIONS.map((c) => (
      <li
       key={c}
       className="flex items-center gap-2.5 cursor-pointer"
       onClick={() => setCondition(c)}
      >
       <div
        className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
        style={{ borderColor: condition === c ? '#DB4444' : '#ccc' }}
       >
        {condition === c && (
         <div
          className="w-2 h-2 rounded-full"
          style={{ background: '#DB4444' }}
         />
        )}
       </div>
       <span className="text-sm text-gray-600">{c}</span>
      </li>
     ))}
    </ul>
   </Section>

   {/* Ratings */}
   <div className="pt-5">
    <div className="flex justify-between items-center mb-3">
     <span className="font-semibold text-sm text-gray-900">Ratings</span>
     <ChevronUp />
    </div>
    <ul className="space-y-2.5">
     {[5, 4, 3, 2].map((n) => (
      <li key={n} className="flex items-center gap-2.5">
       <input
        type="checkbox"
        id={`r-${n}`}
        checked={!!ratingChecks[n]}
        onChange={() => toggle(setRatingChecks, n)}
        className="w-4 h-4 rounded cursor-pointer accent-red-500"
       />
       <label htmlFor={`r-${n}`} className="cursor-pointer">
        <StarRow n={n} />
       </label>
      </li>
     ))}
    </ul>
   </div>
  </div>
 )
}
