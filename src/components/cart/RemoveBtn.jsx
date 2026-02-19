export default function RemoveBtn({ onClick }) {
 return (
  <button
   onClick={onClick}
   className="flex items-center justify-center rounded-full flex-shrink-0"
   style={{
    width: 26,
    height: 26,
    background: '#DB4444',
    border: 'none',
    cursor: 'pointer'
   }}
  >
   <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path
     d="M1 1l10 10M11 1L1 11"
     stroke="#fff"
     strokeWidth="2.2"
     strokeLinecap="round"
    />
   </svg>
  </button>
 )
}
