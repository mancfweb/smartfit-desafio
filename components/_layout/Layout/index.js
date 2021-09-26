import PropTypes from 'prop-types'

import Meta from '../Meta'
import Header from '../Header'
import Footer from '../Footer'

import * as S from './styles'

const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />
    <S.Container>{children}</S.Container>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
