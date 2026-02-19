// src/context/ProductsContext.jsx

import { createContext, useContext, useState } from 'react'

const PRODUCTS_BY_CATEGORY = {
 electronics: [
  {
   id: 1,
   title: 'HAVIT HV-G92 Gamepad',
   price: 120,
   oldPrice: 160,
   image: '1.png',
   category: 'electronics',
   rating: 4,
   reviews: 88,
   isNew: false
  },
  {
   id: 2,
   title: 'AK-900 Wired Keyboard',
   price: 960,
   oldPrice: 1160,
   image: '2.png',
   category: 'electronics',
   rating: 3,
   reviews: 75,
   isNew: false
  },
  {
   id: 3,
   title: 'IPS LCD Gaming Monitor',
   price: 370,
   oldPrice: 400,
   image: '3.png',
   category: 'electronics',
   rating: 5,
   reviews: 99,
   isNew: false
  },
  {
   id: 5,
   title: 'Wireless Headphones',
   price: 99,
   oldPrice: 130,
   image: '2.png',
   category: 'electronics',
   rating: 4,
   reviews: 45,
   isNew: true
  },
  {
   id: 6,
   title: 'Mechanical Keyboard',
   price: 250,
   oldPrice: 300,
   image: '1.png',
   category: 'electronics',
   rating: 4,
   reviews: 60,
   isNew: true
  },
  {
   id: 7,
   title: 'Gaming Mouse',
   price: 89,
   oldPrice: 110,
   image: '7.png',
   category: 'electronics',
   rating: 5,
   reviews: 120,
   isNew: false
  },
  {
   id: 8,
   title: 'USB-C Hub 7-in-1',
   price: 45,
   oldPrice: 60,
   image: '8.png',
   category: 'electronics',
   rating: 4,
   reviews: 33,
   isNew: true
  }
 ],
 furniture: [
  {
   id: 4,
   title: 'S-Series Comfort Chair',
   price: 375,
   oldPrice: 400,
   image: '4.png',
   category: 'furniture',
   rating: 5,
   reviews: 99,
   isNew: false
  },
  {
   id: 9,
   title: 'Ergonomic Desk',
   price: 599,
   oldPrice: 750,
   image: '4.png',
   category: 'furniture',
   rating: 4,
   reviews: 40,
   isNew: false
  },
  {
   id: 10,
   title: 'Standing Desk Mat',
   price: 49,
   oldPrice: 65,
   image: '4.png',
   category: 'furniture',
   rating: 4,
   reviews: 28,
   isNew: true
  }
 ],
 fashion: [
  {
   id: 11,
   title: 'Classic Hoodie',
   price: 59,
   oldPrice: 80,
   image: '1.png',
   category: 'fashion',
   rating: 4,
   reviews: 55,
   isNew: false
  },
  {
   id: 12,
   title: 'Sport Sneakers',
   price: 89,
   oldPrice: 120,
   image: '2.png',
   category: 'fashion',
   rating: 5,
   reviews: 88,
   isNew: true
  },
  {
   id: 13,
   title: 'Slim Fit Jeans',
   price: 45,
   oldPrice: 60,
   image: '3.png',
   category: 'fashion',
   rating: 4,
   reviews: 33,
   isNew: false
  }
 ],
 phones: [
  {
   id: 14,
   title: 'iPhone 14 Pro',
   price: 999,
   oldPrice: 1099,
   image: '1.png',
   category: 'phones',
   rating: 5,
   reviews: 210,
   isNew: false
  },
  {
   id: 15,
   title: 'Samsung Galaxy S24',
   price: 849,
   oldPrice: 999,
   image: '2.png',
   category: 'phones',
   rating: 5,
   reviews: 180,
   isNew: true
  },
  {
   id: 16,
   title: 'Redmi Note 12',
   price: 199,
   oldPrice: 249,
   image: '3.png',
   category: 'phones',
   rating: 4,
   reviews: 95,
   isNew: false
  }
 ]
}

export const TEMP_PRODUCTS = Object.values(PRODUCTS_BY_CATEGORY).flat()

const ProductsContext = createContext()

export function ProductsProvider({ children }) {
 const [products] = useState(TEMP_PRODUCTS)

 const getByCategory = (category) =>
  products.filter((p) => p.category === category)

 const getById = (id) => products.find((p) => p.id === id) ?? null

 const getDiscount = (price, oldPrice) =>
  oldPrice ? `-${Math.round((1 - price / oldPrice) * 100)}%` : null

 const getNewArrivals = () => products.filter((p) => p.isNew)

 return (
  <ProductsContext.Provider
   value={{
    products,
    getById,
    getByCategory,
    getDiscount,
    getNewArrivals
   }}
  >
   {children}
  </ProductsContext.Provider>
 )
}

export const useProducts = () => useContext(ProductsContext)
