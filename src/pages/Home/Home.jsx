import HeroCategories from '@/components/home/categoriesBanner/HeroCategories'
import Featured from '@/components/home/featured/Featured'
import HomeTop from '@/components/home/hero/HomeTop'
import OurProducts from '@/components/home/ourProducts/OurProducts'
import Services from '@/components/home/services/Services'
import ThisMonth from '@/components/home/thisMonth/ThisMonth'
import TodayProducts from '@/components/home/toDaysProduct/TodayProducts'

function Home() {
 return (
  <>
   <HomeTop />
   <TodayProducts />
   <HeroCategories />
   <ThisMonth />
   <HeroCategories />
   <OurProducts />
   <Featured />
   <Services />
  </>
 )
}

export default Home
