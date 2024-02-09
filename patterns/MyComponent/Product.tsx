import { Component, ReactNode } from "react"
import { ProductProps } from "./MyComponentProps"

class Product extends Component {

    props: {
        product:ProductProps
    }

    render(): ReactNode {
        return(
            <section>
                <div className="product">
                    <h3>{this.props.product.title}</h3>
                    <img src={this.props.product.image}></img>
                    <div>{this.props.product.shortdesc}</div>
                </div>
            </section>
        )
    }
}

export default Product