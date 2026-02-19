import IconRotate from './IconRotate'
import IconTrash from './IconTrash'

export default function CartActionsDesktop({ removeAll }) {
 return (
  <div className="flex justify-between items-center mt-6">
   <button
    onClick={() => window.history.back()}
    className="flex items-center gap-2 px-6 py-2 rounded border border-gray-800 text-gray-800 text-sm font-medium bg-transparent hover:bg-gray-50 transition"
   >
    <IconRotate /> Return To Shop
   </button>

   <div className="flex gap-3">
    <button className="px-6 py-2 rounded border border-gray-800 text-gray-800 text-sm font-medium bg-transparent hover:bg-gray-50 transition">
     Update Cart
    </button>

    <button
     onClick={removeAll}
     className="flex items-center gap-2 px-6 py-2 rounded border text-sm font-medium bg-transparent hover:bg-red-50 transition"
     style={{ borderColor: '#DB4444', color: '#DB4444' }}
    >
     <IconTrash color="#DB4444" /> Remove all
    </button>
   </div>
  </div>
 )
}
