import { createContext, useContext } from 'react'
import { PRODUCTS } from '../data/products'

const ProductsContext = createContext()

export function ProductsProvider({ children }) {
 const getById = (id) => PRODUCTS.find((p) => p.id === id)

 const getBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug)

 const getByCategory = (category) =>
  PRODUCTS.filter((p) => p.category === category)

 const getBestSellers = () => PRODUCTS.filter((p) => p.isBestSeller)

 const getNewArrivals = () => PRODUCTS.filter((p) => p.isNew)

 const getFeatured = () => PRODUCTS.filter((p) => p.isFeatured)

 const getFlashSales = () => PRODUCTS.filter((p) => p.isFlashSale)

 const getDiscount = (price, oldPrice) =>
  oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0

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
    getDiscount
   }}
  >
   {children}
  </ProductsContext.Provider>
 )
}

export const useProducts = () => useContext(ProductsContext)
