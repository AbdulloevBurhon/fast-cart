import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Context'

function Login() {
 const { login } = useAuth()
 const navigate = useNavigate()

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()

  if (email === 'admin@gmail.com' && password === '1234') {
   login({ email })
   navigate('/')
  } else {
   alert('Wrong email or password')
  }
 }

 return (
  <div className="flex justify-center items-center min-h-[70vh]">
   <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
    <h2 className="text-2xl font-bold text-center">Login</h2>

    <input
     type="email"
     placeholder="Email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="border p-2 rounded"
    />

    <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     className="border p-2 rounded"
    />

    <button type="submit" className="bg-red-500 text-white py-2 rounded">
     Log In
    </button>
   </form>
  </div>
 )
}

export default Login
