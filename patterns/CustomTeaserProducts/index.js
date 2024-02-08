import classNames from 'classnames'
import {
  useTranslation,
  useConfiguration,
  getProductDetailUrl,
} from '../../utils'
import { Heading, Button } from '..'

function CustomTeaserProducts(props) {
  const { products = [], variant = 'white' } = props

  if (products.length === 0) return null

  const classes = classNames(
    'custom-product-teaser',
    `custom-product-teaser--${variant}`
  )

  return (
    <section className={classes}>
      {products.map((product) => (
        <Teaser key={product.ean} {...product} />
      ))}
    </section>
  )
}

function Teaser(props) {
  const { t } = useTranslation()
  const { getImageLink } = useConfiguration()
  const { title = '', url = '', images = [] } = props

  const productDetailUrl = getProductDetailUrl({ url })

  const imageLink = getImageLink({
    source: images[0],
    height: 289,
    format: 'auto',
  })

  const imageLinkRetina = getImageLink({
    source: images[0],
    height: 289,
    pixelRatio: 2,
    format: 'auto',
  })

  return (
    <div className="custom-product-teaser__teaser">
      <picture className="custom-product-teaser__teaser-image">
        <img
          src={imageLink}
          srcSet={`${imageLink} 1x, ${imageLinkRetina} 2x`}
          alt={title}
          loading="lazy"
          height="228"
        />
      </picture>
      <div className="custom-product-teaser__content">
        <Heading
          weight="semi-bold"
          element="span"
          className="custom-product-teaser__title"
        >
          {title}
        </Heading>

        <div className="custom-product-teaser__attributes">
          <p>
            Test-Attribut <span>Test-Attribut-Wert</span>
          </p>
          <p>
            Test-Attribut <span>Test-Attribut-Wert</span>
          </p>
          <p>
            Test-Attribut <span>Test-Attribut-Wert</span>
          </p>
          <p>
            Test-Attribut <span>Test-Attribut-Wert</span>
          </p>
        </div>

        <Button
          href={productDetailUrl}
          icon="chevron-right"
          className="custom-product-teaser__button"
        >
          {t('PRODUCT_TILE_TO_PRODUCT')}
        </Button>
      </div>
    </div>
  )
}

export default CustomTeaserProducts
export { default as customTeaserProductsVariants } from './variants.js'
