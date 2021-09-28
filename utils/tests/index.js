/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../styles/global'
import theme from '../../styles/theme'

import { LocationsProvider } from '../../contexts/LocationsContext'
import { mockLocations } from './mocks/locations'

const AllTheProviders = ({ children }) => (
  <LocationsProvider initialData={mockLocations}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </LocationsProvider>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
