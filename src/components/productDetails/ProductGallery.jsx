function ProductGallery() {
 return (
  <div className="flex gap-6">
   {/* THUMBNAILS */}
   <div className="flex flex-col gap-4">
    <img src="/p1.png" className="w-20 border p-2" />
    <img src="/p2.png" className="w-20 border p-2" />
    <img src="/p3.png" className="w-20 border p-2" />
    <img src="/p4.png" className="w-20 border p-2" />
   </div>

   {/* MAIN IMAGE */}
   <div className="bg-gray-100 flex items-center justify-center p-10 rounded w-full">
    <img src="/p1.png" className="max-h-[400px] object-contain" />
   </div>
  </div>
 )
}

export default ProductGallery
