import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartContext'
import { ProductsProvider } from './context/ProductsContext'
import { WishlistProvider } from './context/WishlistContext'
import './index.css'

createRoot(document.getElementById('root')).render(
 //  <StrictMode>
 <ProductsProvider>
  <CartProvider>
   <WishlistProvider>
    <App />
   </WishlistProvider>
  </CartProvider>
 </ProductsProvider>
 //  </StrictMode>
)
