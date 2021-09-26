import { useEffect, useRef } from 'react'

import { useLocations } from '../../hooks/useLocations'

import Legend from '../Legend'

import * as S from './styles'

const items = [
  {
    id: 'mask',
    title: 'Máscara',
    options: ['required', 'recommended']
  },
  {
    id: 'towel',
    title: 'Toalha',
    options: ['required', 'recommended']
  },
  {
    id: 'fountain',
    title: 'Bebedouro',
    options: ['partial', 'not_allowed']
  },
  {
    id: 'locker_room',
    title: 'Vestiários',
    options: ['allowed', 'partial', 'closed']
  }
]

const LegendSection = () => {
  const sectionRef = useRef(null)
  const { locations } = useLocations()
  const { loading, scrollTo } = locations

  useEffect(() => {
    if (!loading && scrollTo && sectionRef) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [loading, scrollTo])

  return (
    <S.Container ref={sectionRef}>
      {items.map((item) => (
        <S.Item key={item.id}>
          <h4>{item.title}</h4>
          <ul className="options-list">
            {item.options.map((opt) => (
              <li key={`${item.id}-${opt}`}>
                <Legend item={item.id} type={opt} />
              </li>
            ))}
          </ul>
        </S.Item>
      ))}
    </S.Container>
  )
}

export default LegendSection
