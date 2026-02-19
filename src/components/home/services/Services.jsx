import Container from '../../ui/Container'

function Services() {
 const services = [
  {
   title: 'Free Shipping',
   desc: 'Free shipping for all orders over $140',
   icon: '🚚'
  },
  {
   title: '24/7 Support',
   desc: 'Friendly 24/7 customer support',
   icon: '🎧'
  },
  {
   title: 'Money Back',
   desc: 'We return money within 30 days',
   icon: '🛡'
  }
 ]

 return (
  <section className=" text-white py-16">
   <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
     {services.map((item, index) => (
      <div key={index} className="space-y-4">
       <div className="w-16 h-16 mx-auto rounded-full bg-gray-800 flex items-center justify-center text-2xl">
        {item.icon}
       </div>

       <h3 className="text-lg font-semibold">{item.title}</h3>

       <p className="text-gray-400 text-sm">{item.desc}</p>
      </div>
     ))}
    </div>
   </Container>
  </section>
 )
}

export default Services
