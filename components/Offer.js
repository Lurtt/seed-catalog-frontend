import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { ALL_OFFERS_QUERY } from '.'

const DELETE_OFFER_MUTATION = gql`
  mutation DELETE_OFFER_MUTATION($id: ID!) {
    deleteOffer(id: $id) {
      id
      name
    }
  }
`
class Offer extends PureComponent {
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
            mutation={DELETE_OFFER_MUTATION}
            variables={{ id: item.id }}
            refetchQueries={[{ query: ALL_OFFERS_QUERY }]}
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

export { DELETE_OFFER_MUTATION }
export default Offer
