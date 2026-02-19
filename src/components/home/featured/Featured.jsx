import Container from '../../ui/Container'
import SectionTitle from '../../ui/SectionTitle'

function Featured() {
 // Выносим общие стили для чистоты кода
 const bannerClasses = 'bg-black rounded-sm relative group overflow-hidden flex'
 const textContainerClasses =
  'relative z-10 p-6 mt-auto w-full bg-gradient-to-t from-black via-black/70 to-transparent'
 const titleClasses = 'text-white text-xl md:text-2xl font-semibold mb-2'
 const descClasses = 'text-gray-200 text-xs md:text-sm mb-4 max-w-[240px]'
 const buttonClasses =
  'text-white font-medium border-b border-gray-500 hover:border-white transition-colors self-start'

 return (
  <section className="py-14">
   <Container>
    <SectionTitle label="Featured" title="New Arrival" />

    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 lg:gap-8">
     {/* PlayStation 5 */}
     <div
      className={`${bannerClasses} md:col-span-2 md:row-span-2 min-h-[400px] md:h-full`}
     >
      <img
       src="ps.png"
       alt="PS5"
       className="absolute inset-0 w-full h-full object-contain md:object-right-bottom transition-transform duration-500 group-hover:scale-105"
      />
      <div className={textContainerClasses}>
       <h3 className={titleClasses}>PlayStation 5</h3>
       <p className={descClasses}>
        Black and White version of the PS5 coming out on sale.
       </p>
       <button className={buttonClasses}>Shop Now</button>
      </div>
     </div>

     {/* Women's Collection */}
     <div className={`${bannerClasses} md:col-span-2 min-h-[280px]`}>
      <img
       src="wom.png"
       alt="Women's Collection"
       className="absolute inset-0 w-full h-full object-cover md:object-right transition-transform duration-500 group-hover:scale-105"
      />
      <div className={textContainerClasses}>
       <h3 className={titleClasses}>Women's Collections</h3>
       <p className={descClasses}>
        Featured woman collections that give you another vibe.
       </p>
       <button className={buttonClasses}>Shop Now</button>
      </div>
     </div>

     {/* Speakers */}
     <div className={`${bannerClasses} md:col-span-1 min-h-[280px]`}>
      <div className="absolute inset-0 flex items-center justify-center p-10">
       <div className="w-full h-full bg-white/10 blur-3xl absolute rounded-full" />
       <img
        src="sp.png"
        alt="Speakers"
        className="relative z-10 object-contain h-full transition-transform duration-500 group-hover:scale-110"
       />
      </div>
      <div className={textContainerClasses}>
       <h3 className="text-white text-lg font-semibold mb-1">Speakers</h3>
       <p className="text-gray-200 text-xs mb-3">Amazon wireless speakers</p>
       <button className={`${buttonClasses} text-sm`}>Shop Now</button>
      </div>
     </div>

     {/* Perfume */}
     <div className={`${bannerClasses} md:col-span-1 min-h-[280px]`}>
      <div className="absolute inset-0 flex items-center justify-center p-10">
       <div className="w-full h-full bg-white/10 blur-3xl absolute rounded-full" />
       <img
        src="dux.png"
        alt="Perfume"
        className="relative z-10 object-contain h-full transition-transform duration-500 group-hover:scale-110"
       />
      </div>
      <div className={textContainerClasses}>
       <h3 className="text-white text-lg font-semibold mb-1">Perfume</h3>
       <p className="text-gray-200 text-xs mb-3">GUCCI INTENSE OUD EDP</p>
       <button className={`${buttonClasses} text-sm`}>Shop Now</button>
      </div>
     </div>
    </div>
   </Container>
  </section>
 )
}

export default Featured
