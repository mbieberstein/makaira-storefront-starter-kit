import { useEffect } from 'react'
import { useConfiguration } from '../../../utils'
import { ConditionalLink } from '../..'
import matomo from '../../../utils/core/tracking/matomo'

// TODO: Define your own breakpoints for switching between mobile and desktop image
// TODO: Add custom behaviour for differenz banner-types
export default function Banner(props) {
  const { getImageLink } = useConfiguration()
  const {
    title = '',
    link = '',
    imageMobile = '',
    imageDesktop = '',
    viewTrackingId,
    clickTrackingId,
  } = props

  let imageLinkMobile
  if (imageMobile) {
    imageLinkMobile = getImageLink({ source: imageMobile })
  }

  const imageLinkDesktop = getImageLink({ source: imageDesktop })

  const trackGoal = (id) => {
    if (!id) return

    matomo.trackGoal(id)
  }

  useEffect(() => {
    trackGoal(viewTrackingId)
  }, [])

  return (
    <ConditionalLink
      onClick={() => trackGoal(clickTrackingId)}
      href={link}
      className="product-list__banner"
    >
      <picture>
        <source data-srcset={imageLinkDesktop} />
        {imageLinkMobile && <source data-srcset={imageLinkDesktop} />}
        <img data-src={imageLinkDesktop} alt={title} />
      </picture>
    </ConditionalLink>
  )
}
