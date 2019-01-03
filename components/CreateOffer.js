import { PureComponent } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Error from './ErrorMessage'
import { ALL_OFFERS_QUERY } from '.'

const CREATE_OFFER_MUTATION = gql`
  mutation CREATE_OFFER_MUTATION($name: String!) {
    createOffer(name: $name) {
      id
      name
    }
  }
`

class CreateOffer extends PureComponent {
  state = {
    name: '',
  }

  render = () => {
    const { name } = this.state
    return (
      <Mutation
        mutation={CREATE_OFFER_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_OFFERS_QUERY }]}
      >
        {(createOffer, { loading, error }) => (
          <form
            onSubmit={e => {
              e.preventDefault()
              createOffer()
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="name">
                New offer
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  value={name}
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

export default CreateOffer
