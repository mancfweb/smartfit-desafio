import PropTypes from 'prop-types'

import { LocationsSearchShape } from '../../utils/shapes/locations'
import { useLocations } from '../../hooks/useLocations'

import Loading from '../Loading'
import UnitCard from './components/UnitCard'

import * as S from './styles'

const Items = ({ hasData, data }) => {
  if (!hasData) return <p>Nenhuma unidade encontrada</p>

  return data.locations.map((item) => <UnitCard data={item} key={item.id} />)
}

const UnitsList = () => {
  const { locations } = useLocations()
  const { data, loading } = locations

  const hasData = data.total > 0

  return (
    <S.List>
      {loading ? <Loading /> : <Items hasData={hasData} data={data} />}
    </S.List>
  )
}

Items.propTypes = {
  hasData: PropTypes.bool.isRequired,
  data: PropTypes.shape(LocationsSearchShape).isRequired
}

export default UnitsList
