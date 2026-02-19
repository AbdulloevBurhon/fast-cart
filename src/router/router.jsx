import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import About from '../pages/About/About'
import Account from '../pages/Account/Account'
import Orders from '../pages/Account/Orders'
import Profile from '../pages/Account/Profile'
import Cart from '../pages/Cart/Cart'
import CheckOut from '../pages/CheckOut/CheckOut'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Products from '../pages/Products/Products'
import SignUp from '../pages/SignUp/SignUp'
import Wishlist from '../pages/Wishlist/WishList'

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Layout />,
  children: [
   { index: true, element: <Home /> },
   { path: 'about', element: <About /> },
   { path: 'contact', element: <Contact /> },
   { path: 'signUp', element: <SignUp /> },
   { path: '*', element: <NotFound /> },
   { path: 'cart', element: <Cart /> },
   { path: 'login', element: <Login /> },
   { path: 'wishlist', element: <Wishlist /> },
   {
    path: 'account',
    element: <Account />,
    children: [
     { index: true, element: <Profile /> },
     { path: 'orders', element: <Orders /> }
    ]
   },
   { path: 'checkout', element: <CheckOut /> },

   { path: 'products', element: <Products /> },
   { path: 'products/:id', element: <ProductDetails /> }
  ]
 }
])
