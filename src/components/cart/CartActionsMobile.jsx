import IconRotate from './IconRotate'
import IconTrash from './IconTrash'

export default function CartActionsMobile({ removeAll }) {
 return (
  <div className="flex items-center justify-between mt-2 mb-5">
   <button
    onClick={() => window.history.back()}
    className="flex items-center gap-2 px-5 py-2 border border-gray-800 rounded text-sm font-medium text-gray-800 bg-transparent"
   >
    <IconRotate /> Return To Shop
   </button>

   <div className="flex items-center gap-3">
    <button className="p-1 text-gray-500 hover:text-gray-800">
     <IconRotate />
    </button>

    <button
     onClick={removeAll}
     className="p-1"
     style={{ background: 'none', border: 'none' }}
    >
     <IconTrash color="#DB4444" />
    </button>
   </div>
  </div>
 )
}
