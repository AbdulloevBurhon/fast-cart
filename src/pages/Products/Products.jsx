import ProductsFilters from '../../components/products/filters/ProductsFilters'
import ProductsHeader from '../../components/products/ProductsHeader'
import ProductsList from '../../components/products/ProductsList'
import Container from '../../components/ui/Container'

function Products() {
 return (
  <section className="py-16">
   <Container>
    <ProductsHeader />

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10">
     {/* LEFT FILTERS */}
     <div className="lg:col-span-1">
      <ProductsFilters />
     </div>

     {/* RIGHT PRODUCTS */}
     <div className="lg:col-span-3">
      <ProductsList />
     </div>
    </div>
   </Container>
  </section>
 )
}

export default Products
