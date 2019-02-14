import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const OFFER_QUERY = gql`
  query OFFER_QUERY($id: ID!) {
    offer(id: $id) {
      id
      name
      donors {
        id
        number
        name
      }
      items {
        id
        plant {
          id
          name
        }
        donors {
          number
        }
      }
    }
  }
`

const OfferDetail = ({ id }) => (
  <div>
    <h1>OFFER DETAIL</h1>

    <Query query={OFFER_QUERY} variables={{ id }}>
      {({ data: { offer }, error, loading }) => {
        if (loading) return <h1>Loading...</h1>
        if (error) return <h1>{error.message}</h1>

        return (
          <div>
            <h1>{offer.name}</h1>

            <br />
            <h2>Donors</h2>
            <ul>
              {offer.donors.map(donor => (
                <li key={donor.id}>
                  {donor.number}. {donor.name}
                </li>
              ))}
            </ul>

            <br />
            <h2>Plants</h2>
            <ul>
              {offer.items.map(item => (
                <li key={item.id}>
                  {item.plant.name}, {item.donors.map(donor => donor.number)}
                </li>
              ))}
            </ul>
          </div>
        )
      }}
    </Query>
  </div>
)

OfferDetail.propTypes = {
  id: PropTypes.string.isRequired,
}

export default OfferDetail
