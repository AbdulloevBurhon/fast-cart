import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/Context'
import { router } from './router/router'

function App() {
 return (
  <div className="min-h-screen">
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </div>
 )
}

export default App
