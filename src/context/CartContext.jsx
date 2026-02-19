import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
 // 🔥 1. Загружаем из localStorage при старте
 const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem('cart')
  return saved ? JSON.parse(saved) : []
 })

 // 🔥 2. Сохраняем в localStorage при каждом изменении
 useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
 }, [cart])

 const addToCart = (product) => {
  setCart((prev) => {
   const existing = prev.find((item) => item.id === product.id)

   if (existing) {
    return prev.map((item) =>
     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    )
   }

   return [...prev, { ...product, quantity: 1 }]
  })
 }

 const updateQty = (id, qty) => {
  setCart((prev) =>
   prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
  )
 }

 const removeItem = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id))
 }

 const removeAll = () => setCart([])

 const subtotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
 )

 const value = {
  cart,
  addToCart,
  updateQty,
  removeItem,
  removeAll,
  subtotal
 }

 return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
