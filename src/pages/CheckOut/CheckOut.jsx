import CheckoutForm from '../../components/checkout/CheckoutForm'
import OrderSummary from '../../components/checkout/OrderSummary'
import Container from '../../components/ui/Container'

function CheckOut() {
 return (
  <section className="py-16">
   <Container>
    <div className="grid md:grid-cols-2 gap-12">
     <CheckoutForm />
     <OrderSummary />
    </div>
   </Container>
  </section>
 )
}

export default CheckOut
