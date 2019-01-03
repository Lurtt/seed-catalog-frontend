import { PureComponent } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Error from './ErrorMessage'
import { CURRENT_USER_QUERY } from '.'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
      role
    }
  }
`

class Signin extends PureComponent {
  state = {
    email: '',
    password: '',
  }

  render = () => {
    const { email, password } = this.state
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { loading, error }) => (
          <form
            onSubmit={async e => {
              e.preventDefault()
              await signin()
              this.setState({ email: '', password: '' })
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="email">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
}

export default Signin
