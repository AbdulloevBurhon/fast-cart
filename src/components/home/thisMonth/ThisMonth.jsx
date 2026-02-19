import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../../../context/ProductsContext'
import ProductGrid from '../../product/shared/ProductGrid'
import ArrowButton from '../../ui/ArrowButton'
import Container from '../../ui/Container'
import SectionTitle from '../../ui/SectionTitle'

function ThisMonth() {
 const { getBestSellers } = useProducts()
 const scrollRef = useRef(null)

 const displayed = getBestSellers().slice(0, 8)
 console.log('Best Sellers:', displayed)

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
    <div className="flex items-end justify-between mb-10">
     <SectionTitle label="This Month" title="Best Selling Products" />

     <div className="flex items-center gap-4">
      <Link
       to="/products"
       className="px-8 py-3 bg-[#DB4444] text-white text-sm font-medium rounded-sm hover:bg-[#c23a3a] transition-colors"
      >
       View All
      </Link>

      <div className="hidden md:flex items-center gap-2">
       <ArrowButton direction="left" onClick={() => handleScroll('left')} />
       <ArrowButton direction="right" onClick={() => handleScroll('right')} />
      </div>
     </div>
    </div>

    <ProductGrid products={displayed} scrollRef={scrollRef} isSlider={true} />
   </Container>
  </section>
 )
}
export default ThisMonth
