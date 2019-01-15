import { PureComponent, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Plant, UserConsumer } from '.'

const ALL_PLANTS_QUERY = gql`
  query ALL_PLANTS_QUERY($name: String) {
    plants(where: { name_contains: $name }) {
      id
      name
    }
  }
`

const CREATE_PLANT_MUTATION = gql`
  mutation CREATE_PLANT_MUTATION($name: String!) {
    createPlant(name: $name) {
      id
      name
    }
  }
`

class Plants extends PureComponent {
  state = {
    name: '',
  }

  render = () => {
    const { name } = this.state
    return (
      <div>
        <h1>PLANTS</h1>
        <UserConsumer>
          {({ isAdmin }) => (
            <Fragment>
              {isAdmin && (
                <Mutation
                  mutation={CREATE_PLANT_MUTATION}
                  variables={this.state}
                  refetchQueries={[{ query: ALL_PLANTS_QUERY }]}
                >
                  {createPlant => (
                    <form
                      onSubmit={async e =>
                        this.handleCreatePlant(e, createPlant)
                      }
                    >
                      <fieldset>
                        <label htmlFor="plant">
                          <input
                            type="text"
                            id="plant"
                            name="plant"
                            placeholder="plant name"
                            value={name}
                            onChange={this.handleFilter}
                          />
                        </label>
                      </fieldset>
                    </form>
                  )}
                </Mutation>
              )}
              <Query
                query={ALL_PLANTS_QUERY}
                variables={this.state}
                fetchPolicy="cache-and-network"
              >
                {({ data, error, loading, refetch }) => {
                  if (loading) return <h1>Loading...</h1>
                  if (error) return <h1>{error.message}</h1>

                  return (
                    <ul>
                      {data.plants.map(plant => (
                        <Plant
                          key={plant.id}
                          item={plant}
                          canRemove={isAdmin}
                          refetch={refetch}
                        />
                      ))}
                    </ul>
                  )
                }}
              </Query>
            </Fragment>
          )}
        </UserConsumer>
      </div>
    )
  }

  handleCreatePlant = async (event, mutation) => {
    event.preventDefault()
    await mutation()
    this.setState({ name: '' })
  }

  handleFilter = event => {
    const name = event.target.value
    this.setState({ name })
  }
}

export { ALL_PLANTS_QUERY }
export default Plants
