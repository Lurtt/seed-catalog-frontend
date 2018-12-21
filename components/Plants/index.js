import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Plant from './Plant'

const ALL_PLANTS_QUERY = gql`
  query ALL_PLANTS_QUERY {
    plants {
      id
      name
    }
  }
`

const Plants = () => (
  <div>
    <h1>PLANTS</h1>

    <Query query={ALL_PLANTS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <h1>Loading...</h1>
        if (error) return <h1>{error.message}</h1>

        return (
          <ul>
            {data.plants.map(plant => (
              <Plant key={plant.id} item={plant} />
            ))}
          </ul>
        )
      }}
    </Query>
  </div>
)

export default Plants
