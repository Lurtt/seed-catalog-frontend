import PropTypes from 'prop-types'

const Plant = ({ item }) => <div>{item.name}</div>

Plant.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
}

export default Plant
