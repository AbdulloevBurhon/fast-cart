import { NavLink } from 'react-router-dom'

function SignUp() {
 return (
  <section className="bg-gray-100 min-h-screen flex items-center justify-center py-20">
   <div className="w-full max-w-md bg-transparent">
    {/* TITLE */}
    <div className="mb-10 text-center">
     <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
     <p className="text-gray-500 text-sm">Enter your details below</p>
    </div>

    {/* FORM */}
    <form className="space-y-5">
     <input
      type="text"
      placeholder="Name"
      className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
     />

     <input
      type="text"
      placeholder="Email or phone number"
      className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
     />

     <input
      type="password"
      placeholder="Password"
      className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
     />

     {/* Create Account */}
     <button
      type="submit"
      className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition"
     >
      Create Account
     </button>

     {/* Google */}
     <button
      type="button"
      className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 transition"
     >
      <img src="/google.svg" alt="google" className="w-5 h-5" />
      Sign up with Google
     </button>
    </form>

    {/* LOGIN LINK */}
    <p className="text-center text-sm text-gray-500 mt-6">
     Already have account?{' '}
     <NavLink to="/login" className="text-black underline">
      Log in
     </NavLink>
    </p>
   </div>
  </section>
 )
}

export default SignUp
