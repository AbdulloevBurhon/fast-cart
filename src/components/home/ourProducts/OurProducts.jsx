// src/components/home/OurProducts.jsx
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useProducts } from '../../../context/ProductsContext'
import ProductGrid from '../../product/shared/ProductGrid'
import ArrowButton from '../../ui/ArrowButton'
import Container from '../../ui/Container'
import SectionTitle from '../../ui/SectionTitle'

function OurProducts() {
 const { products } = useProducts()
 const scrollRef = useRef(null)

 // Берем первые 8 товаров
 const displayedProducts = products.slice(0, 8)

 const handleScroll = (dir) => {
  if (!scrollRef.current) return
  const scrollAmount = 300 // Скорость/дистанция прокрутки
  scrollRef.current.scrollBy({
   left: dir === 'left' ? -scrollAmount : scrollAmount,
   behavior: 'smooth'
  })
 }

 return (
  <section className="py-14">
   <Container>
    {/* Заголовок секции и Кнопки управления */}
    <div className="flex items-end justify-between mb-10">
     <SectionTitle label="Our Products" title="Explore Our Products" />

     {/* Стрелки навигации (карусель) */}
     <div className="hidden md:flex items-center gap-2">
      <ArrowButton direction="left" onClick={() => handleScroll('left')} />
      <ArrowButton direction="right" onClick={() => handleScroll('right')} />
     </div>
    </div>

    {/* Передаем isSlider={true}, чтобы включить режим прокрутки (карусель).
          scrollRef нужен для управления прокруткой через кнопки.
        */}
    <ProductGrid
     products={displayedProducts}
     scrollRef={scrollRef}
     isSlider={true}
    />

    {/* Кнопка View All Products внизу */}
    <div className="flex justify-center mt-12">
     <NavLink to="/products">
      <button className="px-12 py-4 bg-[#DB4444] text-white rounded-sm hover:bg-[#c23a3a] transition-all font-medium text-sm">
       View All Products
      </button>
     </NavLink>
    </div>
   </Container>
  </section>
 )
}

export default OurProducts
