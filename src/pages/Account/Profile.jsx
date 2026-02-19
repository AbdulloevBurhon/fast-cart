function Profile() {
 return (
  <div className="bg-white p-12 rounded-lg shadow-lg">
   <h2 className="text-red-500 text-xl font-semibold mb-10">Profile</h2>

   {/* FORM GRID */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <input
     type="text"
     placeholder="First name"
     className="border p-4 rounded"
    />

    <input type="text" placeholder="Last name" className="border p-4 rounded" />

    <input
     type="email"
     placeholder="Email address"
     className="border p-4 rounded"
    />

    <input
     type="text"
     placeholder="Street address"
     className="border p-4 rounded"
    />
   </div>

   {/* PASSWORD */}
   <div className="mt-12 space-y-6">
    <h3 className="font-medium">Password Changes</h3>

    <input
     type="password"
     placeholder="Current password"
     className="border p-4 rounded w-full"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     <input
      type="password"
      placeholder="New password"
      className="border p-4 rounded"
     />

     <input
      type="password"
      placeholder="Confirm new password"
      className="border p-4 rounded"
     />
    </div>
   </div>

   {/* BUTTONS */}
   <div className="flex justify-end gap-8 mt-12">
    <button className="text-gray-500 hover:text-black">Cancel</button>

    <button className="bg-red-500 text-white px-10 py-3 rounded hover:bg-red-600 transition">
     Save Changes
    </button>
   </div>
  </div>
 )
}

export default Profile
