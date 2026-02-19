// ─── Внутренние SVG Компоненты (Заменяют HeroIcons) ─────────────────────

const ChevronLeft = () => (
 <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
 >
  <path d="M15 18l-6-6 6-6" />
 </svg>
)

const ChevronRight = () => (
 <svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
 >
  <path d="M9 18l6-6 6-6" transform="rotate(180 12 12)" />
 </svg>
)

const ArrowIcon = ({ color }) => (
 <svg
  width="19"
  height="16"
  viewBox="0 0 19 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
 >
  <path
   d="M1.5 8H18M18 8L11 1M18 8L11 15"
   stroke={color}
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
  />
 </svg>
)

const BrandLogo = ({ slide, size }) => {
 // Если в данных слайда есть ссылка на логотип, выводим его, иначе пустой блок
 if (!slide.brandLogo) return <div style={{ width: size, height: size }} />
 return (
  <img
   src={slide.brandLogo}
   alt={slide.brand}
   style={{ width: size, height: 'auto', objectFit: 'contain' }}
  />
 )
}

// ─── Текст слайда + CTA ──────────────────────────────────────────────────
export function SlideContent({ slide, isMobile = false }) {
 const titleLines = slide.title.split('\n')
 const color = slide.theme?.textColor ?? 'white'

 return (
  <>
   <div className="flex items-center gap-3 mb-4">
    <BrandLogo slide={slide} size={isMobile ? 24 : 40} />
    <span
     style={{ color }}
     className={`tracking-wide ${isMobile ? 'text-xs' : 'text-sm'}`}
    >
     {slide.brand}
    </span>
   </div>

   <h2
    style={{ color }}
    className={`font-bold leading-tight tracking-tight ${
     isMobile ? 'text-[2rem] mb-4' : 'text-[3rem] mb-5'
    }`}
   >
    {titleLines.map((line, i) => (
     <span key={i}>
      {line}
      {i < titleLines.length - 1 && <br />}
     </span>
    ))}
   </h2>

   <a
    href={slide.ctaLink}
    style={{ color, borderColor: `${color}80` }}
    className={`inline-flex items-center gap-2 text-sm font-medium border-b pb-1 w-fit hover:opacity-60 transition-opacity ${
     isMobile ? 'mb-6' : 'mt-1'
    }`}
   >
    {slide.ctaText}
    <ArrowIcon color={color} />
   </a>
  </>
 )
}

// ─── Свечение за изображением ─────────────────────────────────────────────
export function GlowCircle({ color }) {
 return (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
   <div
    className="w-64 h-64 rounded-full opacity-30"
    style={{
     background: `radial-gradient(circle, ${color} 0%, transparent 75%)`,
     filter: 'blur(30px)'
    }}
   />
  </div>
 )
}

// ─── Кнопка навигации со стрелкой ────────────────────────────────────────
export function NavButtons({ onPrev, onNext }) {
 const btnStyle = {
  background: 'rgba(255,255,255,0.10)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.2)'
 }

 return (
  <>
   <button
    onClick={onPrev}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/20 active:scale-90"
    style={btnStyle}
    aria-label="Previous slide"
   >
    <ChevronLeft />
   </button>
   <button
    onClick={onNext}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/20 active:scale-90"
    style={btnStyle}
    aria-label="Next slide"
   >
    <ChevronRight />
   </button>
  </>
 )
}
