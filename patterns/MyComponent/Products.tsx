import { Component, ReactNode } from "react"
import { ProductProps } from "./MyComponentProps"
import Product from "./Product"

class Products extends Component {

    props: { 
        products: Array<ProductProps>
    }

    render(): ReactNode {
        return (
            <>
                <div> 
                    {this.props.products.map(
                        product => <Product key={product.id} product={product}></Product>
                    )}
                </div>
            </>
        )
    }
}

export default Products