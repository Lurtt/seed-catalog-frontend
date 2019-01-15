import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const DELETE_PLANT_MUTATION = gql`
  mutation DELETE_PLANT_MUTATION($id: ID!) {
    deletePlant(id: $id) {
      id
      name
    }
  }
`

class Plant extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    canRemove: PropTypes.bool.isRequired,
  }

  render = () => {
    const { item, canRemove } = this.props
    return (
      <div>
        <span>{item.name}</span>
        {canRemove && (
          <Mutation
            mutation={DELETE_PLANT_MUTATION}
            variables={{ id: item.id }}
            refetchQueries={['ALL_PLANTS_QUERY']}
          >
            {deleteOffer => (
              <button type="button" onClick={deleteOffer}>
                remove
              </button>
            )}
          </Mutation>
        )}
      </div>
    )
  }
}

export default Plant
