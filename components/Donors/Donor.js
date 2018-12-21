import React from 'react'
import PropTypes from 'prop-types'

const Donor = ({ item }) => (
  <div>
    {item.number}. {item.name}
  </div>
)

Donor.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
}

export default Donor
