import PropTypes from 'prop-types'

import Loading from '../Loading'

import * as S from './styles'

const Button = ({ type, children, variant, loading, disabled, ...rest }) => (
  <S.Container
    $variant={variant}
    $loading={loading}
    type={type}
    disabled={loading || disabled}
    {...rest}
  >
    {loading ? <Loading /> : children}
  </S.Container>
)

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'outlined']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ]).isRequired
}

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  loading: false,
  disabled: false
}

export default Button
