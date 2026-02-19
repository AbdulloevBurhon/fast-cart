import Container from '../ui/Container'

function AboutStats() {
 const stats = [
  { id: 1, value: '10.5k', label: 'Sellers active' },
  { id: 2, value: '33k', label: 'Monthly Product Sale', highlight: true },
  { id: 3, value: '45.5k', label: 'Customers active' },
  { id: 4, value: '25k', label: 'Annual gross sale' }
 ]

 return (
  <section className="py-16">
   <Container>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
     {stats.map((item) => (
      <div
       key={item.id}
       className={`p-8 rounded-md ${
        item.highlight ? 'bg-red-500 text-white' : 'bg-gray-100'
       }`}
      >
       <h3 className="text-2xl font-bold">{item.value}</h3>
       <p className="text-sm mt-2">{item.label}</p>
      </div>
     ))}
    </div>
   </Container>
  </section>
 )
}

export default AboutStats
