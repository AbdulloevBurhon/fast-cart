import CartItem from './CartItem'

function CartList() {
 const cartItems = [
  {
   id: 1,
   name: 'LCD Monitor',
   price: 650,
   quantity: 1,
   image: 'https://via.placeholder.com/80'
  },
  {
   id: 2,
   name: 'H1 Gamepad',
   price: 550,
   quantity: 2,
   image: 'https://via.placeholder.com/80'
  }
 ]

 return (
  <div className="flex flex-col gap-6">
   {cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
   ))}
  </div>
 )
}

export default CartList
