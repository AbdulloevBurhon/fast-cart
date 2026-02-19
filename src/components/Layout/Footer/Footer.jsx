import { Link } from 'react-router-dom'
import Container from '../../ui/Container'

function Footer() {
 return (
  <footer className="bg-black text-white pt-16 pb-8">
   <Container>
    {/* TOP */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
     {/* Exclusive */}
     <div>
      <h2 className="text-xl font-semibold mb-4">Exclusive</h2>

      <p className="mb-4 font-medium">Subscribe</p>

      <p className="text-gray-400 text-sm mb-4">Get 10% off your first order</p>

      <div className="flex border border-gray-500 rounded overflow-hidden">
       <input
        type="email"
        placeholder="Enter your email"
        className="bg-black px-4 py-2 text-sm outline-none w-full"
       />
       <button className="px-4 hover:bg-gray-800 transition">➤</button>
      </div>
     </div>

     {/* Support */}
     <div>
      <h2 className="text-xl font-semibold mb-4">Support</h2>

      <p className="text-gray-400 text-sm mb-2">
       111 Bijoy sarani, Dhaka,
       <br />
       DH 1515, Bangladesh.
      </p>

      <a
       href="mailto:exclusive@gmail.com"
       className="block text-gray-400 text-sm mb-2 hover:text-white transition"
      >
       exclusive@gmail.com
      </a>

      <a
       href="tel:+8801588889999"
       className="text-gray-400 text-sm hover:text-white transition"
      >
       +88015-88888-9999
      </a>
     </div>

     {/* Account */}
     <div>
      <h2 className="text-xl font-semibold mb-4">Account</h2>

      <ul className="space-y-2 text-gray-400 text-sm">
       <li>
        <Link to="/account" className="hover:text-white transition">
         My Account
        </Link>
       </li>
       <li>
        <Link to="/cart" className="hover:text-white transition">
         Cart
        </Link>
       </li>
       <li>
        <Link to="/wishlist" className="hover:text-white transition">
         Wishlist
        </Link>
       </li>
       <li>
        <Link to="/products" className="hover:text-white transition">
         Shop
        </Link>
       </li>
      </ul>
     </div>

     {/* Quick Link */}
     <div>
      <h2 className="text-xl font-semibold mb-4">Quick Link</h2>

      <ul className="space-y-2 text-gray-400 text-sm">
       <li>
        <Link to="/privacy" className="hover:text-white transition">
         Privacy Policy
        </Link>
       </li>
       <li>
        <Link to="/terms" className="hover:text-white transition">
         Terms Of Use
        </Link>
       </li>
       <li>
        <Link to="/faq" className="hover:text-white transition">
         FAQ
        </Link>
       </li>
       <li>
        <Link to="/contact" className="hover:text-white transition">
         Contact
        </Link>
       </li>
      </ul>
     </div>

     {/* Social */}
     <div>
      <h2 className="text-xl font-semibold mb-4">Social</h2>

      <div className="flex gap-4 text-xl">
       <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-300 transition"
       >
        f
       </a>
       <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-300 transition"
       >
        𝕏
       </a>
       <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-300 transition"
       >
        📷
       </a>
       <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-300 transition"
       >
        in
       </a>
      </div>
     </div>
    </div>

    {/* BOTTOM */}
    <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
     © Copyright Rimel 2022. All right reserved
    </div>
   </Container>
  </footer>
 )
}

export default Footer
