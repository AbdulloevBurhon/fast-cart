function Orders() {
 const orders = [
  {
   id: 'ORD-1001',
   date: '18 Feb 2026',
   status: 'Delivered',
   total: 1750
  },
  {
   id: 'ORD-1002',
   date: '10 Feb 2026',
   status: 'Processing',
   total: 960
  }
 ]

 return (
  <div>
   <h2 className="text-2xl font-bold mb-6">My Orders</h2>

   <div className="flex flex-col gap-4">
    {orders.map((order) => (
     <div
      key={order.id}
      className="border p-4 rounded flex justify-between items-center"
     >
      <div>
       <p className="font-semibold">{order.id}</p>
       <p className="text-sm text-gray-500">{order.date}</p>
      </div>

      <div>
       <p>Status: {order.status}</p>
       <p>Total: ${order.total}</p>
      </div>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Orders
