import { useEffect, useRef, useState } from 'react'

export default function SortSelect({ value, onChange }) {
 const [open, setOpen] = useState(false)
 const ref = useRef(null)

 const options = [
  { value: 'popular', label: 'Popular' },
  { value: 'price-low', label: 'Price: Low → High' },
  { value: 'price-high', label: 'Price: High → Low' },
  { value: 'rating', label: 'Rating' }
 ]

 useEffect(() => {
  const handleClick = (e) => {
   if (!ref.current?.contains(e.target)) {
    setOpen(false)
   }
  }
  document.addEventListener('mousedown', handleClick)
  return () => document.removeEventListener('mousedown', handleClick)
 }, [])

 const current = options.find((o) => o.value === value)

 return (
  <div ref={ref} className="relative">
   <button
    onClick={() => setOpen((v) => !v)}
    className="flex items-center justify-between gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-xs font-medium text-gray-700 bg-white min-w-[120px]"
   >
    {current?.label}
    <svg
     className={`transition-transform ${open ? 'rotate-180' : ''}`}
     width="12"
     height="12"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
    >
     <polyline points="6 9 12 15 18 9" />
    </svg>
   </button>

   {open && (
    <div className="absolute right-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-50 overflow-hidden">
     {options.map((opt) => (
      <button
       key={opt.value}
       onClick={() => {
        onChange(opt.value)
        setOpen(false)
       }}
       className={`w-full px-3 py-1.5 text-left text-xs hover:bg-gray-100 transition ${
        value === opt.value ? 'bg-gray-50 font-semibold' : ''
       }`}
      >
       {opt.label}
      </button>
     ))}
    </div>
   )}
  </div>
 )
}
