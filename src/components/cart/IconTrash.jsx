export default function IconTrash({ color = 'currentColor' }) {
 return (
  <svg
   width="15"
   height="15"
   viewBox="0 0 24 24"
   fill="none"
   stroke={color}
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <polyline points="3 6 5 6 21 6" />
   <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
   <path d="M10 11v6M14 11v6" />
   <path d="M9 6V4h6v2" />
  </svg>
 )
}
