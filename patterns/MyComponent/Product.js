export default function Product(props) {

    const {
        product = {}
    } = props

    return(
        <section>
            <div>{product.title}</div>
        </section>
    )
}