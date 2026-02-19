import { NavLink } from 'react-router-dom'

function AccountSidebar() {
 return (
  <div className="space-y-8 text-sm">
   <div>
    <h3 className="font-semibold mb-4">Manage My Account</h3>

    <ul className="space-y-3">
     <li>
      <NavLink
       to="/account"
       end
       className={({ isActive }) =>
        isActive ? 'text-red-500 font-medium' : 'text-gray-600 hover:text-black'
       }
      >
       My Profile
      </NavLink>
     </li>

     <li>
      <NavLink
       to="/account/orders"
       className={({ isActive }) =>
        isActive ? 'text-red-500 font-medium' : 'text-gray-600 hover:text-black'
       }
      >
       My Orders
      </NavLink>
     </li>
    </ul>
   </div>
  </div>
 )
}

export default AccountSidebar
