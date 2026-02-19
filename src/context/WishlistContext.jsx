import { createContext, useContext, useState } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
 const [wishlist, setWishlist] = useState([])

 const toggleWishlist = (product) => {
  setWishlist((prev) =>
   prev.find((item) => item.id === product.id)
    ? prev.filter((item) => item.id !== product.id)
    : [...prev, product]
  )
 }

 return (
  <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
   {children}
  </WishlistContext.Provider>
 )
}

export const useWishlist = () => useContext(WishlistContext)
