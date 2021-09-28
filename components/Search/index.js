import { useEffect, useState, useRef } from 'react'

import { useLocations } from '../../hooks/useLocations'

import Button from '../Button'

import * as S from './styles'

export const schedulesOptions = [
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
  const firstRender = useRef(true)
  const { locations, searchLocations, previewSearchLocations, cleanSearch } =
    useLocations()
  const { data, loading } = locations

  const [fields, setFields] = useState({
    schedule: '',
    showClosed: false
  })

  const handleOnChange = (field, value) => {
    setFields((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    await searchLocations(fields.schedule, fields.showClosed)
  }

  const handleReset = async () => {
    setFields({
      schedule: '',
      showClosed: false
    })
    cleanSearch()
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    previewSearchLocations(fields.schedule, fields.showClosed)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields])

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
                checked={fields.schedule === option.value}
                onChange={() => handleOnChange('schedule', option.value)}
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
              checked={fields.showClosed}
              onChange={() => handleOnChange('showClosed', !fields.showClosed)}
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
