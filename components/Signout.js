import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { CURRENT_USER_QUERY } from '.'

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout
  }
`

const Signout = ({ children, ...rest }) => (
  <Mutation
    {...rest}
    mutation={SIGNOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {payload => children(payload)}
  </Mutation>
)

Signout.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Signout
