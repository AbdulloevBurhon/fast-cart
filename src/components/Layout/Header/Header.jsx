import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import Button from '../../ui/Button'
import Container from '../../ui/Container'
import Input from '../../ui/Input'

function Header() {
 const [openMenu, setOpenMenu] = useState(false)
 const navigate = useNavigate()

 const handleUserClick = () => {
  navigate('/login')
 }

 return (
  <header className="bg-white border-b border-gray-300">
   <Container>
    <div className="flex items-center justify-between py-4">
     <div className="flex items-center gap-4">
      <Button
       variant="outline"
       className="md:hidden p-2"
       onClick={() => setOpenMenu(!openMenu)}
      >
       <Menu size={22} />
      </Button>

      <div className="flex items-center">
       <h1 className="text-xl font-bold md:hidden pr-2">Exclusive</h1>
       <img
        src="/logo/logo.png"
        alt="FastCart"
        className="hidden md:block h-8 lg:h-10 xl:h-12 w-auto"
       />
      </div>
     </div>

     <nav className="hidden md:flex gap-8 font-medium">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/signUp">Sign Up</NavLink>
     </nav>

     <div className="flex items-center gap-4">
      <div className="hidden lg:flex items-center">
       <Input
        placeholder="What are you looking for?"
        leftIcon={<Search size={16} />}
        height="36px"
        width="250px"
       />
      </div>

      <NavLink to="/wishlist">
       <Heart size={20} />
      </NavLink>

      <NavLink to="/cart">
       <ShoppingCart size={20} />
      </NavLink>

      <Button variant="outline" className="p-2" onClick={handleUserClick}>
       <User size={20} />
      </Button>
     </div>
    </div>

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
