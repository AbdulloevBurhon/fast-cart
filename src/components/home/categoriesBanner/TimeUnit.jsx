// src/components/home/TimeUnit.jsx
function TimeUnit({ value, label }) {
 return (
  <div className="bg-white text-black rounded-full w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center shadow-sm">
   <span className="font-bold text-sm md:text-base leading-none">{value}</span>
   <span className="text-[10px] md:text-[11px] font-medium leading-none mt-1">
    {label}
   </span>
  </div>
 )
}

export default TimeUnit
