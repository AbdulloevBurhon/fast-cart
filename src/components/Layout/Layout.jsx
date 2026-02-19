// Layout.jsx
// main НЕ оборачивает в Container — каждая секция сама решает нужна ли ей max-w

import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import ScrollToTop from './ScrollToTop'

function Layout() {
 return (
  <div className="min-h-screen flex flex-col">
   <ScrollToTop />

   <Header />

   {/* Без Container — каждая секция сама управляет своей шириной */}
   <main className="flex-1">
    <Outlet />
   </main>

   <Footer />
  </div>
 )
}

export default Layout
