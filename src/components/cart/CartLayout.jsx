import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import Container from '../ui/Container'
import CartList from './CartList'

function CartLayout() {
 const navigate = useNavigate()

 return (
  <section className="py-16">
   <Container>
    {/* Breadcrumb */}
    <div className="text-sm text-gray-500 mb-6">Home / Cart</div>

    {/* Header */}
    <div className="grid grid-cols-4 font-semibold border-b pb-4 mb-6">
     <span>Product</span>
     <span>Price</span>
     <span>Quantity</span>
     <span>Subtotal</span>
    </div>

    <CartList />

    {/* Buttons Row */}
    <div className="flex justify-between mt-10">
     <Button
      onClick={() => navigate('/products')}
      className="border border-gray-400 bg-transparent"
     >
      Return To Shop
     </Button>

     <div className="flex gap-4">
      <Button className="border border-gray-400 bg-transparent">
       Update Cart
      </Button>

      <Button className="border border-red-500 text-red-500 bg-transparent">
       Remove All
      </Button>
     </div>
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
     {/* Coupon */}
     <div className="flex gap-4">
      <input
       type="text"
       placeholder="Coupon Code"
       className="border p-2 w-full"
      />
      <Button className="border border-red-500 text-red-500 bg-transparent">
       Apply
      </Button>
     </div>

     {/* Cart Total */}
     <div className="border p-6 rounded-md">
      <h2 className="text-lg font-bold mb-4">Cart Total</h2>

      <div className="flex justify-between mb-2">
       <span>Subtotal:</span>
       <span>$1750</span>
      </div>

      <div className="flex justify-between mb-4">
       <span>Shipping:</span>
       <span>Free</span>
      </div>

      <div className="flex justify-between font-bold text-lg mb-6">
       <span>Total:</span>
       <span>$1750</span>
      </div>

      <Button
       onClick={() => navigate('/checkout')}
       className="bg-red-500 w-full"
      >
       Proceed to Checkout
      </Button>
     </div>
    </div>
   </Container>
  </section>
 )
}

export default CartLayout
