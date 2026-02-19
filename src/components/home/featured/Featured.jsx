import Container from '../../ui/Container'
import SectionTitle from '../../ui/SectionTitle'

function Featured() {
 return (
  <section className="py-14">
   <Container>
    <SectionTitle label="Featured" title="New Arrival" />

    {/* Сетка: на мобилках flex-column, на десктопе Grid 4 колонки */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 lg:gap-8 h-auto md:h-[600px]">
     {/* PlayStation 5 - Большая карточка слева */}
     <div className="md:col-span-2 md:row-span-2 bg-black rounded-sm relative group overflow-hidden flex items-end">
      <img
       src="ps.png"
       alt="PS5"
       className="absolute inset-0 w-full h-full object-contain p-4 md:p-0"
      />
      <div className="relative z-10 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
       <h3 className="text-white text-2xl font-semibold mb-2">PlayStation 5</h3>
       <p className="text-gray-200 text-sm mb-4 max-w-[240px]">
        Black and White version of the PS5 coming out on sale.
       </p>
       <button className="text-white font-medium border-b border-gray-500 hover:border-white transition-colors">
        Shop Now
       </button>
      </div>
     </div>

     {/* Women's Collection - Длинная горизонтальная сверху */}
     <div className="md:col-span-2 bg-[#0D0D0D] rounded-sm relative group overflow-hidden flex items-end">
      <img
       src="wom.png"
       alt="Women's Collection"
       className="absolute right-0 top-0 h-full w-auto object-cover transform scale-x-[-1]"
      />
      <div className="relative z-10 p-6 w-full md:w-1/2">
       <h3 className="text-white text-2xl font-semibold mb-2">
        Women's Collections
       </h3>
       <p className="text-gray-200 text-sm mb-4">
        Featured woman collections that give you another vibe.
       </p>
       <button className="text-white font-medium border-b border-gray-500 hover:border-white transition-colors">
        Shop Now
       </button>
      </div>
     </div>

     {/* Speakers - Маленькая снизу слева */}
     <div className="md:col-span-2 bg-[#0D0D0D] rounded-sm relative group overflow-hidden flex items-end">
      <img
       src="dux.png"
       alt="Women's Collection"
       className="absolute right-0 top-0 h-full w-auto object-cover transform scale-x-[-1]"
      />
      <div className="relative z-10 p-6 w-full md:w-1/2">
       <h3 className="text-white text-2xl font-semibold mb-2">
        Women's Collections
       </h3>
       <p className="text-gray-200 text-sm mb-4">
        Featured woman collections that give you another vibe.
       </p>
       <button className="text-white font-medium border-b border-gray-500 hover:border-white transition-colors">
        Shop Now
       </button>
      </div>
     </div>

     {/* Perfume - Маленькая снизу справа dasdsadsa*/}
     <div className="md:col-span-2 bg-[#0D0D0D] rounded-sm relative group overflow-hidden flex items-end">
      <img
       src="sp.png"
       alt="Women's Collection"
       className="absolute right-0 top-0 h-full w-auto object-cover transform scale-x-[-1]"
      />
      <div className="relative z-10 p-6 w-full md:w-1/2">
       <h3 className="text-white text-2xl font-semibold mb-2">
        Women's Collections
       </h3>
       <p className="text-gray-200 text-sm mb-4">
        Featured woman collections that give you another vibe.
       </p>
       <button className="text-white font-medium border-b border-gray-500 hover:border-white transition-colors">
        Shop Now
       </button>
      </div>
     </div>
    </div>
   </Container>
  </section>
 )
}

export default Featured
