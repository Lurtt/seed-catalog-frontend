import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { UserConsumer } from '..'
import Offer from './Offer'

const ALL_OFFERS_QUERY = gql`
  query ALL_OFFERS_QUERY {
    offers {
      id
      name
    }
  }
`

const Offers = () => (
  <div>
    <h1>OFFERS</h1>
    <UserConsumer>
      {({ isAdmin }) => (
        <Query query={ALL_OFFERS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <h1>Loading...</h1>
            if (error) return <h1>{error.message}</h1>

            return (
              <ul>
                {data.offers.map(offer => (
                  <Offer key={offer.id} item={offer} canRemove={isAdmin} />
                ))}
              </ul>
            )
          }}
        </Query>
      )}
    </UserConsumer>
  </div>
)

export { ALL_OFFERS_QUERY }
export default Offers
