import Button from '../ui/Button'

function ContactForm() {
 return (
  <div className="bg-white shadow-md p-8 rounded-md">
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <input type="text" placeholder="Name" className="border p-3 rounded-md" />
    <input type="email" placeholder="Email" className="border p-3 rounded-md" />
    <input type="text" placeholder="Phone" className="border p-3 rounded-md" />
   </div>

   <textarea
    placeholder="Your Message"
    rows="6"
    className="w-full border p-3 rounded-md mb-6"
   ></textarea>

   <div className="flex justify-end">
    <Button className="bg-red-500 hover:bg-red-600 px-8 py-3">
     Send Message
    </Button>
   </div>
  </div>
 )
}

export default ContactForm
