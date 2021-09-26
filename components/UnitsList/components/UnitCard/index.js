/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import PropTypes from 'prop-types'

import { LocationsShape } from '../../../../utils/shapes/locations'
import Legend from '../../../Legend'

import * as S from './styles'

const options = ['mask', 'towel', 'fountain', 'locker_room']

const UnitCard = ({ data }) => (
  <S.Container>
    <S.Status $opened={data.opened}>
      {data.opened ? 'Aberto' : 'Fechado'}
    </S.Status>

    <h3>{data.title}</h3>

    <div
      className="address"
      dangerouslySetInnerHTML={{ __html: data.content }}
    />

    {data.opened && (
      <>
        <hr />

        <ul className="options-list">
          {options.map((opt) => (
            <Legend key={opt} item={opt} type={data[opt]} showLabel={false} />
          ))}
        </ul>

        <ul className="schedules-list">
          {data.schedules.map((item, index) => (
            <li key={`${data.id}-${index}`}>
              <p className="days">{item.weekdays}</p>
              <p>{item.hour}</p>
            </li>
          ))}
        </ul>
      </>
    )}
  </S.Container>
)

UnitCard.propTypes = {
  data: PropTypes.shape(LocationsShape).isRequired
}

export default UnitCard
