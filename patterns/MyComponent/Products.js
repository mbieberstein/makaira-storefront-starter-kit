import Product from "./Product"

export default function Products(props) {

    const {
        products = []
    } = props

    return (
        <>
            <div> 
                {products.map(
                    product => <Product key={product.id} product={product}></Product>
                )}
            </div>
        </>
    )
}