import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Donor from './Donor'

const ALL_DONORS_QUERY = gql`
  query ALL_DONORS_QUERY {
    donors {
      id
      number
      name
    }
  }
`

const Donors = () => (
  <div>
    <h1>DONORS</h1>

    <Query query={ALL_DONORS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <h1>Loading...</h1>
        if (error) return <h1>{error.message}</h1>

        return (
          <ul>
            {data.donors.map(donor => (
              <Donor key={donor.id} item={donor} />
            ))}
          </ul>
        )
      }}
    </Query>
  </div>
)

export default Donors
