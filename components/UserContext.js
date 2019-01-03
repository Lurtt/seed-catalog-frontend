import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const { Provider, Consumer } = React.createContext()

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      role
    }
  }
`

class UserProvider extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render = () => {
    const { children } = this.props
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <h3>Loading app initial data...</h3>
          if (error) return <p>Error :(</p>

          return <Provider value={{ ...data }}>{children}</Provider>
        }}
      </Query>
    )
  }
}

export { UserProvider, Consumer as UserConsumer, CURRENT_USER_QUERY }
