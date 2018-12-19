import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme as globalTheme } from '../css'
import { Header, Meta } from '.'

class Page extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={globalTheme}>
        <Fragment>
          <GlobalStyle />
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{children}</Inner>
          </StyledPage>
        </Fragment>
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
