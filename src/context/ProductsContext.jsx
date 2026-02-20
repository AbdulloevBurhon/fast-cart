import { createContext, useContext } from 'react'
import { PRODUCTS } from '../data/products'

const ProductsContext = createContext()

export function ProductsProvider({ children }) {
 // 🔹 Получить продукт по id
 const getById = (id) => PRODUCTS.find((p) => p.id === id)

 // 🔹 Получить продукт по slug
 const getBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug)

 // 🔹 Фильтр по категории
 const getByCategory = (category) =>
  PRODUCTS.filter((p) => p.category === category)

 // 🔹 Разные готовые фильтры
 const getBestSellers = () => PRODUCTS.filter((p) => p.isBestSeller)
 const getNewArrivals = () => PRODUCTS.filter((p) => p.isNew)
 const getFeatured = () => PRODUCTS.filter((p) => p.isFeatured)
 const getFlashSales = () => PRODUCTS.filter((p) => p.isFlashSale)

 // 🔹 Расчёт скидки
 const getDiscount = (price, oldPrice) =>
  oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0

 // ✅ НОВОЕ — получаем список уникальных категорий
 const getCategories = () => {
  return [...new Set(PRODUCTS.map((p) => p.category))]
 }

 return (
  <ProductsContext.Provider
   value={{
    products: PRODUCTS,
    getById,
    getBySlug,
    getByCategory,
    getBestSellers,
    getNewArrivals,
    getFeatured,
    getFlashSales,
    getDiscount,
    getCategories // 👈 добавили в context
   }}
  >
   {children}
  </ProductsContext.Provider>
 )
}

export const useProducts = () => useContext(ProductsContext)
