import { useEffect, useState } from 'react'

import { useLocations } from '../../hooks/useLocations'

import Button from '../Button'

import * as S from './styles'

const schedulesOptions = [
  {
    value: 'manha',
    period: 'Manhã',
    schedule: '06:00 às 12:00'
  },
  {
    value: 'tarde',
    period: 'Tarde',
    schedule: '12:01 às 18:00'
  },
  {
    value: 'noite',
    period: 'Noite',
    schedule: '18:01 às 23:00'
  }
]

const Search = () => {
  const { locations, searchLocations, previewSearchLocations } = useLocations()
  const { data, loading } = locations

  const [schedule, setSchedule] = useState('')
  const [showClosed, setShowClosed] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    await searchLocations(schedule, showClosed)
  }

  const handleReset = async () => {
    setSchedule('')
    setShowClosed(false)
    await previewSearchLocations('', false)
  }

  useEffect(() => {
    if (!loading) {
      previewSearchLocations(schedule, showClosed)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule, showClosed])

  return (
    <S.Container>
      <h4>Horário</h4>

      <S.Form noValidate onSubmit={handleSubmit}>
        <h2>Qual período quer treinar?</h2>

        <ul className="options">
          {schedulesOptions.map((option) => (
            <li key={option.value}>
              <input
                id={option.value}
                type="radio"
                name="schedule"
                value={option.value}
                checked={schedule === option.value}
                onChange={() => setSchedule(option.value)}
              />
              <label htmlFor={option.value}>
                <span>{option.period}</span>
                {option.schedule}
              </label>
            </li>
          ))}
        </ul>

        <div className="closed-results">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              name="show_closed"
              id="show_closed"
              checked={showClosed}
              onChange={() => setShowClosed((prev) => !prev)}
            />
            <label htmlFor="show_closed">Exibir unidades fechadas</label>
          </div>
          <p>
            Resultados encontrados: <strong>{data.total}</strong>
          </p>
        </div>

        <div className="actions">
          <Button type="submit" loading={loading}>
            Encontrar Unidade
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Limpar
          </Button>
        </div>
      </S.Form>
    </S.Container>
  )
}

export default Search
