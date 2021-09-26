import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/global'
import theme from '../styles/theme'

import { LocationsProvider } from '../contexts/LocationsContext'

function MyApp({ Component, pageProps }) {
  return (
    <LocationsProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </LocationsProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired
}

export default MyApp
