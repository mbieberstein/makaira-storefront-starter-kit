import { Component } from "react"
import Image from "./Image"
import Products from "./Products"
import { MyComponentProps } from "./MyComponentProps"


class MyComponent extends Component<MyComponentProps> {

  render() {

    return (
      <section className="my-component">

        <h2>{this.props.text}</h2>
        <Image {...this.props.image} />
        <Products products={this.props.products} />

      </section>
    )
  }
}

export default MyComponent
export { default as myComponentVariants } from './variants.js'