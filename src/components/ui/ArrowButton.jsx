// src/components/ui/ArrowButton.jsx

function ArrowButton({ direction, onClick }) {
 return (
  <button
   onClick={onClick}
   type="button"
   className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all group"
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

export default ArrowButton
