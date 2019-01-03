import { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme as globalTheme } from '../css'
import { Header, Meta } from '.'
import { UserProvider } from './UserContext'

class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render = () => {
    const { children } = this.props

    return (
      <ThemeProvider theme={globalTheme}>
        <UserProvider>
          <Fragment>
            <GlobalStyle />
            <StyledPage>
              <Meta />
              <Header />
              <Inner>{children}</Inner>
            </StyledPage>
          </Fragment>
        </UserProvider>
      </ThemeProvider>
    )
  }
}

const StyledPage = styled.div`
  background-color: white;
  color: #393939;
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

export default Page
