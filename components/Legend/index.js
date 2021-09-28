import PropTypes from 'prop-types'

import * as S from './styles'

const types = {
  required: 'Obrigatório',
  recommended: 'Recomendado',
  partial: 'Parcial',
  not_allowed: 'Proibido',
  allowed: 'Liberado',
  closed: 'Fechado'
}

const Legend = ({ item, type, showLabel }) => (
  <S.Container>
    <S.Icon data-testid={`icon-${item}-${type}`} $item={item} $type={type} />
    {showLabel && <span>{types[type]}</span>}
  </S.Container>
)

Legend.propTypes = {
  item: PropTypes.oneOf(['mask', 'towel', 'fountain', 'locker_room'])
    .isRequired,
  type: PropTypes.oneOf([
    'required',
    'recommended',
    'partial',
    'not_allowed',
    'allowed',
    'closed'
  ]).isRequired,
  showLabel: PropTypes.bool
}

Legend.defaultProps = {
  showLabel: true
}

export default Legend
