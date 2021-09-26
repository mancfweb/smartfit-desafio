import PropTypes from 'prop-types'

import * as S from './styles'

// const legend = {
//   mask: {
//     title: 'Máscara',
//     required: {
//       label: 'Obrigatório',
//       icon: maskAllowed
//     },
//     recommended: {
//       label: 'Recomendado',
//       icon: maskRecommended
//     }
//   },
//   towel: {
//     title: 'Toalha',
//     required: {
//       label: 'Obrigatório',
//       icon: towelAllowed
//     },
//     recommended: {
//       label: 'Recomendado',
//       icon: towelRecommended
//     }
//   },
//   fountain: {
//     title: 'Bebedouro',
//     not_allowed: {
//       label: 'Proibido',
//       icon: fountainNotAllowed
//     },
//     partial: {
//       label: 'Parcial',
//       icon: fountainPartial
//     }
//   },
//   locker_room: {
//     title: 'Vestiários',
//     closed: {
//       label: 'Fechado',
//       icon: lockerroomClosed
//     },
//     partial: {
//       label: 'Parcial',
//       icon: lockerroomPartial
//     },
//     allowed: {
//       label: 'Liberado',
//       icon: lockerroomAllowed
//     }
//   }
// }

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
    <S.Icon $item={item} $type={type} />
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
