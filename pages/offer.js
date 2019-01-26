import PropTypes from 'prop-types'

const Offer = ({ query }) => <div>offer detail page. Offer ID: {query.id}</div>

Offer.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

export default Offer
