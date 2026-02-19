import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/Context'

import Button from '../../ui/Button'
import Container from '../../ui/Container'
import Input from '../../ui/Input'

function Header() {
 const [openUser, setOpenUser] = useState(false)
 const [openMenu, setOpenMenu] = useState(false)

 const { user, logout } = useAuth()
 const navigate = useNavigate()

 const handleUserClick = () => {
  if (!user) {
   navigate('/login')
  } else {
   setOpenUser((prev) => !prev)
  }
 }

 return (
  <header className="bg-white border-b border-gray-300">
   <Container>
    <div className="flex items-center justify-between py-4">
     {/* LEFT */}
     <div className="flex items-center gap-4">
      <Button
       variant="outline"
       className="md:hidden p-2"
       onClick={() => setOpenMenu(!openMenu)}
      >
       <Menu size={22} />
      </Button>

      {/* LOGO */}
      <div className="flex items-center">
       {/* Mobile — текст */}
       <h1 className="text-xl font-bold md:hidden pr-2">Exclusive</h1>

       {/* Desktop — картинка */}
       <img
        src="/logo/logo.png"
        alt="FastCart"
        className="hidden md:block h-8 lg:h-10 xl:h-12 w-auto"
       />
      </div>
     </div>

     {/* NAVIGATION (desktop only) */}
     <nav className="hidden md:flex gap-8 font-medium">
      <NavLink to="/" className="hover:text-red-500 transition">
       Home
      </NavLink>
      <NavLink to="/contact" className="hover:text-red-500 transition">
       Contact
      </NavLink>
      <NavLink to="/about" className="hover:text-red-500 transition">
       About
      </NavLink>
      <NavLink to="/signUp" className="hover:text-red-500 transition">
       Sign Up
      </NavLink>
     </nav>

     {/* RIGHT */}
     <div className="flex items-center gap-4 relative">
      {/* 🔎 Desktop Search ONLY */}
      <div className="hidden lg:flex items-center">
       <Input
        placeholder="What are you looking for?"
        leftIcon={<Search size={16} />}
        height="36px"
        width="250px"
       />
      </div>

      <NavLink to="/wishlist" className="hover:text-red-500 transition">
       <Heart size={20} />
      </NavLink>

      <NavLink to="/cart" className="hover:text-red-500 transition">
       <ShoppingCart size={20} />
      </NavLink>

      {/* USER */}
      <div className="relative">
       <Button variant="outline" className="p-2" onClick={handleUserClick}>
        <User size={20} />
       </Button>

       {openUser && user && (
        <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md border z-50">
         <NavLink
          to="/account"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setOpenUser(false)}
         >
          Account
         </NavLink>

         <NavLink
          to="/account/orders"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setOpenUser(false)}
         >
          My Orders
         </NavLink>

         <button
          onClick={() => {
           logout()
           setOpenUser(false)
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
         >
          Logout
         </button>
        </div>
       )}
      </div>
     </div>
    </div>

    {/* MOBILE MENU */}
    {openMenu && (
     <div className="md:hidden pb-4 flex flex-col gap-4 font-medium border-t pt-4">
      <NavLink to="/" onClick={() => setOpenMenu(false)}>
       Home
      </NavLink>
      <NavLink to="/contact" onClick={() => setOpenMenu(false)}>
       Contact
      </NavLink>
      <NavLink to="/about" onClick={() => setOpenMenu(false)}>
       About
      </NavLink>
      <NavLink to="/signUp" onClick={() => setOpenMenu(false)}>
       Sign Up
      </NavLink>
     </div>
    )}
   </Container>
  </header>
 )
}

export default Header
