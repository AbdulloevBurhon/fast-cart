import Container from '../ui/Container'

function AboutHero() {
 return (
  <section className="py-20">
   <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     {/* LEFT */}
     <div className="space-y-6">
      <h2 className="text-4xl font-bold">Our Story</h2>

      <p className="text-gray-600">
       Launched in 2015, Exclusive is South Asia’s premier online shopping
       marketplace.
      </p>

      <p className="text-gray-600">
       Exclusive has more than 1 Million products to offer. Growing at a very
       fast pace, Exclusive offers a diverse assortment.
      </p>
     </div>

     {/* RIGHT */}
     <div>
      <img src="/about-hero.png" alt="about" className="w-full rounded-md" />
     </div>
    </div>
   </Container>
  </section>
 )
}

export default AboutHero
