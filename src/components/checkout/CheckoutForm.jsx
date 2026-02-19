function CheckoutForm() {
 return (
  <div>
   <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

   <form className="flex flex-col gap-4">
    <input
     type="text"
     placeholder="First Name"
     className="border p-3 rounded"
    />

    <input type="text" placeholder="Last Name" className="border p-3 rounded" />

    <input
     type="text"
     placeholder="Street Address"
     className="border p-3 rounded"
    />

    <input
     type="text"
     placeholder="Town / City"
     className="border p-3 rounded"
    />

    <input
     type="text"
     placeholder="Phone Number"
     className="border p-3 rounded"
    />

    <input
     type="email"
     placeholder="Email Address"
     className="border p-3 rounded"
    />

    <label className="flex items-center gap-2 mt-2">
     <input type="checkbox" />
     Save this information for faster check-out next time
    </label>
   </form>
  </div>
 )
}

export default CheckoutForm
