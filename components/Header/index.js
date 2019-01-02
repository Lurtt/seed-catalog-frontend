import React from 'react'

import { Nav, User, Signin, Signout } from '..'

const Header = () => (
  <header>
    <Nav />
    <User>
      {({ data: { me }, loading }) =>
        !loading && me ? (
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
        ) : (
          <Signin />
        )
      }
    </User>
  </header>
)

export default Header
