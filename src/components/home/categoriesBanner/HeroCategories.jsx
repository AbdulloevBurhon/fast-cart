import Container from '../../ui/Container'
import TimeUnit from './TimeUnit'

function HeroCategories() {
 return (
  <section className="py-10 md:py-16">
   <Container>
    <div className="bg-black rounded-sm overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-14 lg:px-16 gap-10">
     {/* Контентная часть */}
     <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
      <span className="text-[#00FF66] font-semibold text-sm mb-6">
       Categories
      </span>

      <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-8 max-w-[440px]">
       Enhance Your Music Experience
      </h2>

      {/* Таймер */}
      <div className="flex gap-4 mb-10">
       <TimeUnit value="23" label="Hours" />
       <TimeUnit value="05" label="Days" />
       <TimeUnit value="59" label="Minutes" />
       <TimeUnit value="35" label="Seconds" />
      </div>

      <button className="bg-[#00FF66] text-white px-10 py-4 rounded-sm font-medium hover:bg-[#00ee5f] transition-colors">
       Buy Now!
      </button>
     </div>

     {/* Изображение с эффектом свечения */}
     <div className="relative w-full md:w-1/2 flex justify-center items-center">
      {/* Мягкое свечение (Ambient Light) */}
      <div className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-white/10 blur-[60px] md:blur-[100px] rounded-full" />

      <img
       src="categ.png"
       alt="JBL Speaker"
       className="relative z-10 w-full max-w-[500px] object-contain"
      />
     </div>
    </div>
   </Container>
  </section>
 )
}

export default HeroCategories
