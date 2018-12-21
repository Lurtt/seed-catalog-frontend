import React from 'react'
import PropTypes from 'prop-types'

const Offer = ({ item }) => <div>{item.name}</div>

Offer.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
}

export default Offer
