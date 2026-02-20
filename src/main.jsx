import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { CartProvider } from './context/CartContext'
import { ProductsProvider } from './context/ProductsContext'
import { WishlistProvider } from './context/WishlistContext'
import './index.css'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
 //  <StrictMode>
 <Provider store={store}>
  <ProductsProvider>
   <CartProvider>
    <WishlistProvider>
     <App />
    </WishlistProvider>
   </CartProvider>
  </ProductsProvider>
 </Provider>
 //  </StrictMode>
)
