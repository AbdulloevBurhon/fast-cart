// src/components/productDetails/DeliveryInfo.jsx

function DeliveryInfo() {
 return (
  <div className="border rounded mt-8">
   <div className="flex items-center gap-4 p-4 border-b">
    🚚
    <div>
     <p className="font-medium">Free Delivery</p>
     <p className="text-sm text-gray-500">
      Enter your postal code for Delivery Availability
     </p>
    </div>
   </div>

   <div className="flex items-center gap-4 p-4">
    🔄
    <div>
     <p className="font-medium">Return Delivery</p>
     <p className="text-sm text-gray-500">Free 30 Days Delivery Returns</p>
    </div>
   </div>
  </div>
 )
}

export default DeliveryInfo
