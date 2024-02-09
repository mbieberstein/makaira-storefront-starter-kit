import { useConfiguration } from '../../utils'
import { ImageProps } from './MyComponentProps';

export default function Image(props) {
  
  const { getImageLink } = useConfiguration()
  const data:ImageProps = props as ImageProps;
  
  if(!data.image) {
    return null;
  }

  const imageLink = getImageLink({ source: data.image, format: 'auto' })
  return (
    <picture className="duo-teaser__image">
      <img src={imageLink} alt={data.alt} loading="lazy" />
    </picture>
  )
}
