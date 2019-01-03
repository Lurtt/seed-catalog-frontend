import { Fragment } from 'react'

import { Offers, CreateOffer, UserConsumer } from '../components'

const Home = () => (
  <Fragment>
    <UserConsumer>
      {({ isAdmin }) => (isAdmin ? <CreateOffer /> : null)}
    </UserConsumer>
    <Offers />
  </Fragment>
)

export default Home
