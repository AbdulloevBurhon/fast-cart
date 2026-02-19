// src/components/home/TodayProducts.jsx
import { useMemo, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useProducts } from '../../../context/ProductsContext'
import ProductGrid from '../../product/shared/ProductGrid'
import ArrowButton from '../../ui/ArrowButton'
import Container from '../../ui/Container'
import SectionTitle from '../../ui/SectionTitle'
import { Timer } from './Timer'

function TodayProducts() {
 const { products } = useProducts()
 const scrollRef = useRef(null)
 // eslint-disable-next-line react-hooks/purity
 const saleEnd = useMemo(() => Date.now() + 328000000, [])

 const handleScroll = (dir) => {
  if (!scrollRef.current) return
  const scrollAmount = 300
  scrollRef.current.scrollBy({
   left: dir === 'left' ? -scrollAmount : scrollAmount,
   behavior: 'smooth'
  })
 }

 return (
  <section className="py-14">
   <Container>
    <div className="flex items-end justify-between gap-4 mb-8">
     <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-20">
      <SectionTitle label="Today's" title="Flash Sales" />
      <Timer targetDate={saleEnd} />
     </div>
     <div className="flex items-center gap-2 pb-1">
      <ArrowButton direction="left" onClick={() => handleScroll('left')} />
      <ArrowButton direction="right" onClick={() => handleScroll('right')} />
     </div>
    </div>

    {/* ПЕРЕДАЕМ isSlider={true} */}
    <ProductGrid products={products} scrollRef={scrollRef} isSlider={true} />

    {/* Кнопка View All внизу (как на макете) */}
    <div className="flex justify-center mt-10">
     <NavLink to={'/products'}>
      <button className="px-12 py-4 bg-[#DB4444] text-white rounded-sm hover:bg-[#c23a3a] transition-all">
       View All Products
      </button>
     </NavLink>
    </div>
    <div className="border-b border-gray-200 mt-14" />
   </Container>
  </section>
 )
}

export default TodayProducts
