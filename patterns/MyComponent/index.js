import { Component } from "react"
import Image from "./Image"
import Products from "./Products"


class MyComponent extends Component {

  render() {

    const {
      text = 'Text',
      image = {},
      products = []
    } = this.props

    return (
      <section className="my-component">

        <div>{text}</div>
        <Image {...image} />
        <Products products={products} />

      </section>
    )
  }
}

export default MyComponent
export { default as myComponentVariants } from './variants.js'