import { PureComponent } from 'react'

import { Nav, UserConsumer, Signin, Signout } from '.'

class Header extends PureComponent {
  render = () => (
    <header>
      <Nav />
      <UserConsumer>
        {({ me }) => {
          if (me) {
            return (
              <Signout>
                {signout => (
                  <div>
                    {me.email}
                    <button type="button" onClick={signout}>
                      logout
                    </button>
                  </div>
                )}
              </Signout>
            )
          }

          return <Signin />
        }}
      </UserConsumer>
    </header>
  )
}

export default Header
