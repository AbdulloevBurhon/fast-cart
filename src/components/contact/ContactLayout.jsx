import Container from '../ui/Container'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

function ContactLayout() {
 return (
  <section className="py-16">
   <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
     <ContactInfo />
     <ContactForm />
    </div>
   </Container>
  </section>
 )
}

export default ContactLayout
