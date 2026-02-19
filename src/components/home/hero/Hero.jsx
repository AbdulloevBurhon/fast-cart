// src/components/home/Hero.jsx

import { TEMP_SLIDES, useHeroSlider } from '../hooks/useHeroSlider'
import { GlowCircle, SlideContent } from './Heroslide'

const SLIDE_STYLES = `
  @keyframes slideInLeft  { from { transform: translateX(56px);  opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  @keyframes slideInRight { from { transform: translateX(-56px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  .slide-enter-left  { animation: slideInLeft  0.42s cubic-bezier(.25,.8,.25,1) both; }
  .slide-enter-right { animation: slideInRight 0.42s cubic-bezier(.25,.8,.25,1) both; }
`

function Hero({ slides = TEMP_SLIDES }) {
 const { current, direction, goTo, swiperHandlers } = useHeroSlider(
  slides.length
 )

 const slide = slides[current]
 if (!slide) return null

 const animClass =
  direction === 'left' ? 'slide-enter-left' : 'slide-enter-right'
 const dotActive = slide.theme?.dotActive ?? '#ef4444'
 const glowColor = slide.theme?.glowColor ?? '#7c3aed'

 return (
  <>
   <style>{SLIDE_STYLES}</style>

   <div
    className="relative w-full rounded-sm overflow-hidden select-none"
    style={{
     background: slide.theme?.bg ?? '#000',
     transition: 'background 0.5s ease'
    }}
    {...swiperHandlers}
   >
    <div key={current} className={animClass}>
     {/* ── DESKTOP ── */}
     <div className="hidden md:flex items-center justify-between px-10 py-10 min-h-[260px]">
      <div className="flex flex-col gap-3 z-10">
       <SlideContent slide={slide} />
      </div>

      <div className="relative flex-shrink-0">
       {slide.image && (
        <img
         src={slide.image}
         alt={slide.brand}
         className="h-[260px] object-contain drop-shadow-2xl"
         // ── Убираем чёрный фон картинки ──────────────────────────
         // Вариант А — если фон баннера тёмный (работает на #000, тёмно-синем):

         // Вариант Б — если А не помог, попробуй 'lighten':
         // style={{ mixBlendMode: 'lighten' }}
         // Вариант В — если картинка JPG с жёстким чёрным фоном:
         // style={{ mixBlendMode: 'multiply' }}  ← НЕ подходит
         //
         // Лучшее решение — удалить фон картинки на remove.bg
         // и заменить banner.png на PNG с прозрачностью
         onError={(e) => {
          e.target.style.display = 'none'
         }}
        />
       )}
       <GlowCircle color={glowColor} />
      </div>
     </div>

     {/* ── MOBILE ── */}
     <div className="flex md:hidden flex-col px-5 pt-8 pb-0">
      <SlideContent slide={slide} isMobile />

      <div className="relative w-full flex justify-center overflow-hidden">
       {slide.image && (
        <img
         src={slide.image}
         alt={slide.brand}
         className="w-full max-w-[300px] object-contain"
         onError={(e) => {
          e.target.style.display = 'none'
         }}
        />
       )}
       <GlowCircle color={glowColor} />
      </div>
     </div>
    </div>

    {/* ── DOTS ── */}
    <div className="flex items-center justify-center gap-2 py-4">
     {slides.map((_, i) => (
      <button
       key={i}
       onClick={() => goTo(i)}
       className="rounded-full transition-all duration-300"
       style={{
        height: 8,
        width: i === current ? 24 : 8,
        background: i === current ? dotActive : 'rgba(255,255,255,0.35)'
       }}
      />
     ))}
    </div>
   </div>
  </>
 )
}

export default Hero
