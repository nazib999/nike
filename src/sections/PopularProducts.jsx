import Card from "../components/Card"
import { products } from "../contants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">Popular Products</h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique tenetur, deleniti fuga nihil veritatis!</p>

        </div>
        <div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-16">
            {products.map(product => (
                <Card key={product.name} {...product}/>))}
        </div>
    </section>
  )
}

export default PopularProducts