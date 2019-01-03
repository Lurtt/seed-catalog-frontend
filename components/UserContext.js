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

  state = {
    isAdmin: false,
    me: null,
  }

  render = () => {
    const { children } = this.props
    return (
      <Query query={CURRENT_USER_QUERY} onCompleted={this.handleState}>
        {({ loading, error }) => {
          if (loading) return <h3>Loading app initial data...</h3>
          if (error) return <p>Error :(</p>

          return <Provider value={this.state}>{children}</Provider>
        }}
      </Query>
    )
  }

  handleState = data => {
    const { me } = this.state
    if (data.me !== me) {
      this.setState({
        me: data.me,
        isAdmin: data.me && data.me.role === 'ADMIN',
      })
    }
  }
}

export { UserProvider, Consumer as UserConsumer, CURRENT_USER_QUERY }
