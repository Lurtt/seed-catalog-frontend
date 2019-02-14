import PropTypes from 'prop-types'

import { OfferDetail } from '../components'

const Offer = ({ query }) => <OfferDetail id={query.id} />

Offer.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

export default Offer
