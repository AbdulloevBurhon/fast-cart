// src/components/home/ThisMonth.jsx
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../../../context/ProductsContext'
import ProductGrid from '../../product/shared/ProductGrid'
import ArrowButton from '../../ui/ArrowButton' // Импортируем кнопки
import Container from '../../ui/Container'
import SectionTitle from '../../ui/SectionTitle'

function ThisMonth() {
 const { products } = useProducts()
 const scrollRef = useRef(null)

 // Берем побольше товаров для скролла (например, 8)
 const displayed = products.slice(0, 8)

 const handleScroll = (dir) => {
  if (!scrollRef.current) return
  const scrollAmount = 300 // Шаг прокрутки
  scrollRef.current.scrollBy({
   left: dir === 'left' ? -scrollAmount : scrollAmount,
   behavior: 'smooth'
  })
 }

 return (
  <section className="py-14">
   <Container>
    {/* Шапка секции со стрелками */}
    <div className="flex items-end justify-between mb-10">
     <SectionTitle label="This Month" title="Best Selling Products" />

     <div className="flex items-center gap-4">
      {/* Ссылка "View All" рядом со стрелками или как тебе удобнее по дизайну */}
      <Link
       to="/products"
       className="px-8 py-3 bg-[#DB4444] text-white text-sm font-medium rounded-sm hover:bg-[#c23a3a] transition-colors"
      >
       View All
      </Link>

      {/* Добавляем кнопки управления скроллом */}
      <div className="flex items-center gap-2">
       <ArrowButton direction="left" onClick={() => handleScroll('left')} />
       <ArrowButton direction="right" onClick={() => handleScroll('right')} />
      </div>
     </div>
    </div>

    {/* isSlider={true} — включает flex-nowrap и скролл
          scrollRef — передаем реф, чтобы кнопки могли управлять прокруткой
        */}
    <ProductGrid products={displayed} scrollRef={scrollRef} isSlider={true} />
   </Container>
  </section>
 )
}

export default ThisMonth
