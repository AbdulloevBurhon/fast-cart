// src/components/products/ProductsToolbar.jsx

function FilterTag({ label, onRemove }) {
 return (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-full text-xs text-gray-700 bg-white">
   {label}
   <button
    onClick={onRemove}
    className="text-gray-400 hover:text-gray-700 leading-none"
   >
    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
     <path
      d="M1 1l10 10M11 1L1 11"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
     />
    </svg>
   </button>
  </span>
 )
}

export default function ProductsToolbar({
 activeTags,
 onRemoveTag,
 onOpenFilter
}) {
 return (
  <>
   {/* Breadcrumb */}
   <p className="text-xs text-gray-400 mb-4">
    Home &nbsp;<span>/</span>&nbsp;
    <span className="text-gray-700 font-medium">Explore our Products</span>
   </p>

   {/* Search input */}
   <div className="relative mb-3">
    <input
     type="text"
     placeholder="What are you looking for?"
     className="w-full px-4 py-3 pr-11 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-gray-400"
    />
    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
     <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
     >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
     </svg>
    </div>
   </div>

   {/* Sort + Filter row */}
   <div className="flex items-center justify-between mb-3">
    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white">
     Populary
     <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
     >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
     </svg>
    </button>

    <button
     onClick={onOpenFilter}
     className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white"
    >
     Filter ({activeTags.length})
     <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
     >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
     </svg>
    </button>
   </div>

   {/* Active filter tags */}
   {activeTags.length > 0 && (
    <div className="flex flex-wrap gap-2 mb-5">
     {activeTags.map((tag) => (
      <FilterTag key={tag} label={tag} onRemove={() => onRemoveTag(tag)} />
     ))}
    </div>
   )}
  </>
 )
}
