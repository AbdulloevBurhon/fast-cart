function ContactInfo() {
 return (
  <div className="bg-white shadow-md p-8 rounded-md space-y-8">
   <div>
    <h3 className="font-semibold text-lg mb-3">Call To Us</h3>
    <p className="text-sm text-gray-600">
     We are available 24/7, 7 days a week.
    </p>
    <p className="mt-2">Phone: +8801611112222</p>
   </div>

   <hr />

   <div>
    <h3 className="font-semibold text-lg mb-3">Write To Us</h3>
    <p className="text-sm text-gray-600">
     Fill out our form and we will contact you within 24 hours.
    </p>
    <p className="mt-2">customer@exclusive.com</p>
    <p>support@exclusive.com</p>
   </div>
  </div>
 )
}

export default ContactInfo
