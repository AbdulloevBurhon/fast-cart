import { Outlet } from 'react-router-dom'
import Container from '../ui/Container'
import AccountSidebar from './AccountSidebar'

function AccountLayout() {
 return (
  <section className="bg-gray-100 min-h-screen py-20">
   <Container>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
     {/* Sidebar */}
     <div className="lg:col-span-1">
      <AccountSidebar />
     </div>

     {/* Content */}
     <div className="lg:col-span-3">
      <Outlet />
     </div>
    </div>
   </Container>
  </section>
 )
}

export default AccountLayout
