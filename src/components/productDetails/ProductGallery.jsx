import { useState } from 'react'

function ProductGallery({ images }) {
 const [selected, setSelected] = useState(0)

 return (
  <div className="flex flex-col lg:flex-row gap-6">
   <div className="flex lg:flex-col gap-4 order-2 lg:order-1">
    {images.map((img, i) => (
     <button
      key={i}
      onClick={() => setSelected(i)}
      className={`w-20 h-20 rounded bg-[#F5F5F5] flex items-center justify-center ${
       selected === i ? 'border-2 border-red-500' : ''
      }`}
     >
      <img src={img} alt="" className="w-full h-full object-contain p-2" />
     </button>
    ))}
   </div>

   <div className="bg-[#F5F5F5] rounded p-10 flex justify-center flex-1 order-1 lg:order-2">
    <img
     src={images[selected]}
     alt=""
     className="max-h-[400px] object-contain"
    />
   </div>
  </div>
 )
}

export default ProductGallery
