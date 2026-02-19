// import ProductsFilters from '../../components/products/filters/ProductsFilters'
// import ProductsHeader from '../../components/products/ProductsHeader'
// import ProductsList from '../../components/products/ProductsList'
// import Container from '../../components/ui/Container'

// function Products() {
//  return (
//   <section className="py-16">
//    <Container>
//     <ProductsHeader />

//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10">
//      {/* LEFT FILTERS */}
//      <div className="lg:col-span-1">
//       <ProductsFilters />
//      </div>

//      {/* RIGHT PRODUCTS */}
//      <div className="lg:col-span-3">
//       <ProductsList />
//      </div>
//     </div>
//    </Container>
//   </section>
//  )
// }

// export default Products
// import { useState } from 'react'

// /* ─── mock data ─── */
// const PRODUCTS = [
//  {
//   id: 1,
//   price: 100,
//   rating: 3,
//   badge: null,
//   colors: [],
//   image: 'https://m.media-amazon.com/images/I/81lLFCnFbWL._AC_SX425_.jpg',
//   name: 'Dog Food Cesar'
//  },
//  {
//   id: 2,
//   price: 360,
//   rating: 4,
//   badge: null,
//   colors: [],
//   image: 'https://m.media-amazon.com/images/I/71sua21KS5L._AC_SX425_.jpg',
//   name: 'Canon EOS Camera',
//   hover: true
//  },
//  {
//   id: 3,
//   price: 700,
//   rating: 5,
//   badge: null,
//   colors: [],
//   image: 'https://m.media-amazon.com/images/I/61RG3LpJpNL._AC_SX425_.jpg',
//   name: 'Gaming Laptop'
//  },
//  {
//   id: 4,
//   price: 960,
//   rating: 5,
//   badge: 'NEW',
//   colors: ['#FF3535', '#E07B39'],
//   image: 'https://m.media-amazon.com/images/I/61d5UKRatnL._AC_SX425_.jpg',
//   name: 'Kids Ride-On Car'
//  },
//  {
//   id: 5,
//   price: 1160,
//   rating: 5,
//   badge: null,
//   colors: ['#D4C84A', '#E07B39'],
//   image: 'https://m.media-amazon.com/images/I/61v2i2nLimL._AC_SX425_.jpg',
//   name: 'Football Cleats'
//  },
//  {
//   id: 6,
//   price: 660,
//   rating: 4,
//   badge: 'NEW',
//   colors: ['#FF3535'],
//   image: 'https://m.media-amazon.com/images/I/71eBPUZxlJL._AC_SX425_.jpg',
//   name: 'Gaming Controller'
//  },
//  {
//   id: 7,
//   price: 500,
//   rating: 4,
//   badge: null,
//   colors: ['#4A7A7A', '#E07B39'],
//   image: 'https://m.media-amazon.com/images/I/61S7YUYIBKL._AC_SX425_.jpg',
//   name: 'Skincare Set'
//  },
//  {
//   id: 8,
//   price: 660,
//   rating: 4,
//   badge: null,
//   colors: ['#3A5A3A', '#E07B39'],
//   image: 'https://m.media-amazon.com/images/I/51b0rGBUGBL._AC_SX425_.jpg',
//   name: 'Bomber Jacket'
//  },
//  {
//   id: 9,
//   price: 370,
//   rating: 5,
//   badge: '-30%',
//   colors: [],
//   image: 'https://m.media-amazon.com/images/I/71HKBb5EE8L._AC_SX425_.jpg',
//   name: 'Gaming Monitor'
//  },
//  {
//   id: 10,
//   price: 960,
//   rating: 5,
//   badge: '-35%',
//   colors: [],
//   image: 'https://m.media-amazon.com/images/I/61RG3LpJpNL._AC_SX425_.jpg',
//   name: 'Business Laptop'
//  },
//  {
//   id: 11,
//   price: 560,
//   rating: 5,
//   badge: 'NEW',
//   colors: [],
//   image: 'https://m.media-amazon.com/images/I/71eBPUZxlJL._AC_SX425_.jpg',
//   name: 'Red Gamepad'
//  },
//  {
//   id: 12,
//   price: 200,
//   rating: 5,
//   badge: null,
//   colors: [],
//   image: 'https://m.media-amazon.com/images/I/71BRwMnFEkL._AC_SX425_.jpg',
//   name: 'RGB Keyboard'
//  }
// ]

// const CATEGORIES = [
//  'All products',
//  'Electronics',
//  'Home & Lifestyle',
//  'Medicine',
//  'Sports & Outdoor'
// ]
// const BRANDS = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo']
// const FEATURES = [
//  'Metallic',
//  'Plastic cover',
//  '8GB Ram',
//  'Super power',
//  'Large Memory'
// ]
// const CONDITIONS = ['Any', 'Refurbished', 'Brand new', 'Old items']

// function StarRating({ n }) {
//  return (
//   <div className="flex gap-0.5">
//    {[1, 2, 3, 4, 5].map((i) => (
//     <svg
//      key={i}
//      width="14"
//      height="14"
//      viewBox="0 0 24 24"
//      fill={i <= n ? '#FFAD33' : '#D1D5DB'}
//      stroke="none"
//     >
//      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//     </svg>
//    ))}
//   </div>
//  )
// }

// function ProductCard({ product }) {
//  const [hovered, setHovered] = useState(false)
//  const [wished, setWished] = useState(false)

//  return (
//   <div
//    className="rounded-lg overflow-hidden bg-gray-50 relative"
//    onMouseEnter={() => setHovered(true)}
//    onMouseLeave={() => setHovered(false)}
//   >
//    {/* badge */}
//    {product.badge && (
//     <span
//      className="absolute top-3 left-3 text-white text-xs font-medium px-2 py-0.5 rounded z-10"
//      style={{ background: product.badge === 'NEW' ? '#00A651' : '#DB4444' }}
//     >
//      {product.badge}
//     </span>
//    )}

//    {/* wish */}
//    <button
//     onClick={() => setWished((w) => !w)}
//     className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm z-10"
//    >
//     <svg
//      width="13"
//      height="13"
//      viewBox="0 0 24 24"
//      fill={wished ? '#DB4444' : 'none'}
//      stroke={wished ? '#DB4444' : '#333'}
//      strokeWidth="2"
//     >
//      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//     </svg>
//    </button>

//    {/* eye */}
//    <button className="absolute top-12 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm z-10">
//     <svg
//      width="13"
//      height="13"
//      viewBox="0 0 24 24"
//      fill="none"
//      stroke="#333"
//      strokeWidth="2"
//     >
//      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//      <circle cx="12" cy="12" r="3" />
//     </svg>
//    </button>

//    {/* image */}
//    <div
//     className="relative flex items-center justify-center"
//     style={{ height: 180 }}
//    >
//     <img
//      src={product.image}
//      alt={product.name}
//      className="object-contain p-4 max-h-full"
//      onError={(e) => {
//       e.target.src = 'https://via.placeholder.com/180'
//      }}
//     />
//     {/* Add To Cart on hover */}
//     {hovered && (
//      <div
//       className="absolute bottom-0 left-0 right-0 text-center text-white text-sm py-2 font-medium"
//       style={{ background: '#1A1A1A' }}
//      >
//       Add To Cart
//      </div>
//     )}
//    </div>
//   </div>
//  )
// }

// function ProductInfo({ product }) {
//  return (
//   <div className="mt-2 px-1">
//    <div className="flex items-center gap-2 mb-1">
//     <span className="font-semibold text-sm" style={{ color: '#DB4444' }}>
//      ${product.price}
//     </span>
//     <StarRating n={product.rating} />
//    </div>
//    {product.colors.length > 0 && (
//     <div className="flex gap-1.5 mt-1">
//      {product.colors.map((c, i) => (
//       <span
//        key={i}
//        className="w-3 h-3 rounded-full inline-block"
//        style={{ background: c }}
//       />
//      ))}
//     </div>
//    )}
//   </div>
//  )
// }

// /* ─── Sidebar filters ─── */
// function SidebarFilters({ onClose }) {
//  const [selectedCat, setSelectedCat] = useState('All products')
//  const [brandChecks, setBrandChecks] = useState({})
//  const [featChecks, setFeatChecks] = useState({})
//  const [condition, setCondition] = useState('Any')
//  const [ratingChecks, setRatingChecks] = useState({})
//  const [priceMin, setPriceMin] = useState(20)
//  const [priceMax, setPriceMax] = useState(200)

//  const toggleCheck = (setter, key) => setter((p) => ({ ...p, [key]: !p[key] }))

//  return (
//   <div className="text-sm" style={{ color: '#1A1A1A' }}>
//    {/* ── Category ── */}
//    <div className="pb-5 mb-5" style={{ borderBottom: '1px solid #E0E0E0' }}>
//     <div className="flex justify-between items-center mb-3">
//      <span className="font-semibold text-sm">Category</span>
//      <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#666"
//       strokeWidth="2"
//      >
//       <polyline points="18 15 12 9 6 15" />
//      </svg>
//     </div>
//     <ul className="space-y-2">
//      {CATEGORIES.map((cat) => (
//       <li key={cat}>
//        <button
//         onClick={() => setSelectedCat(cat)}
//         className="text-sm text-left w-full"
//         style={{
//          color: selectedCat === cat ? '#DB4444' : '#555',
//          fontWeight: selectedCat === cat ? 600 : 400
//         }}
//        >
//         {cat}
//        </button>
//       </li>
//      ))}
//      <li>
//       <button className="text-sm font-medium" style={{ color: '#DB4444' }}>
//        See all
//       </button>
//      </li>
//     </ul>
//    </div>

//    {/* ── Brands ── */}
//    <div className="pb-5 mb-5" style={{ borderBottom: '1px solid #E0E0E0' }}>
//     <div className="flex justify-between items-center mb-3">
//      <span className="font-semibold text-sm">Brands</span>
//      <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#666"
//       strokeWidth="2"
//      >
//       <polyline points="18 15 12 9 6 15" />
//      </svg>
//     </div>
//     <ul className="space-y-2">
//      {BRANDS.map((b) => (
//       <li key={b} className="flex items-center gap-2">
//        <input
//         type="checkbox"
//         id={`b-${b}`}
//         checked={!!brandChecks[b]}
//         onChange={() => toggleCheck(setBrandChecks, b)}
//         className="w-4 h-4 accent-red-500 cursor-pointer"
//        />
//        <label
//         htmlFor={`b-${b}`}
//         className="cursor-pointer text-sm text-gray-600"
//        >
//         {b}
//        </label>
//       </li>
//      ))}
//      <li>
//       <button className="text-sm font-medium" style={{ color: '#DB4444' }}>
//        See all
//       </button>
//      </li>
//     </ul>
//    </div>

//    {/* ── Features ── */}
//    <div className="pb-5 mb-5" style={{ borderBottom: '1px solid #E0E0E0' }}>
//     <div className="flex justify-between items-center mb-3">
//      <span className="font-semibold text-sm">Features</span>
//      <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#666"
//       strokeWidth="2"
//      >
//       <polyline points="18 15 12 9 6 15" />
//      </svg>
//     </div>
//     <ul className="space-y-2">
//      {FEATURES.map((f) => (
//       <li key={f} className="flex items-center gap-2">
//        <input
//         type="checkbox"
//         id={`f-${f}`}
//         checked={!!featChecks[f]}
//         onChange={() => toggleCheck(setFeatChecks, f)}
//         className="w-4 h-4 accent-red-500 cursor-pointer"
//        />
//        <label
//         htmlFor={`f-${f}`}
//         className="cursor-pointer text-sm text-gray-600"
//        >
//         {f}
//        </label>
//       </li>
//      ))}
//      <li>
//       <button className="text-sm font-medium" style={{ color: '#DB4444' }}>
//        See all
//       </button>
//      </li>
//     </ul>
//    </div>

//    {/* ── Price range ── */}
//    <div className="pb-5 mb-5" style={{ borderBottom: '1px solid #E0E0E0' }}>
//     <div className="flex justify-between items-center mb-4">
//      <span className="font-semibold text-sm">Price range</span>
//      <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#666"
//       strokeWidth="2"
//      >
//       <polyline points="18 15 12 9 6 15" />
//      </svg>
//     </div>
//     <div
//      className="relative h-2 rounded-full mb-3"
//      style={{ background: '#E0E0E0' }}
//     >
//      <div
//       className="absolute h-2 rounded-full"
//       style={{
//        background: '#DB4444',
//        left: `${(priceMin / 400) * 100}%`,
//        right: `${100 - (priceMax / 400) * 100}%`
//       }}
//      />
//      <input
//       type="range"
//       min="0"
//       max="400"
//       value={priceMin}
//       onChange={(e) => setPriceMin(Math.min(+e.target.value, priceMax - 10))}
//       className="absolute w-full top-0 h-2 opacity-0 cursor-pointer"
//       style={{ zIndex: 2 }}
//      />
//      <input
//       type="range"
//       min="0"
//       max="400"
//       value={priceMax}
//       onChange={(e) => setPriceMax(Math.max(+e.target.value, priceMin + 10))}
//       className="absolute w-full top-0 h-2 opacity-0 cursor-pointer"
//       style={{ zIndex: 3 }}
//      />
//      <div
//       className="absolute w-4 h-4 rounded-full bg-white border-2 border-red-500 -translate-y-1 cursor-pointer"
//       style={{
//        left: `calc(${(priceMin / 400) * 100}% - 8px)`,
//        top: '50%',
//        transform: 'translate(-50%,-50%)'
//       }}
//      />
//      <div
//       className="absolute w-4 h-4 rounded-full bg-red-500 -translate-y-1 cursor-pointer"
//       style={{
//        left: `calc(${(priceMax / 400) * 100}% - 8px)`,
//        top: '50%',
//        transform: 'translate(-50%,-50%)'
//       }}
//      />
//     </div>
//     <div className="flex justify-between text-xs text-gray-400 mb-4">
//      <span>${priceMin}</span>
//      <span>${priceMax}</span>
//     </div>
//     <button
//      className="w-full py-2 rounded text-sm font-medium text-white border transition hover:opacity-90"
//      style={{ background: '#DB4444', border: 'none' }}
//     >
//      Apply
//     </button>
//    </div>

//    {/* ── Condition ── */}
//    <div className="pb-5 mb-5" style={{ borderBottom: '1px solid #E0E0E0' }}>
//     <div className="flex justify-between items-center mb-3">
//      <span className="font-semibold text-sm">Condition</span>
//      <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#666"
//       strokeWidth="2"
//      >
//       <polyline points="18 15 12 9 6 15" />
//      </svg>
//     </div>
//     <ul className="space-y-2">
//      {CONDITIONS.map((c) => (
//       <li key={c} className="flex items-center gap-2">
//        <div
//         onClick={() => setCondition(c)}
//         className="w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer flex-shrink-0"
//         style={{ borderColor: condition === c ? '#DB4444' : '#aaa' }}
//        >
//         {condition === c && (
//          <div
//           className="w-2 h-2 rounded-full"
//           style={{ background: '#DB4444' }}
//          />
//         )}
//        </div>
//        <span
//         className="text-sm text-gray-600 cursor-pointer"
//         onClick={() => setCondition(c)}
//        >
//         {c}
//        </span>
//       </li>
//      ))}
//     </ul>
//    </div>

//    {/* ── Ratings ── */}
//    <div className="pb-2">
//     <div className="flex justify-between items-center mb-3">
//      <span className="font-semibold text-sm">Ratings</span>
//      <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#666"
//       strokeWidth="2"
//      >
//       <polyline points="18 15 12 9 6 15" />
//      </svg>
//     </div>
//     <ul className="space-y-2">
//      {[5, 4, 3, 2].map((n) => (
//       <li key={n} className="flex items-center gap-2">
//        <input
//         type="checkbox"
//         id={`r-${n}`}
//         checked={!!ratingChecks[n]}
//         onChange={() => toggleCheck(setRatingChecks, n)}
//         className="w-4 h-4 accent-red-500 cursor-pointer"
//        />
//        <label htmlFor={`r-${n}`} className="cursor-pointer">
//         <StarRating n={n} />
//        </label>
//       </li>
//      ))}
//     </ul>
//    </div>
//   </div>
//  )
// }

// /* ─── Active filter tags (mobile) ─── */
// function FilterTag({ label, onRemove }) {
//  return (
//   <span className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-full text-xs text-gray-700">
//    {label}
//    <button onClick={onRemove} className="text-gray-400 hover:text-gray-700">
//     <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
//      <path
//       d="M1 1l10 10M11 1L1 11"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//      />
//     </svg>
//    </button>
//   </span>
//  )
// }

// /* ─── Main Page ─── */
// export default function Products() {
//  const [showMobileFilter, setShowMobileFilter] = useState(false)
//  const [activeTags] = useState(['All products', 'Any'])

//  return (
//   <div className="bg-white min-h-screen font-sans" style={{ color: '#1A1A1A' }}>
//    {/* ════════════ DESKTOP ════════════ */}
//    <div className="hidden lg:block max-w-6xl mx-auto px-8 py-12">
//     <div className="grid gap-8" style={{ gridTemplateColumns: '220px 1fr' }}>
//      {/* ── Left sidebar ── */}
//      <aside>
//       <SidebarFilters />
//      </aside>

//      {/* ── Products grid ── */}
//      <main>
//       <div className="grid grid-cols-3 gap-5">
//        {PRODUCTS.map((p) => (
//         <div key={p.id}>
//          <ProductCard product={p} />
//          <ProductInfo product={p} />
//         </div>
//        ))}
//       </div>

//       {/* More Products */}
//       <div className="flex justify-center mt-10">
//        <button
//         className="px-10 py-3 rounded text-white font-semibold text-sm"
//         style={{ background: '#DB4444' }}
//        >
//         More Products
//        </button>
//       </div>
//      </main>
//     </div>
//    </div>

//    {/* ════════════ MOBILE ════════════ */}
//    <div className="lg:hidden">
//     {/* ── Breadcrumb ── */}
//     <div className="px-4 pt-5 pb-4">
//      <p className="text-xs text-gray-400">
//       Home &nbsp;<span className="text-gray-400">/</span>&nbsp;
//       <span className="text-gray-700 font-medium">Explore our Products</span>
//      </p>
//     </div>

//     {/* ── Search input container ── */}
//     <div className="px-4 mb-3">
//      <div className="relative">
//       <input
//        type="text"
//        placeholder="What are you looking for?"
//        className="w-full px-4 py-3 pr-11 border border-gray-200 rounded-lg text-sm outline-none bg-gray-50 text-gray-700 placeholder-gray-400 focus:border-gray-400"
//       />
//       <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//        <svg
//         width="17"
//         height="17"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//        >
//         <circle cx="11" cy="11" r="8" />
//         <line x1="21" y1="21" x2="16.65" y2="16.65" />
//        </svg>
//       </div>
//      </div>
//     </div>

//     {/* ── Sort + Filter row ── */}
//     <div className="flex items-center justify-between px-4 mb-3">
//      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white">
//       Populary
//       <svg
//        width="14"
//        height="14"
//        viewBox="0 0 24 24"
//        fill="none"
//        stroke="currentColor"
//        strokeWidth="2"
//       >
//        <line x1="8" y1="6" x2="21" y2="6" />
//        <line x1="8" y1="12" x2="21" y2="12" />
//        <line x1="8" y1="18" x2="21" y2="18" />
//       </svg>
//      </button>
//      <button
//       onClick={() => setShowMobileFilter(true)}
//       className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white"
//      >
//       Filter (3)
//       <svg
//        width="14"
//        height="14"
//        viewBox="0 0 24 24"
//        fill="none"
//        stroke="currentColor"
//        strokeWidth="2"
//       >
//        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
//       </svg>
//      </button>
//     </div>

//     {/* ── Active tags row ── */}
//     <div className="flex flex-wrap gap-2 px-4 pb-4">
//      {activeTags.map((t) => (
//       <FilterTag key={t} label={t} onRemove={() => {}} />
//      ))}
//     </div>

//     {/* ── Products list (1 col) ── */}
//     <div className="px-4 space-y-5">
//      {PRODUCTS.map((p) => (
//       <div key={p.id}>
//        <ProductCard product={p} />
//        <ProductInfo product={p} />
//       </div>
//      ))}
//     </div>

//     {/* More Products */}
//     <div className="flex justify-center my-8 px-4">
//      <button
//       className="w-full py-3 rounded text-white font-semibold text-sm"
//       style={{ background: '#DB4444' }}
//      >
//       More Products
//      </button>
//     </div>

//     {/* ── Mobile filter drawer ── */}
//     {showMobileFilter && (
//      <div className="fixed inset-0 z-50 flex">
//       {/* overlay */}
//       <div
//        className="flex-1 bg-black bg-opacity-40"
//        onClick={() => setShowMobileFilter(false)}
//       />
//       {/* panel */}
//       <div className="w-80 bg-white h-full overflow-y-auto p-5 shadow-2xl">
//        <div className="flex justify-between items-center mb-5">
//         <span className="font-semibold text-base">Filters</span>
//         <button onClick={() => setShowMobileFilter(false)}>
//          <svg
//           width="18"
//           height="18"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="#333"
//           strokeWidth="2"
//          >
//           <line x1="18" y1="6" x2="6" y2="18" />
//           <line x1="6" y1="6" x2="18" y2="18" />
//          </svg>
//         </button>
//        </div>
//        <SidebarFilters onClose={() => setShowMobileFilter(false)} />
//       </div>
//      </div>
//     )}
//    </div>
//   </div>
//  )
// }

// src/pages/Products.jsx
import { useState } from 'react'
import ProductsFilters from '../../components/products/ProductsFilters'
import ProductsHeader from '../../components/products/ProductsHeader'
import ProductsMain from '../../components/products/ProductsMain'
import ProductsToolbar from '../../components/products/ProductsToolbar'

export default function Products() {
 const [showMobileFilter, setShowMobileFilter] = useState(false)
 const [activeTags, setActiveTags] = useState(['All products', 'Any'])
 const [sortValue, setSortValue] = useState('Popular')

 const removeTag = (tag) => setActiveTags((p) => p.filter((t) => t !== tag))

 return (
  <div className="bg-white min-h-screen font-sans text-gray-900">
   {/* ═══════ DESKTOP ═══════ */}
   <div className="hidden lg:block">
    <div className="max-w-[1300px] mx-auto px-8 py-10">
     <ProductsHeader sortValue={sortValue} onSortChange={setSortValue} />
     <div className="flex gap-10 items-start mt-2">
      <aside className="flex-shrink-0 w-[220px]">
       <ProductsFilters />
      </aside>
      <main className="flex-1 min-w-0">
       <ProductsMain />
      </main>
     </div>
    </div>
   </div>

   {/* ═══════ MOBILE ═══════ */}
   <div className="lg:hidden">
    <div className="px-4 pt-5 pb-10">
     <ProductsToolbar
      activeTags={activeTags}
      onRemoveTag={removeTag}
      onOpenFilter={() => setShowMobileFilter(true)}
     />
     <ProductsMain isMobile />
    </div>

    {/* Drawer */}
    {showMobileFilter && (
     <div className="fixed inset-0 z-50 flex">
      <div
       className="flex-1 bg-black bg-opacity-50"
       onClick={() => setShowMobileFilter(false)}
      />
      <div className="w-72 bg-white h-full overflow-y-auto p-5 shadow-2xl">
       <div className="flex justify-between items-center mb-5">
        <span className="font-bold text-base">Filters</span>
        <button onClick={() => setShowMobileFilter(false)}>
         <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333"
          strokeWidth="2"
         >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
         </svg>
        </button>
       </div>
       <ProductsFilters />
      </div>
     </div>
    )}
   </div>
  </div>
 )
}
