import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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

    <Query query={ALL_OFFERS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <h1>Loading...</h1>
        if (error) return <h1>{error.message}</h1>

        return (
          <ul>
            {data.offers.map(offer => (
              <Offer key={offer.id} item={offer} />
            ))}
          </ul>
        )
      }}
    </Query>
  </div>
)

export default Offers
