import Container from '../ui/Container'

function AboutTeam() {
 const team = [
  {
   id: 1,
   name: 'Tom Cruise',
   role: 'Founder & Chairman',
   image: '/team1.png'
  },
  {
   id: 2,
   name: 'Emma Watson',
   role: 'Managing Director',
   image: '/team2.png'
  },
  { id: 3, name: 'Will Smith', role: 'Product Designer', image: '/team3.png' }
 ]

 return (
  <section className="py-20">
   <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
     {team.map((member) => (
      <div key={member.id} className="text-center space-y-4">
       <img
        src={member.image}
        alt={member.name}
        className="w-full rounded-md"
       />

       <h4 className="font-semibold text-lg">{member.name}</h4>
       <p className="text-gray-500 text-sm">{member.role}</p>
      </div>
     ))}
    </div>
   </Container>
  </section>
 )
}

export default AboutTeam
