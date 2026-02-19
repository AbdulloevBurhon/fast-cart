import { useState } from 'react'

function FilterSection({ title, children }) {
 const [open, setOpen] = useState(true)

 return (
  <div className="border-b pb-6 mb-6">
   <div
    onClick={() => setOpen(!open)}
    className="flex justify-between items-center cursor-pointer mb-4"
   >
    <h3 className="font-semibold">{title}</h3>
    <span>{open ? '−' : '+'}</span>
   </div>

   {open && <div className="space-y-3">{children}</div>}
  </div>
 )
}

export default FilterSection
